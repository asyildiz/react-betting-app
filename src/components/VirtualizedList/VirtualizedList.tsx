import React, { useCallback, useEffect, useRef, useState } from "react";
import { FixtureRowItem } from "../FixtureRowItem";
import { FixtureItem } from "../../types";
import { TABLE_HEADERS } from "../../constants/table-headers";
import "./style.scss";

interface VirtualizedListProps {
  items: FixtureItem[];
  itemHeight: number;
  visibleItemCount: number;
}

export const VirtualizedList: React.FC<VirtualizedListProps> = ({
  items,
  itemHeight,
  visibleItemCount,
}) => {
  const [visibleItems, setVisibleItems] = useState<FixtureItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getVisibleItems = useCallback((): FixtureItem[] => {
    const container = containerRef.current;
    if (!container) return [];

    const scrollTop = container.scrollTop;
    const startIdx = Math.floor(scrollTop / itemHeight);
    const endIdx = Math.min(items.length - 1, startIdx + visibleItemCount - 1);

    return items.slice(startIdx, Math.max(startIdx, endIdx + 1));
  }, [itemHeight, items, visibleItemCount]);

  useEffect(() => {
    const handleScroll = () => {
      setVisibleItems(getVisibleItems());
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      setVisibleItems(getVisibleItems());

      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [items, itemHeight, visibleItemCount, getVisibleItems]);

  return (
    <>
      <section className="virtualized-list-header">
        <div className="match-fixed-header">
          {TABLE_HEADERS.map((item, index) => (
            <div
              className="virtualized-cell"
              key={index}
              style={{ minWidth: item.minWidth }}
            >
              {item.label === "Event Count:" ? item.label + items.length : item.label}
            </div>
          ))}
        </div>
      </section>
      <section
        className="virtualized-list-container"
        ref={containerRef}
        style={{
          overflowY: "auto",
          height: `${visibleItemCount * itemHeight}px`,
          position: "relative",
        }}
      >
        <div
          style={{
            height: `${items.length * itemHeight}px`,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          {visibleItems.map((item, index) => (
            <div
              className="virtualized-row"
              key={item.C} 
              style={{
                height: itemHeight,
                // @ts-ignore
                top: `${(index + Math.floor(containerRef.current?.scrollTop / itemHeight)) * itemHeight}px`,
              }}
            >
              <FixtureRowItem rowItem={item} onClick={() => {}}  />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
