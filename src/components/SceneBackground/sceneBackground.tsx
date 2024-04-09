import { FC, RefObject, useEffect, useRef } from "react";
import ThreeJs from "../scene/ThreeJs";
import { Link, Outlet } from "react-router-dom";
import './sceneBackground.scss';
import { Grid, Stack, Typography } from "@mui/material";
import MPLogo from "../mp-logo";

type Props = {
	scrollRef: RefObject<HTMLDivElement>;
};

const SceneBackground: FC<Props> = ({ scrollRef }) => {
	return (
		<>
			<ThreeJs scrollRef={scrollRef} />
			<div className="scroll-area">
				<Grid container className="header" position="static">
					<Grid item width="100%">
						<Stack direction="row" sx={{ flex: '1 1 auto', pt: '21px', justifyContent: 'center' }}>
							<Link to={'/'}><MPLogo /></Link>
						</Stack>
					</Grid>
				</Grid>
				<Outlet />
			</div>
		</>
	);
};

export default SceneBackground;
