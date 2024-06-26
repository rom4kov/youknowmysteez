import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import { selectCurrentUser } from "../../store/selectors/user.selector";

import { useDispatch } from "react-redux";

import { clearCartItems } from "../../store/reducers/cart.reducer";

import { StripePaymentElementOptions } from "@stripe/stripe-js";

import { Dispatch, SetStateAction, FormEvent, FormEventHandler } from "react";

import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { PaymentFormContainer, FormContainer } from "./payment-form.styles";

type PaymentFormProps = {
  paymentLoad: Dispatch<SetStateAction<boolean>>;
};

const PaymentForm = ({ paymentLoad }: PaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const paymentHandler: FormEventHandler = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    paymentLoad(true);

    const paymentResult = await stripe.confirmPayment({
      elements,
      confirmParams: {
        payment_method_data: {
          billing_details: {
            name: currentUser ? currentUser.displayName : "Gast",
          },
        },
      },
      redirect: "if_required",
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment Successful");
      }
    }

    paymentLoad(false);

    navigate("/confirmation");

    dispatch(clearCartItems());
  };

  const paymentElementOptions = {
    layout: "accordion",
  } as StripePaymentElementOptions;

  return (
    <PaymentFormContainer>
      <FormContainer id="payment" onSubmit={paymentHandler}>
        <h2>Mit Kredit- / Debitkarte zahlen</h2>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
