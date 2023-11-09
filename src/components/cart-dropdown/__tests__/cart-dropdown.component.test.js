import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartDropdown from "../cart-dropdown.component";

describe("CartDropdown tests", () => {
  test("it should show cart items if cartItems.length > 0", () => {
    renderWithProviders(<CartDropdown />, {
      preloadedState: {
        cart: {
          cartItems: [
            {
              id: 1,
              name: "nice jacket",
              brand: "the jacket brand",
              price: 70,
              quantity: 1,
            },
            {
              id: 2,
              name: "another nice jacket",
              brand: "the jacket brand",
              price: 75,
              quantity: 1,
            },
          ],
        },
      },
    });

    const emptyCartText = screen.queryByText(/keine artikel im warenkorb/i);
    expect(emptyCartText).toBeNull();
  });

  test("it should show no cart items if cartItems.length = 0", () => {
    renderWithProviders(<CartDropdown />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    const emptyCartText = screen.getByText(/keine artikel im warenkorb/i);
    expect(emptyCartText).toBeInTheDocument();
  });

  test("it should show cartTotal correctly", () => {
    renderWithProviders(<CartDropdown />, {
      preloadedState: {
        cart: {
          cartItems: [
            {
              id: 1,
              name: "nice jacket",
              brand: "the jacket brand",
              price: 70,
              quantity: 1,
            },
            {
              id: 2,
              name: "another nice jacket",
              brand: "the jacket brand",
              price: 75,
              quantity: 1,
            },
          ],
        },
      },
    });

    const cartTotalText = screen.getByTestId("cart-total");
    expect(cartTotalText).toHaveTextContent("145,00 €");
  });
});
