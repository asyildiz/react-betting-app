import React from "react";
import { render, screen } from "@testing-library/react";
import { FixtureRowItem } from "./FixtureRowItem";
import { BasketProvider } from "../../context";
import { betListMockData } from "../../mock";
import { fixtureRowItemCodeTestid } from "../../constants/test-ids";

describe("<FixtureRowItem />", () => {
  test("should render header and odds values correctly", () => {
    render(
      <BasketProvider>
        <FixtureRowItem rowItem={betListMockData[0]} />
      </BasketProvider>,
    );

    expect(
      screen.getByText(betListMockData[0].OCG["5"].OC["26"].N),
    ).toBeInTheDocument();
    expect(screen.getByTestId(fixtureRowItemCodeTestid)).toBeInTheDocument();
  });
});
