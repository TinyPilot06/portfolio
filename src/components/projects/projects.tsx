import { CardContent, CardMedia, Stack, Typography, useTheme } from "@mui/material";
import Card from '@mui/material/Card';
import loginPage from '../../assets/log-inPage.jpg';
import portfolio from '../../assets/Portfolio.jpg';
import SocialIcon from "../socialIcon";
// import './projects.scss'


const Projects = () => {
	const theme = useTheme();

	return (
		<Stack>
			<Stack spacing={5} className="content-container">
				<Typography variant="h4">PROJECTS</Typography>
				<Card sx={{ borderRadius: '10px' }}>
					<CardMedia
						sx={{ height: 375 }}
						image={loginPage}
						title="TKFM Login Page"
					/>
					<CardContent>
						<Stack spacing={2}>
							<Typography>Music library web application login page</Typography>
							<Stack>
								<Typography variant="body2">REACT  TYPESCRIPT  MATERIAL UI</Typography>
								<Typography variant="body2">AWS  LAMBDA  S3  COGNITO  DYNAMOdb</Typography>
							</Stack>
						</Stack>
					</CardContent>
				</Card>
				<Card sx={{ borderRadius: '10px', border: '1px solid black' }}>
					<CardMedia
						sx={{ height: 375, width: 950 }}
						image={portfolio}
						title="Porfolio Website"
					/>
					<CardContent>
						<Stack spacing={3}>
							<Typography>Porfolio Website</Typography>
							<Stack direction="row" justifyContent="space-between">
								<Typography variant="body2">REACT TYPESCRIPT MATERIAL UI ThreeJS</Typography>
								<SocialIcon url="https://github.com/TinyPilot06" icon={{ prefix: 'fab', iconName: 'github' }} />
							</Stack>
						</Stack>
					</CardContent>
				</Card>

			</Stack>
		</Stack>
	);
};

export default Projects;