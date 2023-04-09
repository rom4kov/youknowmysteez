import "./checkout.styles.scss";

import React from "react";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="cart">
        <h2>Warenkorb</h2>
      </div>
      <div className="pay">
        <h2>Gesamtsumme</h2>
      </div>
    </div>
  );
};

export default Checkout;
