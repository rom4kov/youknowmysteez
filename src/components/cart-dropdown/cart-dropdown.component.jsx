import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className={`cart-dropdown-container ${isCartOpen ? "open" : ""}`}>
      <div className="cart-items">
        <Button>Zum Warenkorb</Button>
      </div>
    </div>
  );
};

export default CartDropdown;
