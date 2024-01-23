import React, { useEffect, useState } from "react";
import { Basket, VirtualizedList } from "../components";
import { getBetList } from "../services";
import { ITEM_HEIGHT, VISIBLE_ITEM_COUNT } from "../constants/table";
import "./style.scss";

export const FixtureListing = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchBetList = async () => setList(await getBetList());

    fetchBetList();
  }, []);

  return (
    <>
      <VirtualizedList
        items={list}
        itemHeight={ITEM_HEIGHT}
        visibleItemCount={VISIBLE_ITEM_COUNT}
      />
      <Basket />
    </>
  );
};
