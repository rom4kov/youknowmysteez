import Banner from "../../components/banner/banner.component";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import img0 from "../../assets/images/shirts.jpg";
import img1 from "../../assets/images/jackets.jpg";
import img2 from "../../assets/images/sneakers.jpg";
import img3 from "../../assets/images/womens.jpg";
import img4 from "../../assets/images/mens.jpg";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "TEES",
      imageUrl: img0,
    },
    {
      id: 2,
      title: "JACKETS",
      imageUrl: img1,
    },
    {
      id: 3,
      title: "SNEAKERS",
      imageUrl: img2,
    },
    {
      id: 4,
      title: "WOMENS",
      imageUrl: img3,
    },
    {
      id: 5,
      title: "MENS",
      imageUrl: img4,
    },
  ];

  return (
    <div>
      <Outlet />
      <Banner />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
