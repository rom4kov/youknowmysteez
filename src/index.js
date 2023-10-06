import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";

import App from "./App";

import { store } from "./store/store";
import { stripePromise } from "utils/stripe/stripe.utils";

import "./index.scss";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const [clientSecret, setClientSecret] = useState("");

useEffect(() => {
  // Create PaymentIntent as soon as the page loads
  fetch("/create-payment-intent", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => setClientSecret(data.clientSecret));
}, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Elements options={options} stripe={stripePromise}>
          <App />
        </Elements>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
