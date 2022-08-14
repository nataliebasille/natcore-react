import { CSSProperties, FunctionComponent } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

type IconProps<T> = {
  type: keyof T;
  color?: string;
  className?: string;
  style?: CSSProperties;
  flip?: FontAwesomeIconProps["flip"];
  rotate?: FontAwesomeIconProps["rotate"];
};

export function createFontawesomeIcon<
  T extends { [type: string]: IconDefinition }
>(icons: T): FunctionComponent<IconProps<T>> {
  return ({ type, color, className, style, rotate, flip }: IconProps<T>) => {
    const definition = icons[type];

    return (
      <FontAwesomeIcon
        icon={definition}
        color={color}
        className={className}
        style={style}
        rotate={rotate}
        flip={flip}
      />
    );
  };
}
