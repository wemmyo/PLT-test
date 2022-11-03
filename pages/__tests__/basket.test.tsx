import { fireEvent, getAllByRole, getByRole } from "@testing-library/react";
import each from "jest-each";
import { renderWithProviders } from "../../utils/test-utils";
import Basket from "../basket";

const mockBasketItems = [
  {
    id: 1,
    name: "Name 1",
    price: 10,
    img: "https://via.placeholder.com/150",
    colour: "red",
    quantity: 0,
  },
  {
    id: 2,
    name: "Name 2",
    price: 20,
    img: "https://via.placeholder.com/150",
    colour: "blue",
    quantity: 0,
  },
  {
    id: 3,
    name: "Name 3",
    price: 30,
    img: "https://via.placeholder.com/150",
    colour: "green",
    quantity: 0,
  },
];

describe("Basket", () => {
  it("should render basket", () => {
    const { getByText } = renderWithProviders(<Basket />, {
      preloadedState: {
        basket: {
          products: mockBasketItems,
        },
      },
    });
    getByText("PRETTYLITTLETHING");
    getByText("Basket");
  });

  each(mockBasketItems).it(
    "should render $name in list",
    ({ name, price, img, colour }) => {
      const { getByText, getByAltText } = renderWithProviders(<Basket />, {
        preloadedState: {
          basket: {
            products: mockBasketItems,
          },
        },
      });
      getByText(name);
      getByText(price);
      getByText(colour);
      expect(getByAltText(name)).toHaveAttribute("src", img);
    }
  );
  it("should not decrement total items quantity below 0", () => {
    const { getByText, getAllByRole, getAllByText } = renderWithProviders(
      <Basket />,
      {
        preloadedState: {
          basket: {
            products: mockBasketItems,
          },
        },
      }
    );

    const basketTotal = getAllByText("Total items: ", { exact: false })[0];

    expect(basketTotal).toHaveTextContent("0");
    const decrementButton = getAllByRole("button", { name: "-" })[0];
    fireEvent.click(decrementButton);

    expect(basketTotal).toHaveTextContent("0");
  });
  it("should increase total items quantity", () => {
    const { getAllByRole, getAllByText } = renderWithProviders(<Basket />, {
      preloadedState: {
        basket: {
          products: mockBasketItems,
        },
      },
    });
    const basketTotal = getAllByText("Total items: ", { exact: false })[0];

    expect(basketTotal).toHaveTextContent("0");
    fireEvent.click(
      getAllByRole("button", {
        name: "+",
      })[0]
    );
    expect(basketTotal).toHaveTextContent("1");
    fireEvent.click(
      getAllByRole("button", {
        name: "+",
      })[0]
    );
    expect(basketTotal).toHaveTextContent("2");
  });

  it("should remove item from list", () => {
    const { getAllByTestId, getAllByRole } = renderWithProviders(<Basket />, {
      preloadedState: {
        basket: {
          products: mockBasketItems,
        },
      },
    });
    expect(getAllByTestId("basket-card")).toHaveLength(3);
    const removeButton = getAllByRole("button", { name: /remove/i })[0];
    fireEvent.click(removeButton);
    expect(getAllByTestId("basket-card")).toHaveLength(2);
  });
});
