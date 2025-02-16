import { CardContent, CardMedia, Stack, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import loginPage from '../assets/log-inPage.jpg'
import songScreen from '../assets/songsScreen.jpg';
import songEditor from '../assets/songEditor.jpg';
import portfolio from '../assets/Portfolio.jpg';
import SocialIcon from "./socialIcon";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectGallery from "./images/projectGallery";
import ProjectImageModel from "../types/projectImageModel";


const Projects = () => {
	const projectImages: ProjectImageModel[] = [{
		img: loginPage,
		alt: 'TKFM login page',
		description: ' Music Library Management built with REACT, TYPESCRIPT, MATERIAL UI, AWS LAMBDA, S3, COGNITO, RDS (PostgreSQL) - Login page.'
	}, {
		img: songScreen,
		alt: 'Song Screen page',
		description: 'Song screen page with left navigation to access other pages. Using MUI DataGrid for managing the song library.'
	}, {
		img: songEditor,
		alt: 'Song Editor Modal',
		description: 'Song editor screen where the modal is pre-populated with the meta data of a song when it was initially added. Once the changes have been saved then it updates it from the data base.'
	}, {
		img: portfolio,
		alt: 'Portfolio Website',
		description: ' Personal Portfolio website built with React, MUI v5, TYPESCRIPT and 3JS. A single page application to promote myself, my work experience, education and resume. '
	}];

	return (

		<Stack className="content-container">
			<Typography variant="h4">PROJECTS</Typography>
			<Stack sx={{ display: 'block' }}>
				<ProjectGallery
					title="Music Library Management Web Application (Full Stack)"
					images={projectImages}
				/>
			</Stack>
		</Stack>
	);
};

export default Projects;