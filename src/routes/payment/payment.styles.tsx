import styled from "styled-components/macro";

import Button from "../../components/button/button.component";

export const PaymentContainer = styled.div`
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

  @media (max-width: 1700px) {
    width: 80%;
  }
`;

export const PaymentFormContainer = styled.div`
  grid-area: one;
  background-color: #eee;
  padding: 2rem;
  border-radius: 2rem;
`;

export const FormContainer = styled.form`
  margin-top: 2rem;
  height: 15rem;
  min-width: 100%;

  h2 {
    margin-top: 2rem;
  }
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

export const PaymentButton = styled(Button)`
  width: 100% !important;
  height: 1.75rem !important;
  padding-top: 0.1rem;
  border-radius: 1rem;
  background: #193B19;
  color: white;
  opacity: 0.7 !important;
`;

