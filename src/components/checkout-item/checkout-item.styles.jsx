import styled from "styled-components/macro";

export const CheckoutItemContainer = styled.div`
  background-color: #fff;
  max-width: 100%;
  margin-bottom: 1.5rem;
  border-radius: 1.25rem;
  display: grid;
  grid-template-columns: 20% 77.5%;
  grid-template-rows: 1.2rem;
  column-gap: 0.75rem;
  grid-template-areas:
    "one two"
    "one three"
    "one four"
    "one five";
`;

export const CheckoutItemImg = styled.img`
  grid-area: one;
  width: 100%;
  aspect-ratio: 1 / 1.2;
  object-fit: cover;
  border-bottom-left-radius: 1.25rem;
  border-top-left-radius: 1.25rem;
`;

export const CheckoutItemBrand = styled.span`
  grid-area: two;
  color: black;
  font-size: 0.9rem;
  margin-top: 0.6rem;
`;

export const Name = styled.h3`
  grid-area: three;
  text-align: start;
  color: black;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 1rem;
`;

export const Quantity = styled.div`
  grid-area: four;
  color: black;
  font-size: 0.8rem;
  margin-top: -0.8rem;
  user-select: none;

  .minus-svg:hover {
    color: rgba(25, 59, 25, 0.7);
  }

  .qty-num-container {
    display: inline-block;
    width: 1rem;

    .qty-num {
      display: flex;
      justify-content: center;
      font-weight: 700;
    }
  }

  .plus-svg:hover {
    color: rgba(25, 59, 25, 0.7);
  }
`;

export const RemoveAndPrice = styled.div`
  grid-area: five;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 0.75rem;
`;

export const RemoveItem = styled.span`
  color: black;
  font-size: 0.8rem;
  //   margin-top: -0.6rem;
  cursor: pointer;

  &:hover {
    text-decoration-line: underline;
  }
`;

export const Price = styled.span`
  color: black;
  font-size: 0.9rem;
  font-weight: 700;
  margin-right: 0.5rem;
`;

// .checkout-item:last-child {
//   margin-bottom: 0;
// }
