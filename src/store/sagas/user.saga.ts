import { takeLatest, put, all, call } from "typed-redux-saga/macro";

import { EmailSignInStart } from "../reducers/user.reducer";

import { USER_ACTION_TYPES } from "../redux-types/user.types";

import { User, UserCredential } from "firebase/auth";

export type AdditionalUserInfo = {
  isNewUser: boolean;
  profile: object | null;
  providerId: string;
  username?: string | null;
};

export type SignInUser = {
  payload: {
    user: UserCredential["user"];
    additionalDetails?: AdditionalUserInfo | null;
  };
};

import {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
  signOutSuccess,
  signOutFailed,
} from "../reducers/user.reducer";

import {
  db,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserEmailAndPassword,
  signOutUser,
  getCurrentUser,
  AdditionalInformation,
} from "../../utils/firebase/firebase.utils";

import { doc, setDoc, getDoc } from "firebase/firestore";

export function* signInSignedUpUser({
  payload: { user, additionalDetails },
}: SignInUser) {
  try {
    const userDocRef = yield* doc(db, "user", user.uid);
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      yield* setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalDetails,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
    const userSnapshot = yield* getDoc(userDocRef);
    yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield* put(signInFailed(error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error));
  }
}

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalDetails?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );

    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: EmailSignInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const { user } = userCredential;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailed(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    const additionalDetails = {};
    yield* put(signUpSuccess({ ...user, displayName }, additionalDetails));
  } catch (error) {
    yield* put(signUpFailed(error));
  }
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInSignedUpUser);
}

export function* onGoogleSignIn() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignIn() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield* all([
    call(onCheckUserSession),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onSignOutStart),
  ]);
}
