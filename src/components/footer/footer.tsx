import { Box, Button, Stack } from "@mui/material"
import './footer.scss';
import SocialIcon from "../socialIcon";


const Footer = () => {
	return (
		<Stack className="content-container" direction="row" sx={{ mt: 45, mb: '20px !important' }}>
			<Box>
				<Button variant="text" size="medium">HOME</Button>
				<Button variant="text" size="medium">ABOUT ME</Button>
				<Button variant="text" size="medium">PROJECTs</Button>
				<Button variant="text" size="medium">CONTACT</Button>
			</Box>
		</Stack>
	)
};

export default Footer;