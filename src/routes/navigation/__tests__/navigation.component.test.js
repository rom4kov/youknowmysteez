import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import Navigation from "../navigation.component";
import { signOutStart } from "../../../store/reducers/user.reducer";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("navigation tests", () => {
  test("it should render a sign-in link and no sign-out if there is no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signOutLinkElement = screen.queryByText(/abmelden/i);
    expect(signOutLinkElement).toBeNull();

    const signInLinkElement = screen.getByText(/anmelden/i);
    expect(signInLinkElement).toBeInTheDocument();
  });

  test("it should render sign-out and not sign-in if there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signInLinkElement = screen.queryByText(/anmelden/i);
    expect(signInLinkElement).toBeNull();

    const signOutLinkElement = screen.getByText(/abmelden/i);
    expect(signOutLinkElement).toBeInTheDocument();
  });

  test("it should not render cart-dropdown if isCartOpen is false", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          cartItems: [],
          isCartOpen: false,
        },
      },
    });

    const cartDropdownComponent = screen.getByLabelText("cart-dropdown");
    expect(cartDropdownComponent).toHaveStyle("transform: scale(1,0)");
  });

  test("it should render cart-dropdown if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          cartItems: [],
          isCartOpen: true,
        },
      },
    });

    const cartDropdownComponent = screen.getByLabelText("cart-dropdown");
    expect(cartDropdownComponent).toHaveStyle("transform: scale(1,1)");
  });

  test("it should dispatch signOutStart action when clicking on the sign-out link", async () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutLinkElement = screen.getByText(/abmelden/i);
    expect(signOutLinkElement).toBeInTheDocument();

    await fireEvent.click(signOutLinkElement);
    expect(mockDispatch).toHaveBeenCalled();
    const signOutAction = signOutStart();
    expect(mockDispatch).toHaveBeenCalledWith(signOutAction);

    mockDispatch.mockClear();
  });
});
