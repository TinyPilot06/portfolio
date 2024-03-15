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
		<div className="homepage">
			<Grid container className="header" position="static">
				<Grid item width="100%">
					<Stack direction="row" sx={{ flex: '1 1 auto', pt: '21px', justifyContent: 'center' }}>
						<MPLogo />
					</Stack>
					{/* <Stack direction="row">
						<ButtonBase sx={{ height: '100%' }} onClick={() => console.log('About')} className="header-text">ABOUT</ButtonBase>
						<ButtonBase sx={{ height: '100%' }} onClick={() => console.log('Projects')} className="header-text">PROJECTS</ButtonBase>
						<ButtonBase sx={{ height: '100%' }} onClick={() => console.log('Contact')} className="header-text">CONTACT</ButtonBase>
					</Stack> */}
				</Grid>
			</Grid>
			<Grid className="main-content" ref={ref}>
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
