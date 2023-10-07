// import { useState, useEffect, Fragment } from "react";

// import { useSelector } from "react-redux";

// import { selectCurrentUser } from "store/selectors/user.selector";

// import { useSelector } from "react-redux";
// import { selectCartTotal } from "../../store/selectors/cart.selector";
// import { Elements } from "@stripe/react-stripe-js";
// import { stripePromise } from "utils/stripe/stripe.utils";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

const PaymentForm = ({ paymentLoad }) => {
  const stripe = useStripe();
  const elements = useElements();
  // const currentUser = useSelector(selectCurrentUser);
  // const [message, setMessage] = useState(null);

  // const amountValue = useSelector(selectCartTotal);
  // console.log(selectAmount);

  // selectAmount(amount);

  // const [clientSecret, setClientSecret] = useState("");
  // const [amount, setAmount] = useState(100);

  // const selectAmount = (amountValue) => {
  // setAmount(amountValue);
  // };

  // console.log(amount);

  // useEffect(() => {
  //   console.log("amount in useEffect:", amount);
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("../.netlify/functions/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ amount: amount * 100, test: "test" }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setClientSecret(data.paymentIntent.client_secret);
  //       console.log("data in App useEffect:", data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching client secret:", error);
  //     });
  // }, [amount]);

  // console.log(clientSecret);

  // const appearance = {
  //   theme: "stripe",
  // };

  // const options = {
  //   clientSecret,
  //   appearance,
  // };

  // useEffect(() => {
  //   if (!stripe) {
  //     return;
  //   }

  //   const clientSecret = new URLSearchParams(window.location.search).get(
  //     "payment_intent_client_secret"
  //   );

  //   if (!clientSecret) {
  //     return;
  //   }

  //   stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
  //     switch (paymentIntent.status) {
  //       case "succeeded":
  //         setMessage("Payment succeeded!");
  //         break;
  //       case "processing":
  //         setMessage("Your payment is processing.");
  //         break;
  //       case "requires_payment_method":
  //         setMessage("Your payment was not successful, please try again.");
  //         break;
  //       default:
  //         setMessage("Something went wrong.");
  //         break;
  //     }
  //   });
  // }, [stripe]);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    // console.log(selectAmount);

    // getAmount(amount);

    paymentLoad(true);

    // console.log(amount);

    // const response = await fetch(".netlify/functions/create-payment-intent", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
      // body: JSON.stringify({ amount: amount * 100 }),
    // }).then((res) => res.json());

    // const {
    //   paymentIntent: { client_secret },
    // } = response;

    // console.log(client_secret);

    const paymentResult = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        // return_url: "http://localhost:8888/confirmation",
      },
      redirect: "if_required",
      // payment_method: {
      //   // card: elements.getElement(payment),
      //   billing_details: {
      //     name: currentUser ? currentUser.displayName : "Gast",
      //   },
      // },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }

    paymentLoad(false);
  };

  const paymentElementOptions = {
    layout: "accordion",
  };

  return (
      <PaymentFormContainer>
        <FormContainer id="payment" onSubmit={paymentHandler}>
          <h2>Mit Kredit- / Debitkarte zahlen</h2>
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
          />
          {/* {message && <div id="payment-message">{message}</div>} */}
        </FormContainer>
      </PaymentFormContainer>
  );
};

export default PaymentForm;
