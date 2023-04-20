import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

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

const CartItem = ({ cartItem, isCartOpen }) => {
  const { brand, price, imageUrl, name, quantity } = cartItem;

  const removeCartItem = (cartItems, cartItem) => {
    return cartItems.filter((el) => el.id !== cartItem.id);
  };

  const removeItemFromCart = (cartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItem);
    updateCartItemsReducer(newCartItems);
  };

  const removeItem = () => removeItemFromCart(cartItem);

  return (
    <CartItemContainer className={`${isCartOpen ? "open" : ""}`}>
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
};

export default CartItem;
