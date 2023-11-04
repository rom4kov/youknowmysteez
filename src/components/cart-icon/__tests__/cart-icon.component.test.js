import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("cart-icon tests", () => {
  test("uses preloaded state to render", () => {
    const initialCartItems = [
      {
        id: 1,
        name: "Item A",
        imageUrl: "test",
        price: 25,
        brand: "test",
        quantity: 1,
      },
      {
        id: 2,
        name: "Item B",
        imageUrl: "test",
        price: 15,
        brand: "test",
        quantity: 2,
      },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const cartIconElement = screen.getByText("3");
    expect(cartIconElement).toBeInTheDocument();
  });
});
