import each from "jest-each";
import { screen } from "@testing-library/react";
import ProductList from "./ProductList";
import { IProduct } from "../../types";
import { renderWithProviders } from "../../../utils/test-utils";

const mockProductList: IProduct[] = [
  {
    id: 1,
    name: "Name 1",
    price: 10000,
    img: "https://via.placeholder.com/150",
    colour: "red",
  },
  {
    id: 2,
    name: "Name 2",
    price: 500,
    img: "https://via.placeholder.com/150",
    colour: "blue",
  },
  {
    id: 3,
    name: "Name 3",
    price: 1500,
    img: "https://via.placeholder.com/150",
    colour: "green",
  },
];

describe("ProductList", () => {
  each(mockProductList).it(
    "should render $name correctly",
    ({ name, price, colour, img }) => {
      renderWithProviders(<ProductList data={mockProductList} />);
      screen.getByText(name);
      screen.getByText(price);
      screen.getByText(colour);
      expect(screen.getByAltText(name)).toHaveAttribute("src", img);
    }
  );
});
