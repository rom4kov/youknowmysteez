import { createSlice } from "@reduxjs/toolkit";

import { createAction } from "../../utils/reducer/reducer.utils";

import { USER_ACTION_TYPES } from "../redux-types/user.types";

import { Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

import { User } from "firebase/auth";

import {
  UserData,
  AdditionalInformation,
} from "../../utils/firebase/firebase.utils";

export type SignUpSuccessArgs = {
  user: UserData;
  additionalDetails: AdditionalInformation;
};

export type Credentials = {
  email: string;
  password: string;
};

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    checkUserSession(state, action) {
      state.currentUser = action.payload;
    },
    signUpSuccess(state, action) {
      state.currentUser = action.payload;
    },
    signInSuccess(state, action) {
      state.currentUser = action.payload;
    },
    signOutSuccess(state) {
      state.currentUser = null;
    },
    signUpFailed(state, action) {
      state.error = action.payload;
    },
    signInFailed(state, action) {
      state.error = action.payload;
    },
    signOutFailed(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  checkUserSession,
  signInSuccess,
  signOutSuccess,
  signUpFailed,
  signInFailed,
  // signUpSuccess,
  signOutFailed,
} = userSlice.actions;

export type UserInfo = {
  email: string;
  password: string;
  displayName: string;
};

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  Credentials
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
): SignUpStart =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = (
  user: User,
  additionalDetails: AdditionalInformation
): SignUpSuccess =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const googleSignInStart = (): GoogleSignInStart =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (
  email: string,
  password: string
): EmailSignInStart =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signOutStart = (): SignOutStart =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const userReducer = userSlice.reducer;
