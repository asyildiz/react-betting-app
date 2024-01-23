import React from "react";
import { render, screen } from "@testing-library/react";
import { VirtualizedList } from "./VirtualizedList";
import { betListMockData } from "../../mock";
import { TABLE_HEADERS } from "../../constants/table-headers";

describe("<VirtualizedList />", () => {
  test("should VirtualizedList renders with header and virtualized items", () => {
    render(
      <VirtualizedList
        items={betListMockData}
        itemHeight={50}
        visibleItemCount={5}
      />,
    );

    betListMockData.forEach((item) => {
      const itemElement = screen.getByText(item.C);
      expect(itemElement).toBeInTheDocument();
    });
  });
});
