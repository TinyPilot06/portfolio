import { Stack, Typography } from "@mui/material";
import './aboutme.scss';
import '../styles/globals.scss';

const AboutMe = () => {
	return (
		<Stack className="content-container">
			<Typography variant="h4">ABOUT ME</Typography>
			<Typography variant="body1">
				I have been a blackjack dealer for many years, but I decided to finally take the steps towards my ultimate goal to be a software engineer.
				I have always loved computers and technology. I am fascinated by the rapid evolution of technology and its impact on our professional and personal lives. <br />
				<br />
				I am passionate about creating efficient and user-friendly applications. In all code and every interface I design, I aim to bridge the gap between technical
				and intuitive applications. In an era where technology reshapes our world at a pace that's unprecedented, I want to spend my career on the bleeding edge of innovation.<br />
				<br /> Every project is an opportunity to explore, be challenged, and contribute to a future where technology continues to enhance our capabilities,
				streamline our work, and enrich our lives.
				Through my passion I strive to be not just a participant but a creator of impactful solutions.
			</Typography>
		</Stack>
	)
};

export default AboutMe;