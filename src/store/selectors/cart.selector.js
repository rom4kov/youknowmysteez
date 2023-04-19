import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

console.log(selectCartReducer);

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
    console.log(cartSlice);
    return cartSlice.cartItems;
  }
);

export const selectNewCartItems = createSelector(
  [selectCartItems],
  (newCartItems) => {
    console.log(newCartItems);
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
