import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {
    fetchCategoriesStart(state) {
      state.isLoading = true;
    },
    fetchCategoriesSuccess(state, action) {
      state.categories = action.payload;
      state.isLoading = false;
    },
    fetchCategoriesFailed(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categoriesSlice.actions;

// import { createAction } from "../../utils/reducer/reducer.utils";

// import { CATEGORIES_ACTION_TYPES } from "../redux-types/category.types";

// export const fetchCategoriesStart = () =>
//   createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const categoriesReducer = categoriesSlice.reducer;

// export const CATEGORIES_INITIAL_STATE = {
//   categories: [],
//   isLoading: false,
//   error: null,
// };

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
//       return { ...state, isLoading: true };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
//       return { ...state, categories: payload, isLoading: false };
//     case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIL:
//       return { ...state, error: payload, isLoading: false };
//     default:
//       return state;
//   }
// };
