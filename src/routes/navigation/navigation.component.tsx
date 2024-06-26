import { useCallback, Fragment } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signOutStart } from "../../store/actions/user.action";

import { selectCurrentUser } from "../../store/selectors/user.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  NavWrapper,
  LeftNav,
  NavLinkLeft,
  Title,
  RightNav,
  NavLinkRight,
} from "./navigation.styles";

type NavigationProps = {
  navColor: boolean;
};

const Navigation = ({ navColor }: NavigationProps) => {
  const currentUser = useSelector(selectCurrentUser);

  const location = useLocation();
  const loc = location.pathname;

  const color = navColor === false || loc !== "/" ? "white" : "white";
  const background =
    navColor === false || loc !== "/" ? "black" : "transparent";
  const height = navColor === false || loc !== "/" ? "5rem" : "10rem";
  const marginTopNav = navColor === false || loc !== "/" ? "1.7rem" : "3.5rem";
  const navShadow =
    navColor === false || loc !== "/"
      ? "0rem -2rem 3.7rem 1.3rem rgb(0 0 0 / 33%)"
      : "none";
  const marginBlockTitle =
    navColor === false || loc !== "/" ? "0.45rem" : "1.5rem";
  const titleFontSize = navColor === false || loc !== "/" ? "3rem" : "4rem";

  const dispatch = useDispatch();

  const handleSignOut = useCallback(() => dispatch(signOutStart()), [dispatch]);

  return (
    <Fragment>
      <NavigationContainer
        style={{
          background: `${background}`,
          height: `${height}`,
          boxShadow: `${navShadow}`,
        }}
      >
        <NavWrapper>
          <LeftNav style={{ marginTop: `${marginTopNav}` }}>
            {currentUser ? (
              <Fragment>
                <div style={{ paddingRight: "2rem" }}>
                  {currentUser.displayName}
                </div>
                <NavLinkLeft
                  as="span"
                  style={{ color: `${color}` }}
                  onClick={handleSignOut}
                >
                  ABMELDEN
                </NavLinkLeft>
              </Fragment>
            ) : (
              <NavLinkLeft to="/auth" style={{ color: `${color}` }}>
                ANMELDEN
              </NavLinkLeft>
            )}
            <NavLinkLeft to="/about" style={{ color: `${color}` }}>
              ABOUT
            </NavLinkLeft>
            <NavLinkLeft to="/kontakt" style={{ color: `${color}` }}>
              KONTAKT
            </NavLinkLeft>
          </LeftNav>
        </NavWrapper>
        <Link to="/">
          <Title
            style={{
              color: `${color}`,
              marginBlock: `${marginBlockTitle}`,
              fontSize: `${titleFontSize}`,
            }}
          >
            youknowmysteez
          </Title>
        </Link>
        <NavWrapper>
          <RightNav style={{ marginTop: `${marginTopNav}` }}>
            <NavLinkRight to="/shop" style={{ color: `${color}` }}>
              SHOP
            </NavLinkRight>
            <NavLinkRight to="/versand" style={{ color: `${color}` }}>
              VERSAND
            </NavLinkRight>
            <NavLinkRight
              to="/cart"
              style={{
                color: `${color}`,
                marginRight: "-.5rem",
                display: "flex",
              }}
            >
              WARENKORB
            </NavLinkRight>
            <CartIcon styleProp={color} />
          </RightNav>
        </NavWrapper>
        <CartDropdown />
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
