import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import "./navigation.styles.scss";

const Navigation = () => {
  const { ref, inView, entry } = useInView();

  return (
    <Fragment>
      <div className="nav-wrapper">
        <div className="navigation" ref={ref}>
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
            <h1 className="title">youknowmysteez</h1>
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
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
