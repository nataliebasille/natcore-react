import { createFontawesomeIcon } from "./+fontawesomeIcon";
import {
	faTrash as solid,
	faTrashAlt as solidAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt as regularAlt } from "@fortawesome/free-regular-svg-icons";

const TrashcanIcon = createFontawesomeIcon({
	solid,
	solidAlt,
	regularAlt,
});

export default TrashcanIcon;
