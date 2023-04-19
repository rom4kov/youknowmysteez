import { useEffect } from "react";

// import { ReactComponent as ShoppingIcon } from "../../assets/svgs/shopping-bag2.svg";

import { CartContext } from "../../contexts/cart.context";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { setCartIsOpen } from "../../store/actions/cart.action";

import {
  selectIsCartOpen,
  selectNewCartItems,
} from "../../store/selectors/cart.selector";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ styleProp }) => {
  // const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);

  // const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  const isCartOpen = useSelector(selectIsCartOpen);

  console.log("isCartOpen: ", isCartOpen);
  console.log("!isCartOpen: ", !isCartOpen);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(setCartIsOpen(isCartOpen));
  // }, []);
  const opposite = !isCartOpen;

  const toggleIsCartOpen = () => {
    return dispatch(setCartIsOpen(opposite));
  };

  const { itemCount } = useSelector(selectNewCartItems);
  console.log("itemCount: ", itemCount);

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
