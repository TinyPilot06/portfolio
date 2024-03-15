import { Box, Button, ButtonBase, IconButton, ListItemButton, ListItemIcon, Stack } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';

const Footer = () => {
	return (
		<Stack className="content-container" direction="row" sx={{ mt: 45, mb: '20px !important' }}>
			<Box>
				<Button variant="text" size="medium">HOME</Button>
				<Button variant="text" size="medium">ABOUT ME</Button>
				<Button variant="text" size="medium">PROJECTs</Button>
				<Button variant="text" size="medium">CONTACT</Button>
				<Stack direction="row" spacing={2}>
					<IconButton>
						<FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'linkedin' }} />
					</IconButton>
					<IconButton>
						<FontAwesomeIcon icon="trash-can" />
					</IconButton>
					<IconButton>
						<FontAwesomeIcon icon="trash-can" />
					</IconButton>
				</Stack>
			</Box>
		</Stack>
	)
};

export default Footer;