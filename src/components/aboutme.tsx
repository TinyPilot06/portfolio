import { Stack, Typography } from "@mui/material";
import './aboutme.scss';
import '../styles/globals.scss';

const AboutMe = () => {
	return (
		<Stack className="content-container">
			<Typography variant="h4">ABOUT ME</Typography>
			<Typography variant="body1">
				I am blackjack dealer and I love what I do but I decided to finally take the steps towards my ultimate goal is to be a software engineer.
				I have always love computers and technology.I am fascinated by the rapid evolution of technology and its impact on both our professional and personal lives. <br />
				<br />
				I am passionate about creating efficient and user-friendly applications. In every code and interface I design, I aim to bridge the gap between technical
				and intuitive applications. In an era where technology reshapes our world at a pace thats unprecedented, I remain to be committed and dedicated at the forefront
				of innovation.<br />
				<br /> Every project is an opportunity to explore, be challenged and contribute to a future where technology continues to enhance our capabilities,
				streamline our work and enrich our lives.
				Through my passion I strive to be not just a participant but a creator of impactful solutions.
			</Typography>
		</Stack>
	)
};

export default AboutMe;