import React, { useState } from "react";
import { FixtureItem } from "../../types";
import { fixtureRowItemCodeTestid } from "../../constants/test-ids";
import "./style.scss";
import { ClickableOddRowItem } from "./ClickableOddRowItem";
import { useBasket } from "../../context";

export interface FixtureRowItemProps {
  rowItem: FixtureItem;
  onClick?: () => void;
}

export const FixtureRowItem = ({ rowItem }: FixtureRowItemProps) => {
  const [selectedOdd, setSelectedOdd] = useState("");
  const { updateBasket } = useBasket();

  const handleSelectOdd = (odd: string) => {
    if (selectedOdd === odd) {
      setSelectedOdd("");
    } else {
      setSelectedOdd(odd);
    }

    updateBasket(odd, rowItem);
  };

  const generateHeaderValues = () => [
    <div className="virtualized-cell">
      <span>{rowItem.D}</span>
      <span>{rowItem.DAY}</span>
      <span>{rowItem.LN}</span>
    </div>,
    <div className="virtualized-cell">Yorumlar</div>,
    <div className="virtualized-cell"></div>,
    <div className="virtualized-cell">1</div>,
    <div className="virtualized-cell">x</div>,
    <div className="virtualized-cell">2</div>,
    <div className="virtualized-cell">Alt</div>,
    <div className="virtualized-cell">{rowItem.OCG["5"].OC["26"].N}</div>,
    <div className="virtualized-cell">H1</div>,
    <div className="virtualized-cell">1</div>,
    <div className="virtualized-cell">x</div>,
    <div className="virtualized-cell">2</div>,
    <div className="virtualized-cell">H2</div>,
    <div className="virtualized-cell">{rowItem.OCG["2"].OC["3"].N}</div>,
    <div className="virtualized-cell">1-2</div>,
    <div className="virtualized-cell">{rowItem.OCG["2"].OC["5"].N}</div>,
    <div className="virtualized-cell">Var</div>,
    <div className="virtualized-cell">Yok</div>,
    <div className="virtualized-cell">+99</div>,
  ];

  const generateOddsValues = () => [
    <div className="virtualized-cell">
      <span className="bold" data-testid={fixtureRowItemCodeTestid}>
        {rowItem.C}
      </span>
      <span>{rowItem.T}</span>
      <span>{rowItem.N}</span>
    </div>,
    <div className="virtualized-cell">Yorumlar</div>,
    <div className="virtualized-cell">{rowItem.OCG["1"].MBS}</div>,
    <ClickableOddRowItem
      handleClick={handleSelectOdd}
      odd={rowItem.OCG["1"].OC["0"].O}
      selected={rowItem.OCG["1"].OC["0"].O === selectedOdd}
    />,
    <ClickableOddRowItem
      odd={rowItem.OCG["1"].OC["1"].O}
      handleClick={handleSelectOdd}
      selected={rowItem.OCG["1"].OC["1"].O === selectedOdd}
    />,
    <div className="virtualized-cell"></div>,
    <ClickableOddRowItem
      odd={rowItem.OCG["5"].OC["25"].O}
      handleClick={handleSelectOdd}
      selected={rowItem.OCG["5"].OC["25"].O === selectedOdd}
    />,
    <ClickableOddRowItem
      odd={rowItem.OCG["5"].OC["26"].O}
      handleClick={handleSelectOdd}
      selected={rowItem.OCG["5"].OC["26"].O === selectedOdd}
    />,
    <div className="virtualized-cell"></div>,
    <div className="virtualized-cell"></div>,
    <div className="virtualized-cell"></div>,
    <div className="virtualized-cell"></div>,
    <div className="virtualized-cell"></div>,
    <ClickableOddRowItem
      odd={rowItem.OCG["2"].OC["3"].O}
      handleClick={handleSelectOdd}
      selected={rowItem.OCG["2"].OC["3"].O === selectedOdd}
    />,
    <ClickableOddRowItem
      odd={rowItem.OCG["2"].OC["4"].O}
      handleClick={handleSelectOdd}
      selected={rowItem.OCG["2"].OC["4"].O === selectedOdd}
    />,
    <ClickableOddRowItem
      odd={rowItem.OCG["2"].OC["5"].O}
      handleClick={handleSelectOdd}
      selected={rowItem.OCG["2"].OC["5"].O === selectedOdd}
    />,
    <div className="virtualized-cell"></div>,
    <div className="virtualized-cell"></div>,
    <div className="virtualized-cell"></div>,
  ];

  return (
    <div className="virtualized-container">
      <div className="match-header">{generateHeaderValues()}</div>
      <div className="match-odds">{generateOddsValues()}</div>
    </div>
  );
};
