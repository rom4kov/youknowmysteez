import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartItem from "../cart-item.component";

import { removeItemFromCart } from "../../../store/reducers/cart.reducer";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("CartItem tests", () => {
  test("it should show CartItem data", () => {
    const cartItem = {
      name: "Hat",
      brand: "Nike",
      imageUrl: "www.url.com",
      price: 20,
      quantity: 1,
    };

    renderWithProviders(<CartItem cartItem={cartItem} />, {
      preloadedState: {},
    });

    const cartItemName = screen.getByText(/hat/i);
    expect(cartItemName).toBeInTheDocument();
  });

  test("dispatch removeItemFromCart with cartItem when RemoveItem is clicked", async () => {
    const cartItem = {
      name: "Hat",
      brand: "Nike",
      imageUrl: "www.url.com",
      price: 20,
      quantity: 1,
    };

    renderWithProviders(<CartItem cartItem={cartItem} />, {
      preloadedState: {},
    });

    const removeItem = screen.getByText(/artikel entfernen/i);
    await fireEvent.click(removeItem);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeItemFromCart(cartItem));
  });
});
