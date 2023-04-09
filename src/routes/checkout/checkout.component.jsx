import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

import React from "react";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="cart">
        <h2>Warenkorb</h2>
        {{cartItems.map()}}
      </div>
      <div className="pay">
        <h2>Gesamtsumme</h2>
      </div>
    </div>
  );
};

export default Checkout;
