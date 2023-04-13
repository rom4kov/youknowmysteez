import "./directory.styles.scss";
import DrectoryItem from "../directory-item/directory-item.component";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DrectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
