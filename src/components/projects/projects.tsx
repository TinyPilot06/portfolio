import { CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import loginPage from '../../assets/log-inPage.jpg';
import portfolio from '../../assets/Portfolio.jpg';
import SocialIcon from "../socialIcon";
// import './projects.scss'


const Projects = () => {

	return (
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
						<Typography>Music Library Management Web Application (Full Stack)</Typography>
						<Stack>
							<Typography variant="body1">REACT  TYPESCRIPT  MATERIAL UI</Typography>
							<Typography variant="body1">AWS  LAMBDA  S3  COGNITO  DYNAMODB</Typography>
						</Stack>
					</Stack>
				</CardContent>
			</Card>
			<Stack>
				<Card sx={{ borderRadius: '10px', border: '1px solid black' }}>
					<CardMedia
						sx={{ height: 375 }}
						image={portfolio}
						title="Porfolio Website"
					/>
					<CardContent>
						<Stack spacing={3}>
							<Typography>Personal Porfolio Website</Typography>
							<Stack direction="row" justifyContent="space-between">
								<Typography variant="body1">REACT TYPESCRIPT MATERIAL UI THREEJS</Typography>
								<SocialIcon url="https://github.com/TinyPilot06" icon={{ prefix: 'fab', iconName: 'github' }} />
							</Stack>
						</Stack>
					</CardContent>
				</Card>
			</Stack>
		</Stack >
	);
};

export default Projects;