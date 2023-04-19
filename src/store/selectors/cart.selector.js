import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectNewCartItems = createSelector(
  [selectCartItems],
  (newCartItems) => {
    const cartItems = newCartItems.cartItems;
    const newItemCount = newCartItems.reduce((a, b) => a + b.quantity, 0);
    const newSumTotal = newCartItems.reduce(
      (a, b) => a + b.price * b.quantity,
      0
    );
    return {
      cartItems,
      newItemCount,
      newSumTotal,
    };
  }
);
