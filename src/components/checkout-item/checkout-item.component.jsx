import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ checkoutItem }) => {
  const { brand, price, imageUrl, name, quantity } = checkoutItem;

  const { removeItemFromCart } = useContext(CartContext);

  const removeItem = () => removeItemFromCart(checkoutItem);

  return (
    <div className="checkout-item">
      <img className="checkout-item-img" src={imageUrl} alt={name}></img>
      <div className="checkout-item-brand-price">
        <span className="checkout-item-brand">{brand}</span>
        <span className="checkout-item-price">{price * quantity},00 €</span>
      </div>
      <h2 className="name">{name}</h2>
      <span className="quantity">Anzahl: {quantity}</span>
      <span className="remove-item" onClick={removeItem}>
        Artikel entfernen
      </span>
    </div>
  );
};

export default CheckoutItem;
