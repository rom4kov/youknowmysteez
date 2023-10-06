import { useState, useEffect } from "react";

// import { useSelector } from "react-redux";

// import { selectCartTotal } from "store/selectors/cart.selector";

// import { selectCurrentUser } from "store/selectors/user.selector";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = ({ paymentLoad }) => {
  const stripe = useStripe();
  const elements = useElements();
  // const amount = useSelector(selectCartTotal);
  // const currentUser = useSelector(selectCurrentUser);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    paymentLoad(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: "http://localhost:3000/payment",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    paymentLoad(false);
  };

  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <PaymentFormContainer>
      <FormContainer id="payment" onSubmit={paymentHandler}>
        <h2>Mit Kredit- / Debitkarte zahlen</h2>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        {message && <div id="payment-message">{message}</div>}
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
