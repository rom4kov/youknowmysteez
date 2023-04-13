import { DrectoryContainer } from "./directory.styles";
import DrectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <DrectoryContainer>
      {categories.map((category) => (
        <DrectoryItem key={category.id} category={category} />
      ))}
    </DrectoryContainer>
  );
};

export default Directory;
