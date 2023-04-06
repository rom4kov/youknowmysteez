import { Fragment, useContext } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

const Navigation = ({ navColor }) => {
  const { currentUser } = useContext(UserContext);

  console.log("currentUser:", currentUser);

  const location = useLocation();
  const loc = location.pathname;

  const color = navColor === false || loc !== "/" ? "black" : "white";
  const background = navColor === false || loc !== "/" ? "#aaa" : "transparent";
  const height = navColor === false || loc !== "/" ? "5rem" : "10rem";
  const marginTopNav = navColor === false || loc !== "/" ? "1.7rem" : "3.5rem";
  const marginBlockTitle =
    navColor === false || loc !== "/" ? "0.05rem" : "1.5rem";

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
            <Link
              className="nav-links nav-link"
              to="/shop"
              style={{ color: `${color}` }}
            >
              SHOP
            </Link>
            <Link
              className="nav-links nav-link"
              to="/about"
              style={{ color: `${color}` }}
            >
              ABOUT
            </Link>
            <Link
              className="nav-link"
              to="/versand"
              style={{ color: `${color}` }}
            >
              VERSAND
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
              className="nav-link"
              to="/kontakt"
              style={{ color: `${color}` }}
            >
              KONTAKT
            </Link>
            <Link
              className="nav-link"
              to="/warenkorb"
              style={{ color: `${color}` }}
            >
              WARENKORB
            </Link>
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
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
