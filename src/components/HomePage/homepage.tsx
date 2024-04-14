import { Grid } from "@mui/material"
import './homepage.scss';
import Greeting from "../greeting"
import AboutMe from "../aboutme";
import Projects from "../projects/projects";
import ContactForm from "../ContactForm";
import { forwardRef } from "react";
import Experience from "../experience";

type Props = {
};

const HomePage = forwardRef<HTMLDivElement, Props>((props, ref) => {
	return (
		<div className="homepage" ref={ref}>
			<Grid container>
				<Grid className="components" xs={12} sm={6} m={8} lg={6} xl={6}>
					<Greeting />
					<AboutMe />
					<Experience />
					<Projects />
					<ContactForm />
					{/* <Footer /> */}
				</Grid>
				<Grid className="negative">
				</Grid>
			</Grid>
		</div>
	);
});

export default HomePage;
