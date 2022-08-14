import {
	faTimes as solid,
	faTimesCircle as solidCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faTimesCircle as regularCircle } from "@fortawesome/free-regular-svg-icons";
import { createFontawesomeIcon } from "./+fontawesomeIcon";

const TimesIcon = createFontawesomeIcon({
	solid,
	solidCircle,
	regularCircle,
});

export default TimesIcon;
