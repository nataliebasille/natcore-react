import { createFontawesomeIcon } from "./+fontawesomeIcon";
import {
  faDotCircle as solidDot,
  faCircle as solid,
} from "@fortawesome/free-solid-svg-icons";
import {
  faDotCircle as regularDot,
  faCircle as regular,
} from "@fortawesome/free-regular-svg-icons";

const CircleIcon = createFontawesomeIcon({
  solid,
  regular,
  solidDot,
  regularDot,
});

export default CircleIcon;
