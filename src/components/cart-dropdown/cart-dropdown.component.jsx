import { useContext } from "react";

import { Navigate, useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems, sumTotal } =
    useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };

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
      <Button onClick={goToCheckoutHandler}>Zum Warenkorb</Button>
    </div>
  );
};

export default CartDropdown;
