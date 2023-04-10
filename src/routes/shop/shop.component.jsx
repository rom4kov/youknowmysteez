import { useContext, Fragment } from "react";

import { useNavigate } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  // setProducts(SHOP_DATA);

  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="shop">
        <h1>THIS IS THE YOUKNOWMYSTEEZ SHOP</h1>
        {Object.keys(categoriesMap).map((title) => {
          const goToCategoryPageHandler = () => {
            navigate(`/${title}`);
          };
          return (
            <Fragment key={title}>
              <h2 className="category-title" onClick={goToCategoryPageHandler}>
                {title}
              </h2>
              <div className="products-container">
                {categoriesMap[title].map((product) => {
                  if (categoriesMap[title].indexOf(product) < 4) {
                    return <ProductCard product={product} key={product.id} />;
                  }
                })}
              </div>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Shop;
