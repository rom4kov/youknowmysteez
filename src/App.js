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
import Confirmation from "./routes/payment/confirmation.component";
import { checkUserSession } from "./store/reducers/user.reducer";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "utils/stripe/stripe.utils";
// import { useSelector } from "react-redux";
// import { selectCartTotal } from "./store/selectors/cart.selector";

const App = () => {
  const dispatch = useDispatch();

  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState(100);

  const selectAmount = (amountValue) => {
    setAmount(amountValue);
  };

  console.log(amount);

  useEffect(() => {
    console.log("amount in useEffect:", amount);
    // Create PaymentIntent as soon as the page loads
    fetch("../.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100, test: "test" }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.paymentIntent.client_secret);
        console.log("data in App useEffect:", data);
      })
      .catch((error) => {
        console.error("Error fetching client secret:", error);
      });
  }, [amount]);

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
        {/* <Elements stripe={stripePromise}> */}
          <Routes>
            <Route path="/" element={<Navigation navColor={navColor} />}>
              <Route index element={<Home intObsRef={intObsRef} />} />
              <Route path="auth" element={<Authentication />} />
              <Route path="shop/*" element={<Shop />} />
              <Route path="cart" element={<Cart />} />
              <Route path="payment" element={<Payment selectAmount={selectAmount}/>} />
              {/* <Route path="payment" element={<Payment />} /> */}
              <Route path="confirmation" element={<Confirmation />} />
            </Route>
          </Routes>
        </Elements>
      )}
    </Fragment>
  );
};

export default App;
