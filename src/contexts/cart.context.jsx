import { createContext, useEffect, useState } from "react";

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

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [sumTotal, setSumTotal] = useState(0);

  useEffect(() => {
    const newItemCount = cartItems.reduce((a, b) => a + b.quantity, 0);
    setItemCount(newItemCount);
  }, [cartItems]);

  useEffect(() => {
    const newSumTotal = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
    setSumTotal(newSumTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItem) => {
    setCartItems(removeCartItem(cartItems, cartItem));
  };

  const decreaseQtyOfCartItem = (checkoutItem) => {
    setCartItems(decreaseQuantity(cartItems, checkoutItem));
  };

  const increaseQtyOfCartItem = (checkoutItem) => {
    setCartItems(increaseQuantity(cartItems, checkoutItem));
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