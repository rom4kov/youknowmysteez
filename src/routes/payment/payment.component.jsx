import { useState } from "react";

import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/selectors/cart.selector";

import PaymentForm from "../../components/payment-form/payment-form.component";

import { BUTTON_TYPE_CLASSES } from "../../components/button/button.component";

import {
  PaymentContainer,
  PaymentFormContainer,
  Pay,
  PayHeading,
  PaymentItems,
  SubTotal,
  Shipment,
  Total,
  PaymentButton,
} from "./payment.styles";

const Payment = ({selectAmount}) => {
  const cartTotal = useSelector(selectCartTotal);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  console.log(selectAmount);

  // selectAmount(cartTotal);

  return (
    <PaymentContainer>
      <PaymentFormContainer>
        <PaymentForm
          paymentLoad={setIsProcessingPayment}
        />
      </PaymentFormContainer>
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
        <PaymentButton
          isLoading={isProcessingPayment}
          form="payment"
          buttonType={BUTTON_TYPE_CLASSES.base}
        >
          BEZAHLEN
        </PaymentButton>
      </Pay>
    </PaymentContainer>
  );
};

export default Payment;
