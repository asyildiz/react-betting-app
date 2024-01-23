import React from "react";
import { render, screen } from "@testing-library/react";
import { Basket } from "./";
import { BasketContextType, BasketProvider, useBasket } from "../../context";
import { basketMockData } from "../../mock/basket-mock-data";
import {
  basketAmountTestId,
  basketRowItemCodeTestid,
} from "../../constants/test-ids";

jest.mock("../../context", () => ({
  ...jest.requireActual("../../context"),
  useBasket: jest.fn(),
}));

describe("<Basket />", () => {
  beforeEach(() => {
    (useBasket as jest.MockedFunction<() => BasketContextType>).mockReturnValue(
      {
        basketItems: basketMockData,
        updateBasket: () => {},
      },
    );
  });

  test("should render basket items correctly", () => {
    render(
      <BasketProvider>
        <Basket />
      </BasketProvider>,
    );

    basketMockData.forEach((item, index) => {
      const itemName = screen.getAllByTestId(basketRowItemCodeTestid)[index];
      expect(itemName).toBeInTheDocument();
    });
  });

  test("should calculate and display the correct total price", () => {
    render(
      <BasketProvider>
        <Basket />
      </BasketProvider>,
    );

    const totalPrice = screen.getByTestId(basketAmountTestId);
    expect(totalPrice).toHaveTextContent("Toplam: 22.50₺");
  });
});
