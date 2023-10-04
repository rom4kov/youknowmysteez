import styled from "styled-components/macro";

import Button from "../../components/button/button.component";

export const PaymentFormContainer= styled.div`
  margin-top: 2rem;
  width: 100%;
  height: 2rem;
`;

export const PaymentButton = styled(Button)`
  width: 100% !important;
  height: 2rem;
  border-radius: 0.75rem;
  background: #193B19;
  color: white;
  opacity: 0.8;
`;
