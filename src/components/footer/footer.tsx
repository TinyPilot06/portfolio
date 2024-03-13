import { Button, ButtonBase, ListItemButton, ListItemIcon, Stack } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.scss';



const Footer = () => {
	return (
		<Stack className="footer-box" direction="row">
			<Stack direction="row" className="footer-nav">
				<Button>HOME</Button>
				<Button>ABOUT ME</Button>
				<Button>PROJECTs</Button>
				<Button>CONTACT</Button>
			</Stack>
			<Stack direction="row" className="footer-social">
				<ListItemButton>
					<ListItemIcon>
						<FontAwesomeIcon icon="trash-can" />
					</ListItemIcon>
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<FontAwesomeIcon icon="trash-can" />
					</ListItemIcon>
				</ListItemButton>
				<ListItemButton>
					<ListItemIcon>
						<FontAwesomeIcon icon="trash-can" />
					</ListItemIcon>
				</ListItemButton>

			</Stack>
		</Stack >
	)
};
export default Footer;