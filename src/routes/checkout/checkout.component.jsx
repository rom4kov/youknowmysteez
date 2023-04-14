import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button from "../../components/button/button.component";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, itemCount, sumTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="cart">
        <h2 className="cart-title">
          Warenkorb {itemCount ? `(${itemCount} Artikel)` : ""}
        </h2>
        {cartItems &&
          cartItems.map((item) => (
            <CheckoutItem checkoutItem={item} key={item.id}></CheckoutItem>
          ))}
      </div>
      <div className="pay">
        <h2>Gesamtsumme</h2>
        <div className="payment-items">
          <div className="subtotal">
            <span>Zwischensumme</span>
            <span>{sumTotal},00 €</span>
          </div>
          <div className="shipment">
            <span>Lieferung</span>
            <span>0,00 €</span>
          </div>
          <div className="total">
            <span>
              Gesamtsumme <span>(inkl. Mwst.)</span>
            </span>
            <span>{sumTotal},00 €</span>
          </div>
        </div>
        <Button>Zur Kasse</Button>
      </div>
    </div>
  );
};

export default Checkout;
