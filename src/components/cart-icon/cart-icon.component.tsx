import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setCartIsOpen } from "../../store/reducers/cart.reducer";

import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/selectors/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

type CartIconProp = {
  styleProp: string;
};

const CartIcon = ({ styleProp }: CartIconProp) => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const dispatch = useDispatch();

  const toggleIsCartOpen = useCallback(
    () => dispatch(setCartIsOpen(!isCartOpen)),
    [dispatch, isCartOpen]
  );

  return (
    <CartIconContainer
      onClick={toggleIsCartOpen}
      style={{ color: `${styleProp}` }}
    >
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
