import { call } from "typed-redux-saga/macro";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import { throwError } from "redux-saga-test-plan/providers";

import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";

import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from "../category.saga";

import {
  fetchCategoriesFailed,
  fetchCategoriesSuccess,
} from "../../reducers/category.reducer";

describe("category saga tests", () => {
  test("categoriesSaga", () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  test("onFetchCategories", () => {
    testSaga(onFetchCategories)
      .next()
      .takeLatest("categories/fetchCategoriesStart", fetchCategoriesAsync)
      .next()
      .isDone();
  });

  test("fetchCategoriesAsync success", () => {
    const mockCategoriesArray = [
      { id: 1, name: "Category 1" },
      { id: 1, name: "Category 1" },
    ];

    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), mockCategoriesArray]])
      .put(fetchCategoriesSuccess(mockCategoriesArray))
      .run();
  });

  test("fetchCategoriesAsync failure", () => {
    const mockError = new Error("An error occurred");

    return expectSaga(fetchCategoriesAsync)
      .provide([[call(getCategoriesAndDocuments), throwError(mockError)]])
      .put(fetchCategoriesFailed(mockError))
      .run();
  });
});
