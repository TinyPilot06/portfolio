import { Box, Button, Stack, Typography } from "@mui/material";
import resumePdf from './Resume.pdf';

const Greeting = () => {
	return (
		<Stack className="content-container" spacing={4}>
			<Stack spacing={0}>
				<Typography variant="h4" className="intro">HI, MY NAME IS MICHELLE</Typography>
				<Typography variant="h5">FULL STACK SOFTWARE ENGINEER</Typography>
			</Stack>
			<Box>
				<Button
					variant="outlined"
					size="large"
					sx={{ display: 'inline-block', height: 54, px: '25px' }}
					href={resumePdf}
					download
				>
					DOWNLOAD RESUME
				</Button>
			</Box>
		</Stack>
	)
}

export default Greeting;