import React from "react";
import { BasketItem } from "../../types";
import {
  basketRowItemCodeTestid,
  basketRowItemContainerTestid,
  basketRowItemEndTestid,
  basketRowItemHeadTestid,
  basketRowItemOddTestid,
} from "../../constants/test-ids";

interface BasketRowItemProps {
  rowItem: BasketItem;
}

export const BasketRowItem = ({ rowItem }: BasketRowItemProps) => {
  const getSelectedOdd = (): string => {
    return `Oran: ${rowItem.selectedOdd}`;
  };

  return (
    <div
      data-testid={basketRowItemContainerTestid}
      className="basket-row-item-container"
    >
      <div
        data-testid={basketRowItemHeadTestid}
        className="basket-row-item-head"
      >
        <p data-testid={basketRowItemCodeTestid}>
          {rowItem.OCG["1"].MBS} Kod: {rowItem.C}
        </p>
        <p>Maç: {rowItem.N}</p>
      </div>
      <div data-testid={basketRowItemEndTestid} className="basket-row-item-end">
        <p data-testid={basketRowItemOddTestid} className="basket-row-item-odd">
          {getSelectedOdd()}
        </p>
      </div>
    </div>
  );
};
