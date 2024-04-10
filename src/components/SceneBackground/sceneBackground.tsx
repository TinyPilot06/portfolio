import { FC, RefObject } from "react";
import ThreeJs from "../scene/ThreeJs";
import { Link, Outlet } from "react-router-dom";
import './sceneBackground.scss';
import { Button, Grid, Stack, useTheme } from "@mui/material";
import MPLogo from "../mp-logo";
import SocialIcon from "../socialIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resumePdf from '../Resume.pdf';

type Props = {
	scrollRef: RefObject<HTMLDivElement>;
};

const SceneBackground: FC<Props> = ({ scrollRef }) => {
	const theme = useTheme();

	return (
		<>
			<ThreeJs scrollRef={scrollRef} />
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
				<Outlet />
			</div>
		</>
	);
};

export default SceneBackground;
