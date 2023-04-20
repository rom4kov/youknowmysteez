import { useDispatch } from "react-redux";

import { removeItemFromCart } from "../../store/actions/cart.action";

import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/selectors/cart.selector";

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

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const removeItem = () => dispatch(removeItemFromCart(cartItems, cartItem));

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
