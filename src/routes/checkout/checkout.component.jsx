import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../../components/cart-item/cart-item.component";

import "./checkout.styles.scss";

import "../../components/cart-item/cart-item.styles.scss";

import React from "react";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="cart">
        <h2>Warenkorb</h2>
        {cartItems &&
          cartItems.map((item) => (
            <CartItem cartItem={item} key={item.id}></CartItem>
          ))}
      </div>
      <div className="pay">
        <h2>Gesamtsumme</h2>
      </div>
    </div>
  );
};

export default Checkout;
