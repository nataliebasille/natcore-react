import {
  faArrowAltCircleLeft as solidAltCircle,
  faArrowCircleLeft as solidCircle,
  faArrowLeft as solid,
} from "@fortawesome/free-solid-svg-icons";
import { createFontawesomeIcon } from "./+fontawesomeIcon";

const ArrowLeft = createFontawesomeIcon({
  solid,
  solidAltCircle,
  solidCircle,
});

export default ArrowLeft;
