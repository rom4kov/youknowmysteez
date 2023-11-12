import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/selectors/user.selector";
import { selectCartTotal } from "../../store/selectors/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions } from "@stripe/stripe-js";
import { stripePromise } from "../../utils/stripe/stripe.utils";
import PaymentItems from "../payment-items/payment-items.component";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import {
  PaymentContainer,
  PaymentFormContainer,
  Pay,
  PayHeading,
  PaymentButton,
} from "./payment.styles";

const Payment = () => {
  const [isProcessingPayment, setIsProcessingPayment] =
    useState<boolean>(false);
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [clientSecret, setClientSecret] = useState("");

  let ignore = false;

  useEffect(() => {
    if (!ignore) {
      fetch("../.netlify/functions/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: amount * 100 }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.paymentIntent.client_secret))
        .catch((error) => {
          console.error("Error fetching client secret:", error);
        });
    }

    ignore = true;
  }, []);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
    currentUser: currentUser,
  } as StripeElementsOptions;

  return (
    <PaymentContainer>
      <PaymentFormContainer>
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <PaymentForm paymentLoad={setIsProcessingPayment} />
          </Elements>
        )}
      </PaymentFormContainer>
      <Pay>
        <PayHeading>Gesamtsumme</PayHeading>
        <PaymentItems />
        <PaymentButton
          isLoading={isProcessingPayment}
          form="payment"
          buttonType={BUTTON_TYPE_CLASSES.base}
        >
          BEZAHLEN
        </PaymentButton>
      </Pay>
    </PaymentContainer>
  );
};

export default Payment;
