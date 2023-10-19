import { useDispatch } from "react-redux";

import {
  removeItemFromCart,
  decreaseQtyOfCartItem,
  increaseQtyOfCartItem,
} from "../../store/reducers/cart.reducer";

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

import { CartItemType } from "../../store/redux-types/cart.types";

type CheckoutItemProps = {
  checkoutItem: CartItemType;
};

const CheckoutItem = ({ checkoutItem }: CheckoutItemProps) => {
  const { brand, price, imageUrl, name, quantity } = checkoutItem;

  const dispatch = useDispatch();

  const removeItem = () => dispatch(removeItemFromCart(checkoutItem));
  const decreaseQty = () => dispatch(decreaseQtyOfCartItem(checkoutItem));
  const increaseQty = () => dispatch(increaseQtyOfCartItem(checkoutItem));

  return (
    <CheckoutItemContainer>
      <CheckoutItemImg src={imageUrl} alt={`${name}`} />
      <CheckoutItemBrand>{brand}</CheckoutItemBrand>
      <Name>{name}</Name>
      <Quantity>
        Anzahl:
        <span className="minus-svg" style={{ marginInline: ".25rem" }}>
          <MinusIcon
            onClick={decreaseQty}
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
            onClick={increaseQty}
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
