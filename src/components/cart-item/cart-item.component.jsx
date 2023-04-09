import "./cart-item.styles.scss";

import React from "react";

const CartItem = ({ cartItem, isCartOpen }) => {
  const { name, imageUrl, quantity } = cartItem;

  return (
    <div className={`cart-item ${isCartOpen ? "open" : ""}`}>
      <img src={imageUrl}></img>
      <h2 className="name">{name}</h2>
      <span className="quantity">{quantity}</span>
    </div>
  );
};

export default CartItem;
