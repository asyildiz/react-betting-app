import React, { createContext, ReactNode, useContext, useState } from "react";
import { BasketItem, FixtureItem } from "../types";

interface BasketProviderProps {
  children: ReactNode;
}

export type BasketContextType = {
  basketItems: BasketItem[];
  updateBasket: (odd: string, item: FixtureItem) => void;
};

const BasketContext = createContext<BasketContextType>({
  basketItems: [],
  updateBasket: () => {},
});

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider: React.FC<BasketProviderProps> = ({ children }) => {
  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  const addItemToBasket = (odd: string, item: FixtureItem) => {
    const targetOdd: BasketItem = {
      ...item,
      selectedOdd: parseFloat(odd),
    };

    setBasketItems([...basketItems, targetOdd]);
  };

  const changeItemInBasket = (matchId: string, odd: string) => {
    const filteredBasketItems = basketItems.map((basketItem) => {
      if (basketItem.C === matchId) {
        return {
          ...basketItem,
          selectedOdd: parseFloat(odd),
        };
      }

      return basketItem;
    });

    setBasketItems(filteredBasketItems);
  };

  const removeItemFromBasket = (matchId: string, odd: string) => {
    const filteredBasketItems = basketItems.filter(
      (basketItem) => basketItem.selectedOdd !== parseFloat(odd),
    );

    setBasketItems(filteredBasketItems);
  };

  const updateBasket = (odd: string, item: FixtureItem) => {
    const addedMatches = basketItems.filter(
      (basketItem) => basketItem.C === item.C,
    );
    if (addedMatches.length) {
      if (
        addedMatches.filter(
          (basketItem) => basketItem.selectedOdd === parseFloat(odd),
        ).length
      ) {
        removeItemFromBasket(item.C, odd);
        return;
      }

      changeItemInBasket(item.C, odd);
    } else {
      addItemToBasket(odd, item);
    }
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        updateBasket,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
