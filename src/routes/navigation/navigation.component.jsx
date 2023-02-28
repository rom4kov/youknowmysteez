import React from "react";
import { Outlet } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <div>
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
      <Outlet />
    </div>
  );
};

export default Navigation;
