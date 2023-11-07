// import { mount } from "enzyme";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";
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

describe("product-card tests", () => {
  test("it should add the product item when product-card button is clicked", async () => {
    const mockProduct = {
      id: 1,
      imageUrl: "www.url.com",
      name: "nice hat",
      price: 20,
      brand: "Nike",
    };

    const { store } = renderWithProviders(
      <ProductCard product={mockProduct} />,
      {
        preloadedState: {
          cart: {
            cartItems: [],
          },
        },
      }
    );

    const addToCartButton = screen.getByText(/in den warenkorb/i);
    await fireEvent.click(addToCartButton);
    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});

// it("properly render ProductCard component", () => {
//   expect(
//     mount(
//       <Provider store={store}>
//         <ProductCard />
//       </Provider>
//     )
//   ).toMatchSnapshot();
// });
