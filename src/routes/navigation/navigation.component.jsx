import { Fragment, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.styles.scss";

const Navigation = ({ navColor }) => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const dropdownHandler = () => {
    setIsCartOpen(!isCartOpen);
    console.log("Cart is open?", isCartOpen);
  };

  console.log("currentUser:", currentUser);

  const location = useLocation();
  const loc = location.pathname;

  const color = navColor === false || loc !== "/" ? "black" : "white";
  const background = navColor === false || loc !== "/" ? "#aaa" : "transparent";
  const height = navColor === false || loc !== "/" ? "5rem" : "10rem";
  const marginTopNav = navColor === false || loc !== "/" ? "1.7rem" : "3.5rem";
  const marginBlockTitle =
    navColor === false || loc !== "/" ? "0.05rem" : "1.5rem";
  console.log("color", color);

  return (
    <Fragment>
      <div
        className="navigation"
        style={{
          background: `${background}`,
          height: `${height}`,
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
            style={{ color: `${color}`, marginBlock: `${marginBlockTitle}` }}
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
      </div>
      <CartDropdown />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
