import { CART_ACTION_TYPES } from "../redux-types/cart.types";

export const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemCount: 0,
  sumTotal: 0,
};

export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in the cartReducer`);
  }
};
