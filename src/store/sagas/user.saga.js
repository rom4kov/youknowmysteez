import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "store/redux-types/user.types";

import {
  signInSuccess,
  signInFailed,
  emailSignInStart,
} from "store/actions/user.action";

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserEmailAndPassword,
  signOutUser,
} from "../../utils/firebase/firebase.utils";

export function* googleSignIn() {
  try {
    const signedInUser = yield call(signInWithGooglePopup);
    yield put(signInSuccess(signedInUser));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* emailSignIn(action) {
  try {
    const { email, password } = action.payload;
    const userEmailSignIn = yield call(signInAuthUserEmailAndPassword, email, password);
    yield put(signInSuccess(userEmailSignIn));
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

export function* onGoogleSignIn() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onEmailSignIn() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* onSignOut() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_USER, signOut)
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onSignOut)
  ]);
}
