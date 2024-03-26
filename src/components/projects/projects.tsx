import { CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import loginPage from '../../assets/log-inPage.jpg';
import portfolio from '../../assets/michellepolandotcom.jpg';
// import './projects.scss'


const Projects = () => {
	return (
		<Stack>
			<Stack spacing={5} className="content-container">
				<Typography variant="h4">PROJECTS</Typography>
				<Card className="projects-media">
					<CardMedia
						sx={{ height: 400 }}
						image={loginPage}
						title="TKFM Login Page"
					/>
					<CardContent className="media-content">
						<Stack spacing={4} direction='row' justifyContent='center' sx={{ mb: 3 }}>
							<Typography variant="body2">REACT</Typography>
							<Typography variant="body2">TYPESCRIPT</Typography>
							<Typography variant="body2">MATERIAL UI</Typography>
						</Stack>
						<Stack spacing={3} direction='row' justifyContent='center'>
							<Typography variant="body2">AWS</Typography>
							<Typography variant="body2">LAMBDA</Typography>
							<Typography variant="body2">S3</Typography>
							<Typography variant="body2">COGNITO</Typography>
							<Typography variant="body2">DYNAMODb</Typography>
						</Stack>
					</CardContent>
				</Card>
				<Card sx={{ boxShadow: '1px 1px 1px 1px #181313' }}>
					<CardMedia
						sx={{ height: 350, border: '1px solid black' }}
						image={portfolio}
						title="Porfolio Website"
					/>
					<CardContent className="media-content">
						<Stack spacing={4} direction='row' justifyContent='center'>
							<Typography variant="body2">REACT</Typography>
							<Typography variant="body2">TYPESCRIPT</Typography>
							<Typography variant="body2">MATERIAL UI</Typography>
							<Typography variant="body2">3Js</Typography>
						</Stack>
					</CardContent>
				</Card>

			</Stack>
		</Stack>
	);
};

export default Projects;