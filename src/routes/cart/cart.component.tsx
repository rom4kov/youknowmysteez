import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  selectCartItems,
  selectCartCount,
  selectCartTotal,
} from "../../store/selectors/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

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
  ToPaymentButton,
} from "./cart.styles";

import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);

  const navigate = useNavigate();

  const goToPaymentHandler = () => {
    navigate("/payment");
  };

  return (
    <CartContainer>
      <Cart>
        <CartTitle>
          Warenkorb {cartCount ? `(${cartCount} Artikel)` : ""}
        </CartTitle>
        {cartItems?.map((item) => (
          <CheckoutItem checkoutItem={item} key={item.id} />
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
        <ToPaymentButton
          onClick={goToPaymentHandler}
          buttonType={BUTTON_TYPE_CLASSES.base}
        >
          Zur Kasse
        </ToPaymentButton>
      </Pay>
    </CartContainer>
  );
};

export default Checkout;
