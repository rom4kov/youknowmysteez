import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import {
  CheckoutItemContainer,
  CheckoutItemImg,
  CheckoutItemBrand,
  Name,
  Quantity,
  RemoveAndPrice,
  RemoveItem,
  Price,
} from "./checkout-item.styles";

import { ReactComponent as MinusIcon } from "../../assets/svgs/minus.svg";
import { ReactComponent as PlusIcon } from "../../assets/svgs/plus.svg";

const CheckoutItem = ({ checkoutItem }) => {
  const { brand, price, imageUrl, name, quantity } = checkoutItem;

  const { removeItemFromCart, decreaseQtyOfCartItem, increaseQtyOfCartItem } =
    useContext(CartContext);

  const removeItem = () => removeItemFromCart(checkoutItem);
  const decreaseQuantity = () => decreaseQtyOfCartItem(checkoutItem);
  const increaseQuantity = () => increaseQtyOfCartItem(checkoutItem);

  return (
    <CheckoutItemContainer>
      <CheckoutItemImg src={imageUrl} alt={`${name}`}></CheckoutItemImg>
      <CheckoutItemBrand>{brand}</CheckoutItemBrand>
      <Name>{name}</Name>
      <Quantity>
        Anzahl:
        <span className="minus-svg" style={{ marginInline: ".25rem" }}>
          <MinusIcon
            onClick={decreaseQuantity}
            style={{
              transform: "scale(.9) translateY(.2rem)",
              cursor: "pointer",
            }}
          />
        </span>
        <span className="qty-num-container">
          <span className="qty-num">{quantity}</span>
        </span>
        <span className="plus-svg" style={{ marginInline: ".25rem" }}>
          <PlusIcon
            onClick={increaseQuantity}
            style={{
              transform: "scale(.9) translateY(.2rem)",
              cursor: "pointer",
            }}
          />
        </span>
      </Quantity>
      <RemoveAndPrice>
        <RemoveItem onClick={removeItem}>Artikel entfernen</RemoveItem>
        <Price>{price * quantity},00 €</Price>
      </RemoveAndPrice>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
