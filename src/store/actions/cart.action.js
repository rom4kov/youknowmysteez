import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "../redux-types/cart.types";

export const setCartIsOpen = (isCartOpen) => {
  console.log("isCartOpen in cart.action: ", isCartOpen);
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);
};

export const setCartItems = ({ cartItems, itemCount, sumTotal }) =>
  createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems,
    itemCount,
    sumTotal,
  });
