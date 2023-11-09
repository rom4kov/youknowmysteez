import { memo } from "react";

import { useDispatch } from "react-redux";

import { removeItemFromCart } from "../../store/reducers/cart.reducer";

import {
  CartItemContainer,
  CartItemImg,
  CartItemBrandPrice,
  CartItemBrand,
  CartItemPrice,
  Name,
  Quantity,
  RemoveItem,
} from "./cart-item.styles";
import { CartItemType } from "../../store/redux-types/cart.types";

type CartItemProps = {
  cartItem: CartItemType;
  isCartOpen: boolean;
};

const CartItem = memo(({ cartItem, isCartOpen }: CartItemProps) => {
  const { brand, price, imageUrl, name, quantity } = cartItem;

  const dispatch = useDispatch();

  const removeItem = () => dispatch(removeItemFromCart(cartItem));

  return (
    <CartItemContainer
      className={`${isCartOpen ? "open" : ""}`}
      data-testid="cart-item"
    >
      <CartItemImg src={imageUrl} alt={name} />
      <CartItemBrandPrice>
        <CartItemBrand>{brand}</CartItemBrand>
        <CartItemPrice>{price * quantity},00 €</CartItemPrice>
      </CartItemBrandPrice>
      <Name>{name}</Name>
      <Quantity>Anzahl: {quantity}</Quantity>
      <RemoveItem onClick={removeItem}>Artikel entfernen</RemoveItem>
    </CartItemContainer>
  );
});

export default CartItem;
