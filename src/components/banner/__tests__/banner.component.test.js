import React from "react";
import { render, screen } from "@testing-library/react";
import Banner from "../banner.component";

describe("Banner tests", () => {
  test("it should render the Banner component", () => {
    render(<Banner />);
    const bannerComponent = screen.queryByLabelText("banner");
    expect(bannerComponent).toBeInTheDocument();
  });
});
