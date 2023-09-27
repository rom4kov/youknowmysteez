import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "store/redux-types/user.types";

import { signInSuccess, signInFailed } from "store/actions/user.action";

import { getCurrentUser } from "../../utils/firebase/firebase.utils";

// export function* setCurrentUser() {

// 2}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    console.log("userAuth:", userAuth);
    if (!userAuth) return;
    yield put(signInSuccess(userAuth));
  } catch (error) {
    console.log("error", error);
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
