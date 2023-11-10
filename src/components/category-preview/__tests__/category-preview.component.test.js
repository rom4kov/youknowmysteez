import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../../utils/test/test.utils";
import CategoryPreview from "../category-preview.component";

describe("CategoryPreview tests", () => {
  const title = "sneakers";
  const products = [
    {
      id: 1,
      name: "Black Converse",
      brand: "Converse",
      price: 100,
      imageUrl: "converse.com",
    },
    {
      id: 2,
      name: "Red Converse",
      brand: "Converse",
      price: 90,
      imageUrl: "converse.com",
    },
  ];

  test("should render CategoryPreview component correctly", () => {
    const { asFragment } = renderWithProviders(
      <CategoryPreview title={title} products={products} />,
      {
        preloadedState: {},
      }
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("all products of products array are rendered", () => {
    renderWithProviders(<CategoryPreview title={title} products={products} />, {
      preloadedState: {},
    });

    const product1 = screen.getByText(/black converse/i);
    const product2 = screen.getByText(/red converse/i);
    expect(product1).toBeInTheDocument();
    expect(product2).toBeInTheDocument();
  });
});
