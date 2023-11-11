import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CheckoutItem from "../checkout-item.component";

import { removeItemFromCart } from "../../../store/reducers/cart.reducer";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("CheckoutItem tests", () => {
  test("it should show CheckoutItem data", () => {
    const checkoutItem = {
      name: "Hat",
      brand: "Nike",
      imageUrl: "www.url.com",
      price: 20,
      quantity: 1,
    };

    renderWithProviders(<CheckoutItem checkoutItem={checkoutItem} />, {
      preloadedState: {},
    });

    const cartItemName = screen.getByText(/hat/i);
    expect(cartItemName).toBeInTheDocument();
  });

  test("dispatch removeFromCart with checkoutItem when RemoveItem is clicked", async () => {
    const checkoutItem = {
      name: "Hat",
      brand: "Nike",
      imageUrl: "www.url.com",
      price: 20,
      quantity: 1,
    };

    renderWithProviders(<CheckoutItem checkoutItem={checkoutItem} />, {
      preloadedState: {},
    });

    const removeItem = screen.getByText(/artikel entfernen/i);
    await fireEvent.click(removeItem);
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeItemFromCart(checkoutItem));
  });
});
