import { CardElement } from "@stripe/react-stripe-js";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormContainer, PaymentButton } from "./payment-form.styles";

const PaymentForm = () => {
  return (
    <PaymentFormContainer>
      <CardElement />
      <PaymentButton buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
