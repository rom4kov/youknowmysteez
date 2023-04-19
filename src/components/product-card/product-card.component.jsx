import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import { selectCartItems } from "../../store/selectors/cart.selector";

import { setCartItems } from "../../store/actions/cart.action";

import {
  ProductCardContainer,
  ProductCardImg,
  Footer,
  Name,
  Price,
  ProductCardButton,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  product.quantity = 1;

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const addCartItem = (cartItems, productToAdd) => {
    // find if cartItems contains productToAdd
    const existingItem = cartItems.find((item) => item.id === productToAdd.id);
    // If found, increment quantity
    if (existingItem) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    dispatch(setCartItems(newCartItems));
  };

  // const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => {
    addItemToCart(product);
  };

  return (
    <ProductCardContainer>
      <ProductCardImg src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>€ {price}</Price>
      </Footer>
      <ProductCardButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        In den Warenkorb
      </ProductCardButton>
    </ProductCardContainer>
  );
};

export default ProductCard;
