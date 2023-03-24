import { Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = ({ navColor }) => {
  const location = useLocation();
  const loc = location.pathname;
  console.log("loc", loc);

  const color = navColor === false || loc !== "/" ? "black" : "white";
  const background = navColor === false || loc !== "/" ? "#ddd" : "transparent";
  const height = navColor === false || loc !== "/" ? "6rem" : "10rem";
  const marginTopLinks =
    navColor === false || loc !== "/" ? "2.25rem" : "3.5rem";
  const marginBlockTitle =
    navColor === false || loc !== "/" ? "0.5rem" : "1.5rem";

  return (
    <Fragment>
      <div
        className="navigation"
        style={{
          background: `${background}`,
          height: `${height}`,
        }}
      >
        <div className="left-nav">
          <Link
            className="nav-link"
            to="/shop"
            style={{ color: `${color}`, marginTop: `${marginTopLinks}` }}
          >
            SHOP
          </Link>
          <Link
            className="nav-link"
            to="/about"
            style={{ color: `${color}`, marginTop: `${marginTopLinks}` }}
          >
            ABOUT
          </Link>
          <Link
            className="nav-link"
            to="/versand"
            style={{ color: `${color}`, marginTop: `${marginTopLinks}` }}
          >
            VERSAND
          </Link>
        </div>
        <Link className="title-link" to="/">
          <h1
            className="title"
            style={{ color: `${color}`, marginBlock: `${marginBlockTitle}` }}
          >
            youknowmysteez
          </h1>
        </Link>
        <div className="right-nav">
          <Link
            className="nav-link"
            to="/kontakt"
            style={{ color: `${color}`, marginTop: `${marginTopLinks}` }}
          >
            KONTAKT
          </Link>
          <Link
            className="nav-link"
            to="/warenkorb"
            style={{ color: `${color}`, marginTop: `${marginTopLinks}` }}
          >
            WARENKORB
          </Link>
          <Link
            className="nav-link"
            to="/sign-in"
            style={{ color: `${color}`, marginTop: `${marginTopLinks}` }}
          >
            ANMELDEN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
