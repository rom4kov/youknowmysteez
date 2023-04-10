import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

import { ReactComponent as MinusIcon } from "../../assets/svgs/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/svgs/plus.svg";

const CheckoutItem = ({ checkoutItem }) => {
  const { brand, price, imageUrl, name, quantity } = checkoutItem;

  const { removeItemFromCart } = useContext(CartContext);

  const removeItem = () => removeItemFromCart(checkoutItem);

  return (
    <div className="checkout-item">
      <img className="checkout-item-img" src={imageUrl} alt={name}></img>
      <span className="checkout-item-brand">{brand}</span>
      <h2 className="name">{name}</h2>
      <div className="quantity">
        Anzahl:
        <span style={{ marginInline: ".25rem" }}>
          <MinusIcon style={{ transform: "scale(.9) translateY(.2rem)" }} />
        </span>
        {quantity}
        <span style={{ marginInline: ".25rem" }}>
          <PlusIcon style={{ transform: "scale(.9) translateY(.2rem)" }} />
        </span>
      </div>
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
