import { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Cart from "./routes/cart/cart.component";
import Payment from "./routes/payment/payment.component";
import { checkUserSession } from "./store/reducers/user.reducer";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "utils/stripe/stripe.utils";

const App = () => {
  const dispatch = useDispatch();

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("../.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.paymentIntent.client_secret));
  }, []);

  console.log(clientSecret);

  const appearance = {
    theme: "stripe",
  };

  const options = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    console.log(checkUserSession());
    dispatch(checkUserSession());
  }, [dispatch]);

  let { ref: intObsRef, inView: navColor } = useInView({
    threshold: 0.2,
  });

  return (
    <Fragment>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Routes>
            <Route path="/" element={<Navigation navColor={navColor} />}>
              <Route index element={<Home intObsRef={intObsRef} />} />
              <Route path="auth" element={<Authentication />} />
              <Route path="shop/*" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
              <Route path="payment" element={<Payment />} />
            </Route>
          </Routes>
        </Elements>
      )}
    </Fragment>
  );
};

export default App;
