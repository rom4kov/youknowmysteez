import { Fragment } from "react";

import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/selectors/category.selector";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { PreviewTitle } from "./categories-preview.styles.jsx";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

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
