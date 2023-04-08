import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className={`cart-dropdown-container ${isCartOpen ? "open" : ""}`}>
      <div className="cart-items">
        {[].map((item) => (
          <CartItem cartItem={item}></CartItem>
        ))}
      </div>
      <Button>Zum Warenkorb</Button>
    </div>
  );
};

export default CartDropdown;
