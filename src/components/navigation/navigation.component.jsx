import React from "react";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>SHOP</li>
        <li>ABOUT</li>
        <li>VERSAND</li>
        <li>KONTAKT</li>
      </ul>
      <h1 className="title">youknowmysteez</h1>
      <div className="right-nav">
        <p>WARENKORB</p>
        <p>ANMELDEN</p>
      </div>
    </div>
  );
};

export default Navigation;
