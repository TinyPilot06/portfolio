import { Box, Grid, Stack, Typography } from "@mui/material"
import MPLogo from "./mp-logo"


const Resume = () => {

	return (
		<Stack>
			<Box>
				<MPLogo />
				<Typography>FULL STACK SOFTWARE DEVELOPER</Typography>
			</Box>
			<Stack>
				<Stack>OBJECTIVE</Stack>
				<Stack>TECHNICAL SKILLS</Stack>
				<Stack>PROJECTS</Stack>
				<Stack>CERTIFICATION AND COURSES</Stack>
				<Stack>PROFESSIONAL EXPERIENCE</Stack>
				<Stack>SOFT SKILLS</Stack>
				<Stack>ACTIVITIES AND INTERESTS</Stack>
			</Stack>
		</Stack>
	)
}