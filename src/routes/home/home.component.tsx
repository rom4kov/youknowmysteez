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

type HomeProps = {
  intObsRef: (node?: Element | null | undefined) => void;
};

const Home = ({ intObsRef }: HomeProps) => {
  return (
    <HomeContainer>
      <NavIntersectionRoot />
      <Outlet />
      <Banner props={"props"} ref={intObsRef} />
      <SaleHeadinng>HIER ZUM SPRINGSALE 2023</SaleHeadinng>
      <SaleText>BIS ZU 70% AUF JACKEN, JEANS UND SCHUHE</SaleText>
      <Directory />
      <Footer>THIS IS THE FOOTER SECTION</Footer>
    </HomeContainer>
  );
};

export default Home;
