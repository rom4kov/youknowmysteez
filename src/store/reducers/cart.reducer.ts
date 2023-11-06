import { createSlice } from "@reduxjs/toolkit";

import { CartItemType } from "../redux-types/cart.types";

import { CategoryItem } from "../redux-types/category.types";

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItemType[];
};

const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

const addCartItem = (cartItems: CartItemType[], productToAdd: CategoryItem) => {
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

const removeCartItem = (cartItems: CartItemType[], cartItem: CartItemType) => {
  console.log(cartItems);
  return cartItems.filter((el) => el.id !== cartItem.id);
};

const decreaseQuantity = (
  cartItems: CartItemType[],
  checkoutItem: CartItemType
) => {
  return cartItems.map((cartItem) =>
    cartItem.id === checkoutItem.id && checkoutItem.quantity > 1
      ? { ...cartItem, quantity: checkoutItem.quantity - 1 }
      : cartItem
  );
};

const increaseQuantity = (
  cartItems: CartItemType[],
  checkoutItem: CartItemType
) => {
  return cartItems.map((cartItem) =>
    cartItem.id === checkoutItem.id
      ? { ...cartItem, quantity: checkoutItem.quantity + 1 }
      : cartItem
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: CART_INITIAL_STATE,
  reducers: {
    setCartIsOpen(state, action) {
      state.isCartOpen = action.payload;
    },
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    addItemToCart(state, action) {
      state.cartItems = addCartItem(state.cartItems, action.payload);
    },
    removeItemFromCart(state, action) {
      state.cartItems = removeCartItem(state.cartItems, action.payload);
    },
    decreaseQtyOfCartItem(state, action) {
      state.cartItems = decreaseQuantity(state.cartItems, action.payload);
    },
    increaseQtyOfCartItem(state, action) {
      state.cartItems = increaseQuantity(state.cartItems, action.payload);
    },
    clearCartItems(state) {
      state.cartItems = [];
    },
  },
});

export const {
  setCartIsOpen,
  setCartItems,
  addItemToCart,
  removeItemFromCart,
  decreaseQtyOfCartItem,
  increaseQtyOfCartItem,
  clearCartItems,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
