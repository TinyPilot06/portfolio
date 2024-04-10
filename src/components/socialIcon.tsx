import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";

interface SocialIconProps {
	url: string;
	icon: IconProp;
}

const SocialIcon: React.FC<SocialIconProps> = ({ url, icon }) => {
	return (
		<IconButton sx={{ width: 42, height: 42 }} onClick={() => window.open(url, '_blank')}>
			<FontAwesomeIcon icon={icon} />
		</IconButton>
	)
};
export default SocialIcon;