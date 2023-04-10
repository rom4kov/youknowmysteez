import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  // setProducts(SHOP_DATA);

  return (
    <div className="shop">
      <h1>THIS IS THE YOUKNOWMYSTEEZ SHOP</h1>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return <CategoryPreview title={title} products={products} />;
      })}
    </div>
  );
};

export default Shop;
