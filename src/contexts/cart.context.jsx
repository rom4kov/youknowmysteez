import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  itemCount: 0,
  sumTotal: 0,
  decreaseQtyOfCartItem: () => {},
  increaseQtyOfCartItem: () => {},
});

const CART_ACTIONS_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in the cartReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemCount: 0,
  sumTotal: 0,
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, itemCount, sumTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, bool));
  };

  const updateCartItemsReducer = (newCartItems) => {
    const newItemCount = newCartItems.reduce((a, b) => a + b.quantity, 0);
    const newSumTotal = newCartItems.reduce(
      (a, b) => a + b.price * b.quantity,
      0
    );
    dispatch(
      createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        itemCount: newItemCount,
        sumTotal: newSumTotal,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeItemFromCart = (cartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItem);
    updateCartItemsReducer(newCartItems);
  };

  const decreaseQtyOfCartItem = (checkoutItem) => {
    const newCartItems = decreaseQuantity(cartItems, checkoutItem);
    updateCartItemsReducer(newCartItems);
  };

  const increaseQtyOfCartItem = (checkoutItem) => {
    const newCartItems = increaseQuantity(cartItems, checkoutItem);
    updateCartItemsReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    itemCount,
    sumTotal,
    decreaseQtyOfCartItem,
    increaseQtyOfCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
