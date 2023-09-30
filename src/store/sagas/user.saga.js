import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "store/redux-types/user.types";

import {
  signUpSuccess,
  signUpFailed,
  signInSuccess,
  signInFailed,
} from "store/actions/user.action";

import {
  db,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
  signInAuthUserEmailAndPassword,
  signOutUser,
  getCurrentUser,
} from "../../utils/firebase/firebase.utils";

import { doc, setDoc, getDoc } from "firebase/firestore";

export function* getUserFromUserAuth(user, additionalInformation) {
  console.log("user in getUserFromUserAuth:", user);
  try {
    yield call(createUserDocumentFromAuth, user, additionalInformation);
    const userDocRef = yield doc(db, "user", user.uid);
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      yield setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
    const userSnapshot = yield getDoc(userDocRef);
    console.log("payload1:", userSnapshot);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOut() {
  yield call(signOutUser);
}

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  console.log(
    "userAuth in getSnapshotFromUserAuth:",
    userAuth,
    additionalDetails
  );
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
    console.log("payload2:", userSnapshot.data());
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserEmailAndPassword,
      email,
      password
    );
    console.log(user);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInAfterSignUp(email, password) {
  try {
    const { user } = yield call(
      signInAuthUserEmailAndPassword,
      email,
      password
    );
    console.log(user);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    console.log("userAuth:", userAuth);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUpUser({ payload: { email, password, displayName } }) {
  try {
    console.log("signUpCreds:", email, password, displayName);
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    console.log("signedUpUser1:", user);
    if (!user) return;
    console.log("signedUpUser2:", user);
    yield put(signUpSuccess(user));
    yield call(getUserFromUserAuth, { ...user, displayName });
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* onSignUp() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUpUser);
}

export function* onGoogleSignIn() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignIn() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_USER, signOut);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onSignUp),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onSignOut),
  ]);
}
