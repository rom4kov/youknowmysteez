import { CART_ACTION_TYPES } from "../redux-types/cart.types";

const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemCount: 0,
  sumTotal: 0,
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  console.log("state in cartReducer: ", state);
  console.log("action in cartReducer", action);

  // const type = "SET_CART_ITEMS";

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
      return state;
  }
};
