import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setCartIsOpen } from "../../store/actions/cart.action";

import {
  selectIsCartOpen,
  selectNewCartItems,
} from "../../store/selectors/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ styleProp }) => {
  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const toggleIsCartOpen = () => {
    return dispatch(setCartIsOpen(!isCartOpen));
  };

  const { itemCount } = useSelector(selectNewCartItems);

  return (
    <CartIconContainer
      onClick={toggleIsCartOpen}
      style={{ color: `${styleProp}` }}
    >
      <ShoppingIcon />
      <ItemCount>{itemCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
