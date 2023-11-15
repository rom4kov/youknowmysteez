import { call } from "typed-redux-saga/macro";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import { USER_ACTION_TYPES } from "../../redux-types/user.types";

import {
  userSagas,
  onCheckUserSession,
  onSignUpStart,
  onSignUpSuccess,
  onGoogleSignIn,
  onEmailSignIn,
  onSignOutStart,
  isUserAuthenticated,
} from "../user.saga";

describe("User Saga tests", () => {
  test("userSagas", () => {
    testSaga(userSagas)
      .next()
      .all([
        call(onCheckUserSession),
        call(onSignUpStart),
        call(onSignUpSuccess),
        call(onGoogleSignIn),
        call(onEmailSignIn),
        call(onSignOutStart),
      ])
      .next()
      .isDone();
  });

  test("onCheckUserSession", () => {
    testSaga(onCheckUserSession)
      .next()
      .takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
      .next()
      .isDone();
  });
});
