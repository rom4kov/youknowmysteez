import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { isCartOpen, cartItems } = useContext(CartContext);

  const sumTotal = cartItems.reduce((a, b) => a + b.price * b.quantity, 0);

  console.log("cartItems in cart-dropdown:", cartItems);

  return (
    <div className={`cart-dropdown-container ${isCartOpen ? "open" : ""}`}>
      <div className="cart-items">
        {cartItems &&
          cartItems.map((item) => (
            <CartItem
              isCartOpen={isCartOpen}
              cartItem={item}
              key={item.id}
            ></CartItem>
          ))}
      </div>
      <div className="sum-total">
        <span>Gesamtsumme:</span>
        <span>{sumTotal},00 €</span>
      </div>
      <Button>Zum Warenkorb</Button>
    </div>
  );
};

export default CartDropdown;
