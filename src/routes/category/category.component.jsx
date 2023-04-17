import { useState, useEffect, Fragment } from "react";

import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/selectors/category.selector";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryTitle, CategoryProducts } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  console.log("rendering / re-rendering category component");
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("effect fired calling setProducts");
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryProducts>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </CategoryProducts>
    </Fragment>
  );
};

export default Category;
