import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const LogoContainer = styled(Link)`
  color: #fff;
  margin-right: 2rem;
  font-size: 1rem;
  font-family: "Poppins";
  height: fit-content;
  text-align: left;
  transition: all 200ms ease-out;
  cursor: pointer;
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
`;
// @font-face {
//   font-family: "Urban Starblues Demo";
//   src: local("Urban Starblues Demo"),
//     url("../../assets/fonts/Urban Starblues Demo.otf") format("opentype");
//   font-weight: bold;
// }

// @font-face {
//   font-family: "Poppins";
//   src: local("Poppins-Bold"),
//     url("../../assets/fonts/Poppins-Bold.ttf") format("truetype");
//   font-weight: bold;
// }

// @font-face {
//   font-family: "Poppins";
//   src: local("Poppins-Medium"),
//     url("../../assets/fonts/Poppins-Medium.ttf") format("truetype");
//   font-weight: bold;
// }

// .navigation {

//   .nav-wrapper {
//   }

//   .left-nav {

//     .nav-link {

//     }

//     .nav-link:last-child {
//       margin-right: 0;
//     }
//   }

//   .left-nav:hover > .nav-link {
//     opacity: 0.3;
//   }

//   .left-nav:hover > .nav-link:hover {
//     opacity: 1;
//   }

//   .title-link {
//     .title {
//       color: #fff;
//       position: relative;
//       width: 100%;
//       display: flex;
//       justify-content: center;
//       font-family: "Urban Starblues Demo";
//       transition: all 300ms ease-out;
//       cursor: pointer;
//     }
//   }

//   .right-nav {
//     display: flex;
//     justify-content: right;
//     margin-right: 4rem;
//     height: 1.5rem;
//     transition: all 200ms ease-in;

//     .nav-link {
//       color: #fff;
//       margin-left: 2rem;
//       font-size: 1rem;
//       font-family: "Poppins";
//       height: fit-content;
//       text-align: left;
//       transition: all 200ms ease-in;
//       cursor: pointer;
//     }

//     .nav-link:first-child {
//       margin-left: 0;
//     }

//     @keyframes growNavline {
//       from {
//         scale: 1 0;
//       }

//       to {
//         scale: 1 0.8;
//       }
//     }
//   }

//   .right-nav:hover > .nav-link {
//     opacity: 0.3;
//   }

//   .right-nav:hover > .nav-link:hover {
//     opacity: 1;
//   }
// }
