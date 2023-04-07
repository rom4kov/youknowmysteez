import SHOP_DATA from "../../shop-data.json";

import "./shop.styles.scss";

const Shop = () => {
  return (
    <div className="shop">
      <h1>THIS IS THE YOUKNOWMYSTEEZ SHOP</h1>
      <div className="shop-items">
        {SHOP_DATA.map(({ id, name, imageUrl, price }) => (
          <div className="shop-item" key={id}>
            <h2>{name}</h2>
            <img src={imageUrl}></img>
            <p>€ {price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
