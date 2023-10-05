import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    
    if(!stripe || !elements) {
      return;
    }
  }

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Mit Kredit- / Debitkarte zahlen</h2>
        <CardElement onClick={paymentHandler}/>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
