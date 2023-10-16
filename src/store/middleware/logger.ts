import { Middleware } from "redux";

import { RootState } from "../store";

export const loggerMiddleware: Middleware<unknown, RootState> =
  (store) => (next) => (action) => {
    console.log("action in store:", action);
    if (!action.type) {
      return next(action);
    }

    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("next state: ", store.getState());
  };
