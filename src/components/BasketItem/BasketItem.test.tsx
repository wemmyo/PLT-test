import { render, screen } from "@testing-library/react";
import { IBasket } from "../../types";
import BasketItem from "./BasketItem";

const mockProduct: IBasket = {
  id: 1,
  name: "Name 1",
  price: 10000,
  img: "https://via.placeholder.com/150",
  colour: "red",
  quantity: 0,
};

const component = (
  <BasketItem
    product={mockProduct}
    onDecrease={() => null}
    onIncrease={() => null}
    onRemove={() => null}
  />
);

describe("<BasketItem/>", () => {
  it("should render correctly", () => {
    render(component);
    screen.getByText(mockProduct.name);
    screen.getByText(mockProduct.price);
    screen.getByText(mockProduct.colour);
    expect(screen.getByAltText(mockProduct.name)).toHaveAttribute(
      "src",
      mockProduct.img
    );
    screen.getByText("-");
    screen.getByText("+");
    screen.getByText(/remove/i);
  });
});
