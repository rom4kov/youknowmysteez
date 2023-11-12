import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/selectors/cart.selector";

import {
  PaymentItemsContainer,
  SubTotal,
  Shipment,
  Total,
} from "./payment-item.styles";

const PaymentItems = () => {
  const cartTotal = useSelector(selectCartTotal);

  return (
    <PaymentItemsContainer>
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
    </PaymentItemsContainer>
  );
};

export default PaymentItems;
