import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../../store/selectors/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import PaymentForm from "../../components/payment-form/payment-form.component";

import {
  CartContainer,
  Cart,
  CartTitle,
  Pay,
  PayHeading,
  PaymentItems,
  SubTotal,
  Shipment,
  Total,
} from "./cart.styles";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CartContainer>
      <Cart>
        <CartTitle>
          Warenkorb {cartCount ? `(${cartCount} Artikel)` : ""}
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
        <PaymentForm />
      </Pay>
    </CartContainer>
  );
};

export default Checkout;
