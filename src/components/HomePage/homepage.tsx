import { Grid } from "@mui/material"
import './homepage.scss';
import Greeting from "../greeting"
import AboutMe from "../aboutme";
import Projects from "../projects/projects";
import ContactForm from "../ContactForm";
import { FC } from "react";
import Experience from "../experience";

type Props = {
};

const HomePage: FC<Props> = () => {
	return (
		<div className="homepage">
			<Grid container>
				<Grid item className="components" xs={12} sm={6} m={8} lg={6} xl={6}>
					<Greeting />
					<AboutMe />
					<Experience />
					<Projects />
					<ContactForm />
					{/* <Footer /> */}
				</Grid>
				<Grid item className="negative">
				</Grid>
			</Grid>
		</div>
	);
};

export default HomePage;
