import { library } from "@fortawesome/fontawesome-svg-core"
import { faHashtag, faIcons, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const setupIcons = () => {
	library.add(
		faIcons,
		faTrashCan,
		faHashtag,
	)
}
export default setupIcons;