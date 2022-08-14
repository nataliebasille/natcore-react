import { createFontawesomeIcon } from "./+fontawesomeIcon";
import { faEnvelope as solid } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope as regular } from "@fortawesome/free-regular-svg-icons";

const EmailIcon = createFontawesomeIcon({
	solid,
	regular,
});

export default EmailIcon;
