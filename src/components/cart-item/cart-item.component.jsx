import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./cart-item.styles.scss";

const CartItem = ({ cartItem, isCartOpen }) => {
  const { brand, price, imageUrl, name, quantity } = cartItem;

  const { removeItemFromCart } = useContext(CartContext);

  const removeItem = () => removeItemFromCart(cartItem);

  return (
    <div className={`cart-item ${isCartOpen ? "open" : ""}`}>
      <img className="cart-item-img" src={imageUrl} alt={name}></img>
      <div className="cart-item-brand-price">
        <span className="cart-item-brand">{brand}</span>
        <span className="cart-item-price">{price * quantity},00 €</span>
      </div>
      <h2 className="name">{name}</h2>
      <span className="quantity">Anzahl: {quantity}</span>
      <span className="remove-item" onClick={removeItem}>
        Artikel entfernen
      </span>
    </div>
  );
};

export default CartItem;
