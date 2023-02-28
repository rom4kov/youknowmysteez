import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./navigation.styles.scss";

const Navigation = () => {
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
        <h1 className="title">youknowmysteez</h1>
        <div className="right-nav">
          <Link className="nav-link" to="/kontakt">
            KONTAKT
          </Link>
          <Link className="nav-link" to="/warenkorb">
            WARENKORB
          </Link>
          <Link className="nav-link" to="/login">
            ANMELDEN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
