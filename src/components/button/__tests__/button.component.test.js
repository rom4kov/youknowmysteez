import { render, screen } from "@testing-library/react";
import Button from "../button.component";
import { BUTTON_TYPE_CLASSES } from "../button.component";

describe("button tests", () => {
  test("should render base button when nothing is passed", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: rgb(25, 59, 25)");
  });

  test("should render GoogleSignInButton when google is passed", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.google} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: #4285f4");
  });

  test("should render InvertedButton when inverted is passed", () => {
    render(<Button buttonType={BUTTON_TYPE_CLASSES.inverted} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveStyle("background-color: white");
  });
});
