import {
  DrectoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemTitle,
  DirectoryItemText,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DrectoryItemContainer>
      <BackgroundImage
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${imageUrl})`,
        }}
      />
      <DirectoryItemBody>
        <DirectoryItemTitle>{title}</DirectoryItemTitle>
        <DirectoryItemText>Shop Now</DirectoryItemText>
      </DirectoryItemBody>
    </DrectoryItemContainer>
  );
};

export default DirectoryItem;
