import { DirectoryContainer } from "./directory.styles";
import DirectoryItem from "../directory-item/directory-item.component";
import { Category } from "../../store/redux-types/category.types";

import img0 from "../../assets/images/shirts.jpg";
import img1 from "../../assets/images/jackets.jpg";
import img2 from "../../assets/images/sneakers.jpg";
import img3 from "../../assets/images/womens.jpg";
import img4 from "../../assets/images/mens.jpg";

const categories = [
  {
    id: 1,
    title: "TEES",
    imageUrl: img0,
    route: "shop/hats",
  },
  {
    id: 2,
    title: "JACKETS",
    imageUrl: img1,
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "SNEAKERS",
    imageUrl: img2,
    route: "shop/sneakers",
  },
  {
    id: 4,
    title: "WOMENS",
    imageUrl: img3,
    route: "shop/womens",
  },
  {
    id: 5,
    title: "MENS",
    imageUrl: img4,
    route: "shop/mens",
  },
] as Category[];

const Directory = () => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
