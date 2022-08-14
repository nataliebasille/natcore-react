import { css } from "@emotion/css";

const RANGE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] as const;
type GridProps =
  | "container"
  | `columnStart${typeof RANGE[number]}`
  | `columnEnd${typeof RANGE[number]}`
  | `columnSpan${typeof RANGE[number]}`
  | `rowStart${typeof RANGE[number]}`
  | `rowEnd${typeof RANGE[number]}`
  | `rowSpan${typeof RANGE[number]}`;

const baseGridStyles: any = {};

RANGE.forEach((value) => {
  baseGridStyles[`columnStart${value}`] = css({ gridColumnStart: value });
  baseGridStyles[`columnEnd${value}`] = css({ gridColumnEnd: value });
  baseGridStyles[`columnSpan${value}`] = css({
    gridColumnEnd: `span ${value}`,
  });
  baseGridStyles[`rowStart${value}`] = css({ gridRowStart: value });
  baseGridStyles[`rowEnd${value}`] = css({ gridRowEnd: value });
  baseGridStyles[`rowSpan${value}`] = css({ gridRowEnd: `span ${value}` });
});

export const useGrid = ({
  gap = 0,
  columnGap = gap || 0,
  rowGap = gap || 0,
}: {
  gap?: number | string;
  columnGap?: number | string;
  rowGap?: number | string;
}): { [Key in GridProps]: string } => {
  return {
    ...baseGridStyles,
    container: css({
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      columnGap,
      rowGap,
    }),
  };
};
