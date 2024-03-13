import { Box, ButtonBase, Grid, Stack } from "@mui/material"
import './homepage.scss';
import MPLogo from "../mp-logo";
import AboutMe from "../aboutme";
import Projects from "../projects/projects";
import ContactForm from "../ContactForm";
// import Contact from "../contact";
import Footer from "../footer/footer";
import { forwardRef } from "react";

type Props = {
};

const HomePage = forwardRef<HTMLDivElement, Props>((props, ref) => {
	return (
		<div className="homepage">
			<Grid className="header" position="static" height="100%">
				<Stack direction="row">
					<Box sx={{ flex: '1 1 auto', m: '0 200px 0 70px', pt: '21px' }}>
						<MPLogo />
					</Box>
					<Stack direction="row">
						<ButtonBase sx={{ height: '100%' }} onClick={() => console.log('About')} className="header-text">ABOUT</ButtonBase>
						<ButtonBase sx={{ height: '100%' }} onClick={() => console.log('Projects')} className="header-text">PROJECTS</ButtonBase>
						<ButtonBase sx={{ height: '100%' }} onClick={() => console.log('Contact')} className="header-text">CONTACT</ButtonBase>
					</Stack>
				</Stack>
			</Grid>
			<Grid className="main-content" ref={ref}>
				<Grid className="components">
					<AboutMe />
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
