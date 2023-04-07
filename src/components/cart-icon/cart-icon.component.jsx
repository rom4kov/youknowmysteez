import { ReactComponent as ShoppingIcon } from "../../assets/svgs/shopping-bag2.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">2</span>
    </div>
  );
};

export default CartIcon;
