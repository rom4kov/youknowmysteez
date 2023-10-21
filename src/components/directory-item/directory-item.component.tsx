import { useNavigate } from "react-router-dom";

import {
  DrectoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemTitle,
  DirectoryItemText,
} from "./directory-item.styles";

import { Category } from "../../store/redux-types/category.types";

type DirectoryItemProps = {
  category: Category;
};

const DirectoryItem = ({ category }: DirectoryItemProps) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DrectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage backgroundImage={imageUrl} />
      <DirectoryItemBody>
        <DirectoryItemTitle>{title}</DirectoryItemTitle>
        <DirectoryItemText>Shop Now</DirectoryItemText>
      </DirectoryItemBody>
    </DrectoryItemContainer>
  );
};

export default DirectoryItem;
