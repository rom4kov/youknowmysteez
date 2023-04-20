import { createSelector } from "reselect";

const selectCartReducer = (state) => {
  console.log("STAAATE . CAAART: ", state.cart);
  return state.cart;
};

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    console.log(cartSlice.isCartOpen);
    return cartSlice.isCartOpen;
  }
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => {
    console.log("cartSlice1", cartSlice);
    console.log("cartItems1", cartSlice.cartItems);
    return cartSlice.cartItems;
  }
);

export const selectNewCartItems = createSelector(
  [selectCartItems],
  (cartItems) => {
    console.log("cartItems2: ", cartItems);
    const itemCount = cartItems.reduce((a, b) => a + b.quantity, 0);
    const sumTotal = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
    return {
      cartItems,
      itemCount,
      sumTotal,
    };
  }
);
