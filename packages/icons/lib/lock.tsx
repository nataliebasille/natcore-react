import {
	faLock as solid,
	faLockOpen as solidOpen,
} from "@fortawesome/free-solid-svg-icons";
import { createFontawesomeIcon } from "./+fontawesomeIcon";

const LockIcon = createFontawesomeIcon({
	solid,
	solidOpen,
});

export default LockIcon;
