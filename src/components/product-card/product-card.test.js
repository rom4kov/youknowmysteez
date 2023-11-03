import { mount } from "enzyme";
import ProductCard from "./product-card.component";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
const initState = {
  product: {
    id: 1,
    imageUrl: "www.url.com",
    name: "hat",
    price: 20,
    brand: "Nike",
  },
};
const store = mockStore(initState);

it("properly render ProductCard component", () => {
  expect(
    mount(
      <Provider store={store}>
        <ProductCard />
      </Provider>
    )
  ).toMatchSnapshot();
});
