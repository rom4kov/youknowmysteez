import { createSlice } from "@reduxjs/toolkit";

import { createAction } from "../../utils/reducer/reducer.utils";

import { USER_ACTION_TYPES } from "../redux-types/user.types";

import { SignInUser } from "../sagas/user.saga";

export type UserType = {
  currentUser: null;
  isLoading: boolean;
  error: null;
};

const INITIAL_STATE: UserType = {
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
  signOutFailed,
} = userSlice.actions;

export const signUpStart = (
  email: string,
  password: string,
  displayName: string
) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });

export const signUpSuccess = ({
  user,
  additionalDetails,
}: SignInUser["payload"]) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails });

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email: string, password: string) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const userReducer = userSlice.reducer;
