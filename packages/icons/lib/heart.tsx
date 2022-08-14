import { createFontawesomeIcon } from "./+fontawesomeIcon";
import { faHeart as solid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regular } from "@fortawesome/free-regular-svg-icons";

const HeartIcon = createFontawesomeIcon({
	solid,
	regular,
});

export default HeartIcon;
