import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

import {
  CheckoutContainer,
  Cart,
  CartTitle,
  Pay,
  PayHeading,
  PaymentItems,
  SubTotal,
  Shipment,
  Total,
  ToPaymentButton,
} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, itemCount, sumTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <Cart>
        <CartTitle>
          Warenkorb {itemCount ? `(${itemCount} Artikel)` : ""}
        </CartTitle>
        {cartItems &&
          cartItems.map((item) => (
            <CheckoutItem checkoutItem={item} key={item.id}></CheckoutItem>
          ))}
      </Cart>
      <Pay>
        <PayHeading>Gesamtsumme</PayHeading>
        <PaymentItems>
          <SubTotal>
            <span>Zwischensumme</span>
            <span>{sumTotal},00 €</span>
          </SubTotal>
          <Shipment>
            <span>Lieferung</span>
            <span>0,00 €</span>
          </Shipment>
          <Total>
            <span>
              Gesamtsumme <span>(inkl. Mwst.)</span>
            </span>
            <span>{sumTotal},00 €</span>
          </Total>
        </PaymentItems>
        <ToPaymentButton buttonType={BUTTON_TYPE_CLASSES.base}>
          Zur Kasse
        </ToPaymentButton>
      </Pay>
    </CheckoutContainer>
  );
};

export default Checkout;
