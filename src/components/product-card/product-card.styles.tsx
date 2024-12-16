import styled from "styled-components";

import Button from "../button/button.component";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 22.5rem;
  align-items: center;
  position: relative;
  margin: 2rem;
  overflow: hidden;
  border-radius: 1rem;

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.7;
      display: flex;
    }
  }

  &:hover > img {
    scale: 1.05;
  }
`;

export const ProductCardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
  transition: all 200ms ease-in-out;
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 0.75rem;
  z-index: 10;
  width: 100%;
  height: fit-content;
  padding-inline: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: end;
  font-size: 18px;
  font-weight: 700;
`;

export const Name = styled.span`
  width: 60%;
  text-align: start;
`;

export const Price = styled.span`
  width: 25%;
  text-align: end;
`;

export const ProductCardButton = styled(Button)`
  width: 70%;
  opacity: 0;
  position: absolute;
  top: 9rem;
`;

export const DarkGradient = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: linear-gradient(#ffffff00, #00000080);
`;

// .product-card-container {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   height: 25rem;
//   align-items: center;
//   position: relative;
//   margin: 2rem;

//   img {
//     width: 100%;
//     height: 95%;
//     object-fit: cover;
//     margin-bottom: 5px;
//     border-radius: 1rem;
//     transition: all 200ms ease-in-out;
//   }

//   button {
// width: 80%;
// opacity: 0;
// position: absolute;
// top: 18rem;
// // display: none;
//   }

//   &:hover {
//     img {
//       opacity: 0.8;
//     }

//     button {
//       opacity: 0.7;
//       display: flex;
//     }
//   }

//   .footer {
//     width: 100%;
//     height: 5%;
//     display: flex;
//     justify-content: space-between;
//     font-size: 18px;

//     .name {
//       width: 60%;
//       margin-bottom: 15px;
//       text-align: start;
//     }

//     .price {
//       width: 25%;
//       text-align: end;
//     }
//   }
// }
