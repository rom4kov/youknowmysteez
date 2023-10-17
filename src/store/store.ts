// import {
//   compose,
//   legacy_createStore as createStore,
//   applyMiddleware,
// } from "redux";
import {
  compose,
  configureStore,
  // applyMiddleware,
  Middleware,
} from "@reduxjs/toolkit";

import { persistStore, persistReducer, PersistConfig } from "redux-persist";

import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

// // import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./root-saga";

import { rootReducer } from "./root-reducer";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  // thunk,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

// const composedEnhancer =
//   (process.env.NODE_ENV !== "production" &&
//     window &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;
//
// const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(...middleWares),
});

// export const store = createStore(
//   persistedReducer,
//   undefined,
//   composedEnhancers
// );

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
