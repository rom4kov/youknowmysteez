import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { selectNewCartItems } from "../../store/selectors/cart.selector";

import { setCartItems } from "../../store/actions/cart.action";

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

  const { cartItems } = useSelector(selectNewCartItems);

  const dispatch = useDispatch();

  const removeCartItem = (cartItems, cartItem) => {
    return cartItems.filter((el) => el.id !== cartItem.id);
  };

  const removeItemFromCart = (cartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItem);
    return dispatch(setCartItems({ cartItems: newCartItems }));
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
