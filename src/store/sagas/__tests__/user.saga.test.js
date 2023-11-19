import { call } from "typed-redux-saga/macro";
import { testSaga, expectSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
} from "../../reducers/user.reducer";

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

import {
  getCurrentUser,
  createAuthUserWithEmailAndPassword,
  signInAuthUserEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../../utils/firebase/firebase.utils";

describe("User Saga tests", () => {
  const userAuth = {
    createdAt: {
      seconds: 1695845178,
      nanoseconds: 91000000,
    },
    displayName: "John Smith",
    email: "john@smith.com",
    id: "vUqKlL3PmwhBJHe2oS0Fyew9r972",
  };

  const email = "jason@future.liberation";
  const password = "asdfasdf";
  const userCredentials = {
    operationType: "signIn",
    providerId: null,
    displayName: "Jason",
    user: {
      email: "jason@future.liberation",
      uid: "dsf98dfu98ud43oiu98fu983ufs98fu9s",
      accessToken: "spd98fdfPNsdofuf8wSHsd89fJ823",
    },
  };
  const { user } = userCredentials;
  const { displayName } = userCredentials;

  const additionalDetails = {
    displayName: displayName,
  };

  const mockError = new Error("An error occurred");

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
    return expectSaga(isUserAuthenticated)
      .provide([[call(getCurrentUser), userAuth]])
      .call(getSnapshotFromUserAuth, userAuth)
      .run();
  });

  test("isUserAuthenticated failure", () => {
    return expectSaga(isUserAuthenticated)
      .provide([[call(getCurrentUser), throwError(mockError)]])
      .put(signInFailed(mockError))
      .run();
  });

  test("signUp success", () => {
    return expectSaga(signUp, { payload: { email, password, displayName } })
      .provide([
        [
          call(createAuthUserWithEmailAndPassword, email, password),
          userCredentials,
        ],
      ])
      .put(signUpSuccess(user, { displayName }))
      .run();
  });

  test("signUp failure", () => {
    return expectSaga(signUp, { payload: { email, password, displayName } })
      .provide([
        [
          call(createAuthUserWithEmailAndPassword, email, password),
          throwError(mockError),
        ],
      ])
      .put(signUpFailed(mockError))
      .run();
  });

  test("signInAfterSignUp", () => {
    testSaga(signInAfterSignUp, { payload: { user, additionalDetails } })
      .next()
      .call(getSnapshotFromUserAuth, user, additionalDetails)
      .next()
      .isDone();
  });

  test("signInWithEmail success", () => {
    return expectSaga(signInWithEmail, { payload: { email, password } })
      .provide([
        [
          call(signInAuthUserEmailAndPassword, email, password),
          userCredentials,
        ],
      ])
      .call(getSnapshotFromUserAuth, user)
      .run();
  });

  test("signInWithEmail failure", () => {
    return expectSaga(signInWithEmail, { payload: { email, password } })
      .provide([
        [
          call(signInAuthUserEmailAndPassword, email, password),
          throwError(mockError),
        ],
      ])
      .put(signInFailed(mockError))
      .run();
  });

  test("signInWithGoogle success", () => {
    return expectSaga(signInWithGoogle)
      .provide([[call(signInWithGooglePopup), { user }]])
      .call(getSnapshotFromUserAuth, user)
      .run();
  });

  test("signInWithGoogle failure", () => {
    return expectSaga(signInWithGoogle)
      .provide([[call(signInWithGooglePopup), throwError(mockError)]])
      .put(signInFailed(mockError))
      .run();
  });

  test("signOut success", () => {
    return expectSaga(signOut).call(signOutUser).put(signOutSuccess()).run();
  });

  test("signOut failure", () => {
    return expectSaga(signOut)
      .provide([[call(signOutUser), throwError(mockError)]])
      .put(signOutFailed(mockError))
      .run();
  });
});
