import { createFontawesomeIcon } from "./+fontawesomeIcon";

import {
  faEye as solid,
  faEyeSlash as solidSlash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEye as regular,
  faEyeSlash as regularSlash,
} from "@fortawesome/free-regular-svg-icons";

const EyeIcon = createFontawesomeIcon({
  solid,
  solidSlash,
  regular,
  regularSlash,
});

export default EyeIcon;
