import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";

import CartItem from "../cart-item/cart-item.component";

import {
  CartDropdownContainer,
  CartItems,
  SumTotal,
} from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { isCartOpen, setIsCartOpen, cartItems, sumTotal } =
    useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartDropdownContainer className={`${isCartOpen ? "open" : ""}`}>
      <CartItems>
        {cartItems &&
          cartItems.map((item) => (
            <CartItem
              isCartOpen={isCartOpen}
              cartItem={item}
              key={item.id}
            ></CartItem>
          ))}
      </CartItems>
      <SumTotal>
        <span>Gesamtsumme:</span>
        <span>{sumTotal},00 €</span>
      </SumTotal>
      <Button onClick={goToCheckoutHandler}>Zum Warenkorb</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
