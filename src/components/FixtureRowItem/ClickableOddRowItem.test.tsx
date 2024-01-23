import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ClickableOddRowItem } from "./ClickableOddRowItem";

describe("<ClickableOddRowItem />", () => {
  test("should render with the correct odd value", () => {
    const handleClickMock = jest.fn();
    const odd = "6.1";

    render(
      <ClickableOddRowItem
        handleClick={handleClickMock}
        selected={false}
        odd={odd}
      />,
    );

    const oddElement = screen.getByText(odd);
    expect(oddElement).toBeInTheDocument();
  });

  test("should handle click event correctly", () => {
    const handleClickMock = jest.fn();
    const odd = "3.4";

    render(
      <ClickableOddRowItem
        handleClick={handleClickMock}
        selected={false}
        odd={odd}
      />,
    );

    const oddElement = screen.getByText(odd);
    fireEvent.click(oddElement);

    expect(handleClickMock).toHaveBeenCalledWith(odd);
  });

  test("should applied 'selected' class when selected prop is true", () => {
    const handleClickMock = jest.fn();
    const odd = "2.0";

    const { container } = render(
      <ClickableOddRowItem
        handleClick={handleClickMock}
        selected={true}
        odd={odd}
      />,
    );

    const clickableCell = container.firstChild;
    expect(clickableCell).toHaveClass("selected");
  });
});
