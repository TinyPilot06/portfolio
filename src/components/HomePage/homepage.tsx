import { Grid, Stack } from "@mui/material"
import './homepage.scss';
import MPLogo from "../mp-logo";
import Greeting from "../greeting"
import AboutMe from "../aboutme";
import Projects from "../projects/projects";
import ContactForm from "../ContactForm";
import Footer from "../footer/footer";
import { forwardRef } from "react";
import Experience from "../experience";

type Props = {
};

const HomePage = forwardRef<HTMLDivElement, Props>((props, ref) => {
	return (
		<div className="homepage" ref={ref}>
			<Grid className="main-content">
				<Grid className="components">
					<Greeting />
					<AboutMe />
					<Experience />
					<Projects />
					<ContactForm />
					<Footer />
				</Grid>
				<Grid className="negative">
				</Grid>
			</Grid>
		</div>
	);
});

export default HomePage;
