import { call } from "typed-redux-saga/macro";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import { signInSuccess, signInFailed } from "../../reducers/user.reducer";

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
  signUp,
  signInAfterSignUp,
  signInWithGoogle,
  signInWithEmail,
  signOut,
  getSnapshotFromUserAuth,
} from "../user.saga";

import { getCurrentUser } from "../../../utils/firebase/firebase.utils";

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

  test("onSignUpStart", () => {
    testSaga(onSignUpStart)
      .next()
      .takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
      .next()
      .isDone();
  });

  test("onSignUpSuccess", () => {
    testSaga(onSignUpSuccess)
      .next()
      .takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp)
      .next()
      .isDone();
  });

  test("onGoogleSignIn", () => {
    testSaga(onGoogleSignIn)
      .next()
      .takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle)
      .next()
      .isDone();
  });

  test("onEmailSignIn", () => {
    testSaga(onEmailSignIn)
      .next()
      .takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail)
      .next()
      .isDone();
  });

  test("onSignOutStart", () => {
    testSaga(onSignOutStart)
      .next()
      .takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut)
      .next()
      .isDone();
  });

  test("isUserAuthenticated success", () => {
    const mockUserAuth = {
      createdAt: {
        seconds: 1695845178,
        nanoseconds: 91000000,
      },
      displayName: "John Smith",
      email: "john@smith.com",
      id: "vUqKlL3PmwhBJHe2oS0Fyew9r972",
    };

    return expectSaga(isUserAuthenticated)
      .provide([[call(getCurrentUser), mockUserAuth]])
      .call(getSnapshotFromUserAuth, mockUserAuth)
      .run();
  });

  test("isUserAuthenticated failure", () => {
    const mockError = new Error("An error occurred");

    return expectSaga(isUserAuthenticated)
      .provide([[call(getCurrentUser), throwError(mockError)]])
      .put(signInFailed(mockError))
      .run();
  });

  test("signUp", () => {
    const mockUserCredentials = {};
  });
});
