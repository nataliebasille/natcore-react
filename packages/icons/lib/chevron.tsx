import {
  faChevronUp as solidUp,
  faChevronRight as solidRight,
  faChevronLeft as solidLeft,
  faChevronDown as solidDown,
  faChevronCircleUp as solidCircleUp,
  faChevronCircleRight as solidCircleRight,
  faChevronCircleLeft as solidCircleLeft,
  faChevronCircleDown as solidCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import { createFontawesomeIcon } from "./+fontawesomeIcon";

const ChevronIcon = createFontawesomeIcon({
  solidUp,
  solidRight,
  solidLeft,
  solidDown,
  solidCircleUp,
  solidCircleRight,
  solidCircleLeft,
  solidCircleDown,
});

export default ChevronIcon;
