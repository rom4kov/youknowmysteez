import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
  const [navColor, setNavColor] = useState("white");
  const changeNavColor = (navColor) => {
    setNavColor(navColor);
  };

  console.log("navColor in navcomp", navColor);

  return (
    <Fragment>
      <div className="navigation">
        <div className="left-nav">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/about">
            ABOUT
          </Link>
          <Link className="nav-link" to="/versand">
            VERSAND
          </Link>
        </div>
        <Link className="title-link" to="/">
          <h1 className="title" style={{ color: `${navColor}` }}>
            youknowmysteez
          </h1>
        </Link>
        <div className="right-nav">
          <Link className="nav-link" to="/kontakt">
            KONTAKT
          </Link>
          <Link className="nav-link" to="/warenkorb">
            WARENKORB
          </Link>
          <Link className="nav-link" to="/sign-in">
            ANMELDEN
          </Link>
        </div>
      </div>
      <Outlet changeNavColor={changeNavColor} />
    </Fragment>
  );
};

export default Navigation;
