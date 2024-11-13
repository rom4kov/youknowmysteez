import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { setCartIsOpen } from "../../store/reducers/cart.reducer";

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
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const goToCheckoutHandler = useCallback(() => {
    navigate("/cart");
  }, [navigate]);

  useEffect(() => {
    dispatch(setCartIsOpen(false));
  }, [pathname, dispatch]);

  return (
    <CartDropdownContainer
      className={`${isCartOpen ? "open" : ""}`}
      aria-label="cart-dropdown"
    >
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem isCartOpen={isCartOpen} cartItem={item} key={item.id} />
          ))
        ) : (
          <span
            style={{
              color: "black",
              textAlign: "center",
              opacity: `${isCartOpen ? "0.9" : "0"}`,
              transition: `${isCartOpen ? "opacity 5ms ease 200ms" : "all 20ms ease"}`,
            }}
          >
            Keine Artikel im Warenkorb
          </span>
        )}
      </CartItems>
      <SumTotal isCartOpen={isCartOpen}>
        <span>Gesamtsumme:</span>
        <span data-testid="cart-total">{cartTotal},00 €</span>
      </SumTotal>
      <CartButton
        buttonType={BUTTON_TYPE_CLASSES.base}
        onClick={goToCheckoutHandler}
        isCartOpen={isCartOpen}
      >
        Zum Warenkorb
      </CartButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
