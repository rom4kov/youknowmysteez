import { useContext } from "react";

// import { ReactComponent as ShoppingIcon } from "../../assets/svgs/shopping-bag2.svg";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = ({ styleProp }) => {
  const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

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
