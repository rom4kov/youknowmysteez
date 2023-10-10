import { Fragment } from "react";

import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/selectors/category.selector";

import Spinner from "../../components/spinner/spinner.component";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { PreviewTitle } from "./categories-preview.styles.jsx";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <Fragment>
      <PreviewTitle>THIS IS THE YOUKNOWMYSTEEZ SHOP</PreviewTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return (
            <CategoryPreview title={title} products={products} key={title} />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
