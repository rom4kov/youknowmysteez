import { createAction } from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES } from "../redux-types/cart.types";

// import { store } from "../store";

// const cartItems = store.getState().cart.cartItems;

export const setCartIsOpen = (isCartOpen) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen);

// export const setCartItems = ({ cartItems, itemCount, sumTotal }) => {
//   return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
//     cartItems,
//     itemCount,
//     sumTotal,
//   });
// };

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const existingItem = cartItems.find((item) => item.id === productToAdd.id);
  // If found, increment quantity
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItem) => {
  return cartItems.filter((el) => el.id !== cartItem.id);
};

const decreaseQuantity = (cartItems, checkoutItem) => {
  return cartItems.map((cartItem) =>
    cartItem.id === checkoutItem.id && checkoutItem.quantity > 1
      ? { ...cartItem, quantity: checkoutItem.quantity - 1 }
      : cartItem
  );
};

const increaseQuantity = (cartItems, checkoutItem) => {
  return cartItems.map((cartItem) =>
    cartItem.id === checkoutItem.id
      ? { ...cartItem, quantity: checkoutItem.quantity + 1 }
      : cartItem
  );
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, cartItem) => {
  const newCartItems = removeCartItem(cartItems, cartItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const decreaseQtyOfCartItem = (cartItems, checkoutItem) => {
  const newCartItems = decreaseQuantity(cartItems, checkoutItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const increaseQtyOfCartItem = (cartItems, checkoutItem) => {
  const newCartItems = increaseQuantity(cartItems, checkoutItem);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
