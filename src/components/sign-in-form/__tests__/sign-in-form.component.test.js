import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import SignInForm from "../sign-in-form.component";

import { emailSignInStart } from "../../../store/reducers/user.reducer";

const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("SignInForm tests", () => {
  test("dispatch emailSignInStart when form button is clicked", async () => {
    const formFields = {
      email: "john@smith.com",
      password: "12345678",
    };
    renderWithProviders(<SignInForm formFields={formFields} />, {
      preloadedState: {},
    });

    const emailInput = screen.getByRole("textbox", { name: "" });
    const passwordInput = screen.getByRole("textbox", { name: /password/i });
    const emailSignInButton = screen.getByTestId("submit-button");
    await fireEvent.change(emailInput, { target: { value: "john@smith.com" } });
    await fireEvent.change(passwordInput, { target: { value: "12345678" } });
    await fireEvent.click(emailSignInButton);
    expect(mockDispatch).toHaveBeenCalled();
    const emailSignInAction = emailSignInStart("john@smith.com", "12345678");
    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(emailSignInAction);
    });

    mockDispatch.mockClear();
  });
});
