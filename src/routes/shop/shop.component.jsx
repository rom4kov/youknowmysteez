import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  // setProducts(SHOP_DATA);

  return (
    <Fragment>
      <div className="shop">
        <h1>THIS IS THE YOUKNOWMYSTEEZ SHOP</h1>
        {Object.keys(categoriesMap).map((title) => (
          <Fragment key={title}>
            <h2>{title}</h2>
            <div className="products-container">
              {categoriesMap[title].map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
            </div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

export default Shop;
