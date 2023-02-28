import React from "react";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="left-nav">
        <p>SHOP</p>
        <p>ABOUT</p>
        <p>VERSAND</p>
      </div>
      <h1 className="title">youknowmysteez</h1>
      <div className="right-nav">
        <p>KONTAKT</p>
        <p>WARENKORB</p>
        <p>ANMELDEN</p>
      </div>
    </div>
  );
};

export default Navigation;
