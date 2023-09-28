import { USER_ACTION_TYPES } from "../redux-types/user.types";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.CHECK_USER_SESSION:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.EMAIL_SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
        creds: payload,
      }
    case USER_ACTION_TYPES.GOOGLE_SIGN_IN_START:
      return {
        ...state,
        isLoading: true,
      }
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};
