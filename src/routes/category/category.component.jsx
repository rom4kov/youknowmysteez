import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CategoriesContext } from "../../contexts/categories.context";

import ProductCard from "../../components/product-card/product-card.component";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);
  console.log(category.toUpperCase());

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="shop-category-container">
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="category-products">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default Category;
