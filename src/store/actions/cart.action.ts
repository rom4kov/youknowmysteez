import { CategoryItem } from "../redux-types/category.types";

import {
  createAction,
  withMatcher,
  // Action,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

import { CART_ACTION_TYPES, CartItemType } from "../redux-types/cart.types";

const addCartItem = (
  cartItems: CartItemType[],
  productToAdd: CategoryItem
): CartItemType[] => {
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
  cartItems: CartItemType[],
  cartItem: CartItemType
): CartItemType[] => {
  return cartItems.filter((el) => el.id !== cartItem.id);
};

const decreaseQuantity = (
  cartItems: CartItemType[],
  checkoutItem: CartItemType
): CartItemType[] => {
  return cartItems.map((cartItem) =>
    cartItem.id === checkoutItem.id && checkoutItem.quantity > 1
      ? { ...cartItem, quantity: checkoutItem.quantity - 1 }
      : cartItem
  );
};

const increaseQuantity = (
  cartItems: CartItemType[],
  checkoutItem: CartItemType
): CartItemType[] => {
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
  CartItemType[]
>;

export const setCartIsOpen = withMatcher(
  (isCartOpen: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, isCartOpen)
);

export const setCartItems = withMatcher(
  (cartItems: CartItemType[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItemType[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItemType[],
  cartItem: CartItemType
) => {
  const newCartItems = removeCartItem(cartItems, cartItem);
  return setCartItems(newCartItems);
};

export const decreaseQtyOfCartItem = (
  cartItems: CartItemType[],
  checkoutItem: CartItemType
) => {
  const newCartItems = decreaseQuantity(cartItems, checkoutItem);
  return setCartItems(newCartItems);
};

export const increaseQtyOfCartItem = (
  cartItems: CartItemType[],
  checkoutItem: CartItemType
) => {
  const newCartItems = increaseQuantity(cartItems, checkoutItem);
  return setCartItems(newCartItems);
};
