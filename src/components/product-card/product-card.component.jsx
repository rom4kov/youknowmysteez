import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">€ {price}</span>
      </div>
      <Button buttonType="inverted">In den Warenkorb</Button>
    </div>
  );
};

export default ProductCard;
