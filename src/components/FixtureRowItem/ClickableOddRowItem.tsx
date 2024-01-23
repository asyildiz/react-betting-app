export interface ClickableOddRowItemProps {
  handleClick: (odd: string) => void;
  selected: boolean;
  odd: string;
}

export const ClickableOddRowItem = ({
  handleClick,
  selected,
  odd,
}: ClickableOddRowItemProps) => {
  return (
    <div
      className={`virtualized-cell clickable ${selected && "selected"}`}
      onClick={() => handleClick(odd)}
    >
      {odd}
    </div>
  );
};
