import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import "./checkout.styles.scss";

import "../../components/checkout-item/checkout-item.styles.scss";

import React from "react";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="cart">
        <h2 className="cart-title">Warenkorb</h2>
        {cartItems &&
          cartItems.map((item) => (
            <CheckoutItem checkoutItem={item} key={item.id}></CheckoutItem>
          ))}
      </div>
      <div className="pay">
        <h2>Gesamtsumme</h2>
      </div>
    </div>
  );
};

export default Checkout;
