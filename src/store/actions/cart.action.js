import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "../redux-types/cart.types";

export const setCategories = (categoriesArray) =>
  createAction(CART_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
