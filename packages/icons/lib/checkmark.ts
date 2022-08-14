import {
	faCheck as solid,
	faCheckCircle as solidCircle,
	faCheckSquare as solidSquare,
} from "@fortawesome/free-solid-svg-icons";
import {
	faCheckCircle as regularCircle,
	faCheckSquare as regularSquare,
} from "@fortawesome/free-regular-svg-icons";
import { createFontawesomeIcon } from "./+fontawesomeIcon";

const CheckmarkIcon = createFontawesomeIcon({
	solid,
	solidCircle,
	solidSquare,
	regularCircle,
	regularSquare,
});

export default CheckmarkIcon;
