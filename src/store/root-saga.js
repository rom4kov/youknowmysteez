import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./sagas/category.saga";
import { userSagas } from "./sagas/user.saga";

export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
