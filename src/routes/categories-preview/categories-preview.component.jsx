import { Fragment, useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { PreviewTitle } from "./categories-preview.styles.jsx";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  // setProducts(SHOP_DATA);

  return (
    <Fragment>
      <PreviewTitle>THIS IS THE YOUKNOWMYSTEEZ SHOP</PreviewTitle>
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
