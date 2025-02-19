import styled from "styled-components/macro";

export const CartItemContainer = styled.div`
  max-width: 100%;
  margin-bottom: 0.75rem;
  display: grid;
  grid-template-columns: 30% 62.5%;
  grid-template-rows: 1.2rem;
  column-gap: 0.75rem;
  grid-template-areas:
    "one two"
    "one three"
    "one four"
    "one five";
  opacity: 0;
  transition: opacity 10ms ease;

  &.open {
    opacity: 1;
    transition: opacity 100ms ease 250ms;
  }
`;

export const CartItemImg = styled.img`
  grid-area: one;
  width: 100%;
  aspect-ratio: 1 / 1.2;
  object-fit: cover;
  border-radius: 0.75rem;
`;

export const CartItemBrandPrice = styled.div`
  grid-area: two;
  display: flex;
  justify-content: space-between;
`;

export const CartItemBrand = styled.span`
  color: black;
  font-size: 0.9rem;
`;

export const CartItemPrice = styled.span`
  color: black;
  font-size: 0.9rem;
  font-weight: 700;
`;

export const Name = styled.h2`
  grid-area: three;
  text-align: start;
  color: black;
  font-size: 1rem;
  margin-block: 0;
`;

export const Quantity = styled.span`
  grid-area: four;
  text-align: start;
  color: black;
  font-size: 0.8rem;
  margin-top: -0.8rem;
`;

export const RemoveItem = styled.span`
  grid-area: five;
  color: black;
  font-size: 0.8rem;
  margin-top: -0.6rem;
  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
  }
`;
