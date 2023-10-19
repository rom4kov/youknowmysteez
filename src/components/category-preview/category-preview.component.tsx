import ProductCard from "../product-card/product-card.component";

import {
  CategoryPreviewContainer,
  CategoryTitleLink,
  Preview,
} from "./category-preview.styles";

import { CategoryItem } from "../../store/redux-types/category.types";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitleLink to={title} className="title">
          {title.toUpperCase()}
        </CategoryTitleLink>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
