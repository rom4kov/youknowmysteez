import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "store/selectors/user.selector";
import { selectCartTotal } from "../../store/selectors/cart.selector";
import PaymentForm from "../../components/payment-form/payment-form.component";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "utils/stripe/stripe.utils";
import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import {
  PaymentContainer,
  PaymentFormContainer,
  Pay,
  PayHeading,
  PaymentItems,
  SubTotal,
  Shipment,
  Total,
  PaymentButton,
} from "./payment.styles";

const Payment = () => {
  const cartTotal = useSelector(selectCartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
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
  }, [amount]);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
    currentUser: currentUser,
  };

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
        <PaymentItems>
          <SubTotal>
            <span>Zwischensumme</span>
            <span>{cartTotal},00 €</span>
          </SubTotal>
          <Shipment>
            <span>Lieferung</span>
            <span>0,00 €</span>
          </Shipment>
          <Total>
            <span>
              Gesamtsumme <span>(inkl. Mwst.)</span>
            </span>
            <span>{cartTotal},00 €</span>
          </Total>
        </PaymentItems>
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
