import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import "./categories-preview.styles.scss";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  // setProducts(SHOP_DATA);

  return (
    <Fragment>
      <h1 className="categories-preview-title">
        THIS IS THE YOUKNOWMYSTEEZ SHOP
      </h1>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview title={title} products={products} key={title} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
