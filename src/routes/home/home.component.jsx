import Banner from "../../components/banner/banner.component";
import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";
import {
  HomeContainer,
  NavIntersectionRoot,
  SaleHeadinng,
  SaleText,
  Footer,
} from "./home.styles";
import img0 from "../../assets/images/shirts.jpg";
import img1 from "../../assets/images/jackets.jpg";
import img2 from "../../assets/images/sneakers.jpg";
import img3 from "../../assets/images/womens.jpg";
import img4 from "../../assets/images/mens.jpg";

const Home = ({ intObsRef }) => {
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
    <HomeContainer>
      <NavIntersectionRoot />
      <Outlet />
      <Banner ref={intObsRef} />
      <SaleHeadinng>HIER ZUM SPRINGSALE 2023</SaleHeadinng>
      <SaleText>BIS ZU 70% AUF JACKEN, JEANS UND SCHUHE</SaleText>
      <Directory categories={categories} />
      <Footer>THIS IS THE FOOTER SECTION</Footer>
    </HomeContainer>
  );
};

export default Home;
