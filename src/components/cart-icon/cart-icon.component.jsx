import { useContext } from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/svgs/shopping-bag2.svg";

import { CartContext } from "../../contexts/cart.context";

import "./cart-icon.styles.scss";

const CartIcon = ({ styleProp }) => {
  const { isCartOpen, setIsCartOpen, itemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div
      className="cart-icon-container"
      onClick={toggleIsCartOpen}
      style={{ color: `${styleProp}` }}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

export default CartIcon;
