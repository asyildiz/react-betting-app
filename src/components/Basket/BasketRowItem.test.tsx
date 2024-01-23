import React from "react";
import { render, screen } from "@testing-library/react";
import { BasketRowItem } from "./";
import { basketMockData } from "../../mock/basket-mock-data";
import {
  basketRowItemCodeTestid,
  basketRowItemContainerTestid,
  basketRowItemEndTestid,
  basketRowItemHeadTestid,
  basketRowItemOddTestid,
} from "../../constants/test-ids";

test("should BasketRowItem renders correctly", () => {
  render(<BasketRowItem rowItem={basketMockData[0]} />);

  expect(screen.getByTestId(basketRowItemContainerTestid)).toBeInTheDocument();
  expect(screen.getByTestId(basketRowItemHeadTestid)).toBeInTheDocument();
  expect(screen.getByTestId(basketRowItemCodeTestid)).toHaveTextContent(
    `${basketMockData[0].OCG["1"].MBS} Kod: ${basketMockData[0].C}`,
  );
  expect(screen.getByText(`Maç: ${basketMockData[0].N}`)).toBeInTheDocument();
  expect(screen.getByTestId(basketRowItemEndTestid)).toBeInTheDocument();
  expect(screen.getByTestId(basketRowItemOddTestid)).toHaveTextContent(
    `Oran: ${basketMockData[0].selectedOdd}`,
  );
});
