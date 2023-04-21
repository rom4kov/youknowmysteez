import { useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/selectors/category.selector";

import ProductCard from "../../components/product-card/product-card.component";

import Spinner from "components/spinner/spinner.component";

import { CategoryTitle, CategoryProducts } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryProducts>
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </CategoryProducts>
      )}
    </Fragment>
  );
};

export default Category;
