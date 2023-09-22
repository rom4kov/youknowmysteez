import { takeLatest, put, all, call } from "redux-saga/effects";

import { USER_ACTION_TYPES } from "store/redux-types/user.types";

import { signInSuccess, signInFailed } from "store/actions/user.action";

import { getCurrentUser } from "../../utils/firebase/firebase.utils";

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield put(signInSuccess(userAuth));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  yield all([call(onCheckUserSession)]);
}
