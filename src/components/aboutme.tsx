import { Stack, Typography } from "@mui/material";
import './aboutme.scss';
import '../styles/globals.scss';
// import resumePdf from './Resume.pdf';

const AboutMe = () => {
	return (
		<Stack className="content-container">
			<Typography className="about-me" variant="h4">ABOUT ME</Typography>
			<Typography className="text-box" variant="body1">
				As a software engineer deeply passionate about crafting efficient and user-friendly applications,
				I am constantly driven by the transformative power of technology. My journey in the tech world is
				fueled by a relentless pursuit of not only functional excellence but also the creation of beautiful user
				interfaces that elevate the user experience. I am fascinated by the rapid evolution of technology and its
				profound impact on both our professional workflows and personal lives.<br />
				<br />
				With every line of code I write and every interface I design, I aim to bridge the gap between
				complex technical solutions and intuitive, accessible applications. This dedication stems from a belief
				that technology, at its best, should simplify rather than complicate, empower rather than frustrate.
				My work is a reflection of this philosophy—a continuous effort to harmonize form with function, elegance with efficiency.<br />
				<br />
				In an era where technology reshapes our world at an unprecedented pace, I remain committed
				to staying at the forefront of innovation. Each project is an opportunity to explore new horizons,
				to challenge the status quo, and to contribute to a future where technology continues to enhance our capabilities,
				streamline our work, and enrich our lives. Through my passion for software engineering, I strive to be not just a
				participant in this dynamic landscape but a creator of impactful, enduring solutions.
			</Typography>
		</Stack>
	)
};

export default AboutMe;