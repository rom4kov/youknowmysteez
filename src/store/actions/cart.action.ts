import { CategoryItem } from "../redux-types/category.types";

import {
  createAction,
  withMatcher,
  // Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES, CartItem } from "../redux-types/cart.types";

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
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

const removeCartItem = (
  cartItems: CartItem[],
  cartItem: CartItem
): CartItem[] => {
  return cartItems.filter((el) => el.id !== cartItem.id);
};

const decreaseQuantity = (
  cartItems: CartItem[],
  checkoutItem: CartItem
): CartItem[] => {
  return cartItems.map((cartItem) =>
    cartItem.id === checkoutItem.id && checkoutItem.quantity > 1
      ? { ...cartItem, quantity: checkoutItem.quantity - 1 }
      : cartItem
  );
};

const increaseQuantity = (
  cartItems: CartItem[],
  checkoutItem: CartItem
): CartItem[] => {
  return cartItems.map((cartItem) =>
    cartItem.id === checkoutItem.id
      ? { ...cartItem, quantity: checkoutItem.quantity + 1 }
      : cartItem
  );
};

export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;

export const setCartIsOpen = withMatcher(
  (isCartOpen: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItem: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItem);
  return setCartItems(newCartItems);
};

export const decreaseQtyOfCartItem = (
  cartItems: CartItem[],
  checkoutItem: CartItem
) => {
  const newCartItems = decreaseQuantity(cartItems, checkoutItem);
  return setCartItems(newCartItems);
};

export const increaseQtyOfCartItem = (
  cartItems: CartItem[],
  checkoutItem: CartItem
) => {
  const newCartItems = increaseQuantity(cartItems, checkoutItem);
  return setCartItems(newCartItems);
};
