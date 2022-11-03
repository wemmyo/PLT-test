import { render, screen } from "@testing-library/react";

import { IProduct } from "../../types";
import Product from "./Product";

const mockProduct: IProduct = {
  id: 1,
  name: "Name 1",
  price: 10000,
  img: "https://via.placeholder.com/150",
  colour: "red",
};

const component = <Product data={mockProduct} onAddToBasket={() => null} />;

describe("<Product/>", () => {
  it("should render correctly", () => {
    render(component);

    screen.getByText(mockProduct.name);
    screen.getByText(mockProduct.price);
    screen.getByText(mockProduct.colour);
    expect(screen.getByAltText(mockProduct.name)).toHaveAttribute(
      "src",
      mockProduct.img
    );
    screen.getByRole("button", { name: /add to basket/i });
  });
});
