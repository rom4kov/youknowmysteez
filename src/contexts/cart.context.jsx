import { createContext, useEffect, useReducer } from "react";

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

export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_ITEM_COUNT: "SET_ITEM_COUNT",
  SET_SUM_TOTAL: "SET_SUM_TOTAL",
};

const cartReducer = (state, action) => {
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
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_ITEM_COUNT:
      return {
        ...state,
        itemCount: payload,
      };
    case CART_ACTION_TYPES.SET_SUM_TOTAL:
      return {
        ...state,
        sumTotal: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in the userReducer`);
  }
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  itemCount: 0,
  sumTotal: 0,
};

export const CartProvider = ({ children }) => {
  // const [isCartOpen, setIsCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);
  // const [itemCount, setItemCount] = useState(0);
  // const [sumTotal, setSumTotal] = useState(0);

  const [{ isCartOpen, cartItems, itemCount, sumTotal }, dispatch] = useReducer(
    cartReducer,
    INITIAL_STATE
  );

  const setIsCartOpen = () => {
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: !isCartOpen,
    });
  };

  const setCartItems = (changeCartItems) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: changeCartItems,
    });
  };

  const setItemCount = (newItemCount) => {
    dispatch({ type: CART_ACTION_TYPES.SET_ITEM_COUNT, payload: newItemCount });
  };

  const setSumTotal = (newSumTotal) => {
    dispatch({ type: CART_ACTION_TYPES.SET_SUM_TOTAL, payload: newSumTotal });
  };

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
