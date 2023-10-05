import styled from "styled-components/macro";

import Button from "../../components/button/button.component";

export const CartContainer = styled.div`
  width: 70%;
  margin-top: 10rem;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "one one two"
    "one one ."
    "three three ."
    "four four .";
  column-gap: 2rem;
  row-gap: 2rem;
`;

export const Cart = styled.div`
  grid-area: one;
  background-color: #eee;
  padding: 2rem;
  border-radius: 2rem;
`;

export const CartTitle = styled.h2`
  color: black;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

export const Pay = styled.div`
  grid-area: two;
  background-color: #eee;
  height: auto;
  padding: 1.25rem;
  border-radius: 2rem;
`;

export const PayHeading = styled.h2`
  color: black;
  margin-top: -0.25rem;
  font-size: 2rem;
`;

export const PaymentItems = styled.div`
  padding: 1rem;
  background-color: #fff;
  border-radius: 1.25rem;
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Shipment = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const ToPaymentButton = styled(Button)`
  width: 100% !important;
  height: 1.75rem;
  border-radius: 1rem;
  opacity: 0.7;
`;
