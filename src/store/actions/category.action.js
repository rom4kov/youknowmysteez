import { createAction } from "../../utils/reducer/reducer.utils";

import { CATEGORIES_ACTION_TYPES } from "../redux-types/category.types";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesArray);
