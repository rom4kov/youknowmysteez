import { shallow } from "enzyme";
import CartItem from "./cart-item.component";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const initState = {
  cartItem: {
    name: "hat",
    brand: "Nike",
    imageUrl: "www.url.com",
    price: 20,
    quantity: 1,
  },
  isCartOpen: false,
};
const store = mockStore(initState);

it("properly render CartItem component", () => {
  expect(
    shallow(
      <Provider store={store}>
        <CartItem />
      </Provider>
    )
  ).toMatchSnapshot();
});
