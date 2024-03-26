import { Button, IconButton, Stack, Tooltip, Typography, Zoom } from "@mui/material";
import resumePdf from './Resume.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useNavigation } from "react-router-dom";

const Greeting = () => {
	const navigate = useNavigate();

	const handleViewResumeClick = () => {
		navigate('/resume');
	};

	return (
		<Stack className="content-container" spacing={4}>
			<Stack spacing={0}>
				<Typography variant="h4" className="intro">HI, MY NAME IS MICHELLE</Typography>
				<Typography variant="h5">FULL STACK SOFTWARE ENGINEER</Typography>
			</Stack>
			<Stack direction="row" spacing={1}>
				<Button
					variant="outlined"
					size="large"
					sx={{ display: 'inline-block', height: 54, px: '25px' }}
					onClick={handleViewResumeClick}
				>
					VIEW RESUME
				</Button>
				<Tooltip TransitionComponent={Zoom} title={<Typography variant="subtitle2">Download my resume as a PDF!</Typography>}>
					<IconButton
						size="large"
						sx={{ width: 54, height: 54 }}
						href={resumePdf}
						download
					>
						<FontAwesomeIcon icon='download' style={{ fontSize: 24 }} />
					</IconButton>
				</Tooltip>
			</Stack>
		</Stack>
	)
}

export default Greeting;