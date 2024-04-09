import { library } from "@fortawesome/fontawesome-svg-core"
import {
	faGithub,
	faLinkedin as fabLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
	faHashtag,
	faIcons,
	faTrashCan,
	faFilePdf,
	faPhone,
	faDownload,
	faGlobe,
	faCaretRight
} from "@fortawesome/free-solid-svg-icons";

const setupIcons = () => {
	library.add(
		faIcons,
		faTrashCan,
		faHashtag,
		fabLinkedin,
		faGithub,
		faFilePdf,
		faPhone,
		faDownload,
		faGlobe,
		faCaretRight
	);
};

export default setupIcons;