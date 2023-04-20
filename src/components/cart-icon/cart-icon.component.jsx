import { useDispatch, useSelector } from "react-redux";

import { setCartIsOpen } from "../../store/actions/cart.action";

import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/selectors/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ styleProp }) => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setCartIsOpen(!isCartOpen));

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
