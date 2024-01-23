import React from "react";
import { useBasket } from "../../context";
import { BasketRowItem } from "./";
import { BasketItem } from "../../types";
import {
  basketAmountTestId,
  basketContainerTestid,
  basketItemsTestId,
} from "../../constants/test-ids";
import { CURRENCY } from "../../constants/currency";
import "./style.scss";

export const Basket = ({ currency = CURRENCY.TURKISH_LIRA }) => {
  const { basketItems } = useBasket();

  const getBasketTotalPrice = () => {
    return `Toplam: ${basketItems
      .reduce((acc: number, currentValue: BasketItem) => {
        return acc * currentValue.selectedOdd;
      }, 1)
      .toFixed(2)}${currency}`;
  };

  if (!basketItems.length) {
    return null;
  }

  return (
    <div data-testid={basketContainerTestid} className="basket-container">
      <div data-testid={basketItemsTestId} className="basket-items">
        {basketItems?.map((basketItem: BasketItem) => (
          <BasketRowItem rowItem={basketItem} />
        ))}
      </div>
      <p data-testid={basketAmountTestId} className="basket-amount">
        {getBasketTotalPrice()}
      </p>
    </div>
  );
};
