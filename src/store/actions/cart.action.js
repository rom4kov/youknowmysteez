import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "../redux-types/cart.types";

export const setCartIsOpen = (isCartOpen) => {
  console.log("isCartOpen in cart.action: ", isCartOpen);
  return createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);
};

export const setCartItems = ({ cartItems, itemCount, sumTotal }) => {
  console.log("********** setCartItems action payload: ", {
    cartItems,
    itemCount,
    sumTotal,
  });
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems,
    itemCount,
    sumTotal,
  });
};
