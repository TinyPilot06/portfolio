import { library } from "@fortawesome/fontawesome-svg-core"
import {
	faLinkedin as fabLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
	faHashtag,
	faIcons,
	faTrashCan
} from "@fortawesome/free-solid-svg-icons";

const setupIcons = () => {
	library.add(
		faIcons,
		faTrashCan,
		faHashtag,
		fabLinkedin
	);
};

export default setupIcons;