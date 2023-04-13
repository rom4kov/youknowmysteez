import styled from "styled-components";

import { ReactComponent as ShoppingIcon } from "../../assets/svgs/shopping-bag2.svg";

export const CartIconContainer = styled.div`
  position: relative;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 200ms ease-in;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 1.5rem;
  height: 1.5rem;
  transform: translateY(-0.15rem);
`;

export const ItemCount = styled.span`
  position: absolute;
  top: 0.25rem;
  margin-left: -0.05rem;
  font-size: 0.8rem;
  font-weight: 700 !important;
`;

// .cart-icon-container {
// position: relative;
// margin-left: 1rem;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// transition: all 200ms ease-in;
// cursor: pointer;

//   .shopping-icon {
// width: 1.5rem;
// height: 1.5rem;
// transform: translateY(-0.15rem);
//   }

//   .item-count {
// position: absolute;
// top: 0.25rem;
// margin-left: -0.05rem;
// font-size: 0.8rem;
// font-weight: 700 !important;
//   }
// }
