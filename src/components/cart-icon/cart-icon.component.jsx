import { useContext } from "react";

// import { ReactComponent as ShoppingIcon } from "../../assets/svgs/shopping-bag2.svg";

import { CartContext } from "../../contexts/cart.context";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setCartIsOpen } from "../../store/actions/cart.action";

import {
  selectIsCartOpen,
  selectCartItems,
} from "../../store/selectors/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ styleProp }) => {
  // const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);

  // const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setCartIsOpen(!isCartOpen));

  const { itemCount } = useSelector(selectCartItems);

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
