import { FC } from "react";
import ThreeJs from "../scene/ThreeJs";
import { Link, Outlet } from "react-router-dom";
import './sceneBackground.scss';
import { Box, Button, Grid, Stack, } from "@mui/material";
import MPLogo from "../mp-logo";
import SocialIcon from "../socialIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resumePdf from '../../assets/MichellePolanResume.pdf';
import { useScroll } from "../../contexts/scrollContext";

type Props = {
};

const SceneBackground: FC<Props> = () => {
	const scroller = useScroll();

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		const scrollableDiv = event.currentTarget;
		const scrollTop = scrollableDiv.scrollTop;
		const scrollHeight = scrollableDiv.scrollHeight - scrollableDiv.clientHeight;
		const scrollPercent = scrollTop / scrollHeight;

		// Update camera based on scrollPercent
		// Pass this to your ThreeJS scene via context or directly if re-rendering occurs here
		scroller.updateScrollPercent(scrollPercent);
	};

	return (
		<>
			<ThreeJs />
			<div className="scroll-area">
				<Grid container className="header" position="static">
					<Grid item width="100%">
						<Stack direction="row" sx={{ flex: '1 1 auto', pt: '21px', px: 4, justifyContent: 'space-between' }}>
							<Link to={'/'}><MPLogo /></Link>
							<Stack direction="row" spacing={2}>
								<SocialIcon url="https://www.linkedin.com/in/michelle-polan/" icon={{ prefix: 'fab', iconName: 'linkedin' }} />
								<SocialIcon url="https://github.com/TinyPilot06" icon={{ prefix: 'fab', iconName: 'github' }} />
								<Button
									variant="outlined"
									component="a"
									href={resumePdf}
									sx={{ height: 40, px: 2.5 }}
									startIcon={
										<FontAwesomeIcon
											icon="download"
											style={{ fontSize: 16 }}
										/>
									}
									download
								>
									Download Résumé
								</Button>
							</Stack>
						</Stack>
					</Grid>
				</Grid>
				<Box sx={{ height: '100%', overflowY: 'auto' }} onScroll={handleScroll}>
					<Outlet />
				</Box>
			</div>
		</>
	);
};

export default SceneBackground;
