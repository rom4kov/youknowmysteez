import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "../redux-types/cart.types";

export const setCategories = ({ newCartItems, newItemCount, newSumTotal }) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: newCartItems,
    itemCount: newItemCount,
    sumTotal: newSumTotal,
  });
