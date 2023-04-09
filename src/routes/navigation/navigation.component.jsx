import { Fragment, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.scss";

const Navigation = ({ navColor }) => {
  const { currentUser } = useContext(UserContext);

  const location = useLocation();
  const loc = location.pathname;

  const color = navColor === false || loc !== "/" ? "black" : "white";
  const background = navColor === false || loc !== "/" ? "#fff" : "transparent";
  const height = navColor === false || loc !== "/" ? "5rem" : "10rem";
  const marginTopNav = navColor === false || loc !== "/" ? "1.7rem" : "3.5rem";
  const navShadow =
    navColor === false || loc !== "/"
      ? "0rem -2rem 3.7rem 1.3rem rgb(0 0 0 / 33%)"
      : "none";
  const marginBlockTitle =
    navColor === false || loc !== "/" ? "0.45rem" : "1.5rem";
  const titleFontSize = navColor === false || loc !== "/" ? "3rem" : "4rem";

  return (
    <Fragment>
      <div
        className="navigation"
        style={{
          background: `${background}`,
          height: `${height}`,
          boxShadow: `${navShadow}`,
        }}
      >
        <div className="nav-wrapper">
          <div className="left-nav" style={{ marginTop: `${marginTopNav}` }}>
            {currentUser ? (
              <span
                className="nav-link"
                style={{ color: `${color}` }}
                onClick={signOutUser}
              >
                ABMELDEN
              </span>
            ) : (
              <Link
                className="nav-link"
                to="/auth"
                style={{ color: `${color}` }}
              >
                ANMELDEN
              </Link>
            )}
            <Link
              className="nav-links nav-link"
              to="/about"
              style={{ color: `${color}` }}
            >
              ABOUT
            </Link>
            <Link
              className="nav-link"
              to="/kontakt"
              style={{ color: `${color}` }}
            >
              KONTAKT
            </Link>
          </div>
        </div>
        <Link className="title-link" to="/">
          <h1
            className="title"
            style={{
              color: `${color}`,
              marginBlock: `${marginBlockTitle}`,
              fontSize: `${titleFontSize}`,
            }}
          >
            youknowmysteez
          </h1>
        </Link>
        <div className="nav-wrapper">
          <div className="right-nav" style={{ marginTop: `${marginTopNav}` }}>
            <Link
              className="nav-links nav-link"
              to="/shop"
              style={{ color: `${color}` }}
            >
              SHOP
            </Link>
            <Link
              className="nav-link"
              to="/versand"
              style={{ color: `${color}` }}
            >
              VERSAND
            </Link>
            <Link
              className="nav-link cart-link"
              to="/warenkorb"
              style={{
                color: `${color}`,
                marginRight: "-.5rem",
                display: "flex",
              }}
            >
              WARENKORB
            </Link>
            <CartIcon styleProp={color} />
          </div>
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
