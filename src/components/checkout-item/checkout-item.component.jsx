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
      <span className="checkout-item-brand">{brand}</span>
      <h2 className="name">{name}</h2>
      <span className="quantity">Anzahl: - {quantity} +</span>
      <div className="checkout-item-remove-price">
        <span className="remove-item" onClick={removeItem}>
          Artikel entfernen
        </span>
        <span className="checkout-item-price">{price * quantity},00 €</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
