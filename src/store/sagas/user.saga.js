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

export function* signInSignedUpUser({ payload: { user, additionalDetails }}) {
  console.log("hello");
  try {
    const userDocRef = yield doc(db, "user", user.uid);
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      yield setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalDetails,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    };
    const userSnapshot = yield getDoc(userDocRef);
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signOut() {
  yield call(signOutUser);
}

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalDetails
    );
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
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    const additionalDetails = {};
    yield put(signUpSuccess({ ...user, displayName }, additionalDetails));
    // yield call(signInSignedUpUser, { ...user, displayName });
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInSignedUpUser);
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
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onSignOut),
  ]);
}
