import { useSelector } from "react-redux";

import { selectCartTotal } from "store/selectors/cart.selector";

import { selectCurrentUser } from "store/selectors/user.selector";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = ({ paymentLoad }) => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    paymentLoad(true);

    const response = await fetch(".netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    console.log(client_secret);

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : "Gast",
        },
      },
    });

    paymentLoad(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer id="payment" onSubmit={paymentHandler}>
        <h2>Mit Kredit- / Debitkarte zahlen</h2>
        <CardElement />
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
