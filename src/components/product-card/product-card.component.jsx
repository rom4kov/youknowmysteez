import { useDispatch } from "react-redux";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { addItemToCart } from "../../store/reducers/cart.reducer";

import {
  ProductCardContainer,
  ProductCardImg,
  Footer,
  Name,
  Price,
  ProductCardButton,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const productToAdd = { ...product, quantity: 1 };
  const { name, imageUrl, price } = productToAdd;

  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(productToAdd));

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
