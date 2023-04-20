import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import {
  selectIsCartOpen,
  selectCartItems,
  selectCartTotal,
} from "../../store/selectors/cart.selector";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  SumTotal,
  CartButton,
} from "./cart-dropdown.styles";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const navigate = useNavigate();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <CartDropdownContainer className={`${isCartOpen ? "open" : ""}`}>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem isCartOpen={isCartOpen} cartItem={item} key={item.id} />
          ))
        ) : (
          <span style={{ color: "black", textAlign: "center" }}>
            Keine Artikel im Warenkorb
          </span>
        )}
      </CartItems>
      <SumTotal>
        <span>Gesamtsumme:</span>
        <span>{cartTotal},00 €</span>
      </SumTotal>
      <CartButton
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={goToCheckoutHandler}
      >
        Zum Warenkorb
      </CartButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
