import { useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  // setProducts(SHOP_DATA);

  return (
    <div className="shop">
      <h1>THIS IS THE YOUKNOWMYSTEEZ SHOP</h1>
      <div className="shop-items">
        {products.map(({ id, name, imageUrl, price }) => (
          <div className="shop-item" key={id}>
            <h2>{name}</h2>
            <img src={imageUrl} alt={name}></img>
            <p>€ {price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
