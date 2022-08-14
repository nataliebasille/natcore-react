import {
  faUser as regular,
  faUserCircle as regularCircle,
} from "@fortawesome/free-regular-svg-icons";
import {
  faUser as solid,
  faUserCheck as solidCheck,
  faUserCircle as solidCircle,
  faUserLock as solidLock,
  faUserPlus as solidPlus,
  faUserTimes as solidTimes,
} from "@fortawesome/free-solid-svg-icons";
import { createFontawesomeIcon } from "./+fontawesomeIcon";

const UserIcon = createFontawesomeIcon({
  solid,
  solidCheck,
  solidCircle,
  solidLock,
  solidPlus,
  solidTimes,
  regular,
  regularCircle,
});

export default UserIcon;
