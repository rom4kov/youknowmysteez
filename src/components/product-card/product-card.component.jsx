import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/selectors/cart.selector";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { addItemToCart } from "../../store/actions/cart.action";

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

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

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
