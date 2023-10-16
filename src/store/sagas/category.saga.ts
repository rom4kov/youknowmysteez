import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import {
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} from "../reducers/category.reducer";

export function* fetchCategoriesAsync() {
  try {
    console.log("check");
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

export function* onFetchCategories() {
  console.log("check");
  yield* takeLatest("categories/fetchCategoriesStart", fetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)]);
}
