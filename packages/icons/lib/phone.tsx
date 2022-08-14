import { createFontawesomeIcon } from "./+fontawesomeIcon";

import {
  faPhone as solid,
  faPhoneAlt as solidAlt,
  faPhoneVolume as solidVolume,
  faPhoneSquare as solidSquare,
  faPhoneSquareAlt as solidSquareAlt,
} from "@fortawesome/free-solid-svg-icons";

const PhoneIcon = createFontawesomeIcon({
  solid,
  solidAlt,
  solidVolume,
  solidSquare,
  solidSquareAlt,
});

export default PhoneIcon;
