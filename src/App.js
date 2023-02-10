import "./categories.styles.scss";
import Banner from "./components/banner/banner.component";
import img0 from "./assets/images/daoudi-aissa-yojlXQ7RN2w-unsplash.jpg";
import img1 from "./assets/images/jc-gellidon-81fEanp-xXc-unsplash.jpg";
import img2 from "./assets/images/richard-ciraulo-BlI3VVVfP3Y-unsplash.jpg";
import img3 from "./assets/images/judeus-samson-NqzPPiRP5ew-unsplash.jpg";
import img4 from "./assets/images/daniel-adesina-GrfS-LxyWeI-unsplash.jpg";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Tees",
      imageUrl: img0,
    },
    {
      id: 2,
      title: "Jacken",
      imageUrl: img1,
    },
    {
      id: 3,
      title: "Sneakers",
      imageUrl: img2,
    },
    {
      id: 4,
      title: "Damen",
      imageUrl: img3,
    },
    {
      id: 5,
      title: "Herren",
      imageUrl: img4,
    },
  ];

  return (
    <div>
      <Banner />
      <div className="categories-container">
        {categories.map(({ id, title, imageUrl }) => (
          <div key={id} className="category-container">
            <div
              className="background-image"
              style={{
                backgroundImage: `url(${imageUrl})`,
              }}
            />
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
