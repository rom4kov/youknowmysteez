import { useRef, useEffect } from "react";
import Banner from "../../components/banner/banner.component";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import "./home.styles.scss";
import img0 from "../../assets/images/shirts.jpg";
import img1 from "../../assets/images/jackets.jpg";
import img2 from "../../assets/images/sneakers.jpg";
import img3 from "../../assets/images/womens.jpg";
import img4 from "../../assets/images/mens.jpg";

const Home = ({ changeNavColor }) => {
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

  const intersectObsRef = useRef();

  useEffect(() => {
    console.log();
  }, []);

  return (
    <div>
      <div className="nav-intersection-root"></div>
      <Outlet />
      <Banner changeNavColor={changeNavColor} ref={intersectObsRef} />
      <h3>HIER ZUM SPRINGSALE 2023</h3>
      <p>BIS ZU 70% AUF JACKEN, JEANS UND SCHUHE</p>
      <Directory categories={categories} />
      <footer>THIS IS THE FOOTER SECTION</footer>
    </div>
  );
};

export default Home;
