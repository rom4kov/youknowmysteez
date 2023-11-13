import { call } from "typed-redux-saga/macro";
import { testSaga } from "redux-saga-test-plan";
import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from "../category.saga";

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
});
