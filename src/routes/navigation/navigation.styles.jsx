import styled from "styled-components";
import { Link } from "react-router-dom";
import "../../assets/fonts/fonts.css";

export const NavigationContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffff;
  transition: all 200ms ease-out;
`;

// vorher ".nav-link":
export const NavLinkLeft = styled(Link)`
  color: #fff;
  margin-right: 2rem;
  font-size: 1rem;
  font-family: "Poppins";
  height: fit-content;
  text-align: left;
  transition: all 200ms ease-out;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;

export const NavWrapper = styled.div`
  width: 25rem;
`;

export const LeftNav = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 4rem;
  margin-right: 6rem;
  height: 1.5rem;
  transition: all 200ms ease-in;

  &:hover > .nav-link {
    opacity: 0.3;
  }

  &:hover > .nav-link:hover {
    opacity: 1;
  }
`;

export const Title = styled.h1`
  color: white;
  // background: -webkit-linear-gradient(45deg, #193B19 0%, red 200%);
  // -webkit-background-clip: text;
  // -webkit-text-fill-color: transparent;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "Urban Starblues Demo";
  transition: all 300ms ease-out;
  cursor: pointer;
`;

export const RightNav = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 4rem;
  height: 1.5rem;
  transition: all 200ms ease-in;
`;

export const NavLinkRight = styled(Link)`
  color: #fff;
  margin-left: 2rem;
  font-size: 1rem;
  font-family: "Poppins";
  height: fit-content;
  text-align: left;
  transition: all 200ms ease-in;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }
`;
