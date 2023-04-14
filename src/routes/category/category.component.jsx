import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

import { CategoryTitle, CategoryProducts } from "./category.styles";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  console.log(category.toUpperCase());

  useEffect(() => {
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
