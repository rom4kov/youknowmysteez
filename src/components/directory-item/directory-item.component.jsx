import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .4)), url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
