import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { selectNewCartItems } from "../../store/selectors/cart.selector";

import { setCartItems } from "../../store/actions/cart.action";

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

  const { cartItems } = useSelector(selectNewCartItems);

  const dispatch = useDispatch();

  const removeCartItem = (cartItems, cartItem) => {
    return cartItems.filter((el) => el.id !== cartItem.id);
  };

  const decreaseQuantity = (cartItems, checkoutItem) => {
    return cartItems.map((cartItem) =>
      cartItem.id === checkoutItem.id && checkoutItem.quantity > 1
        ? { ...cartItem, quantity: checkoutItem.quantity - 1 }
        : cartItem
    );
  };

  const increaseQuantity = (cartItems, checkoutItem) => {
    return cartItems.map((cartItem) =>
      cartItem.id === checkoutItem.id
        ? { ...cartItem, quantity: checkoutItem.quantity + 1 }
        : cartItem
    );
  };

  const removeItemFromCart = (cartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItem);
    dispatch(setCartItems({ cartItems: newCartItems }));
  };

  const decreaseQtyOfCartItem = (checkoutItem) => {
    const newCartItems = decreaseQuantity(cartItems, checkoutItem);
    dispatch(setCartItems({ cartItems: newCartItems }));
  };

  const increaseQtyOfCartItem = (checkoutItem) => {
    const newCartItems = increaseQuantity(cartItems, checkoutItem);
    dispatch(setCartItems({ cartItems: newCartItems }));
  };

  const removeItem = () => removeItemFromCart(checkoutItem);
  const decreaseQty = () => decreaseQtyOfCartItem(checkoutItem);
  const increaseQty = () => increaseQtyOfCartItem(checkoutItem);

  return (
    <CheckoutItemContainer>
      <CheckoutItemImg src={imageUrl} alt={`${name}`}></CheckoutItemImg>
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
