import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { FC, useState } from "react";
import ProjectImageModel from "../../types/projectImageModel";
import "./projectImage.scss";
import { motion } from "framer-motion";

type Props = {
	projectImage: ProjectImageModel;
};

const ImageModal: FC<Props> = ({ projectImage }) => {

	const [isFocused, setIsFocused] = useState(false);

	return (
		<Stack className="project-image-container">
			<ButtonBase
				sx={{
					flexDirection: 'column'
				}}
				onClick={() => setIsFocused(!isFocused)}
			>
				<Box
					component="img"
					src={projectImage.img}
					alt={projectImage.alt}
					className="project-image"
				/>
				<Box className={`project-image-caption${isFocused ? ' focused' : ''}`}>
					<Typography variant="h4">
						{projectImage.title}
					</Typography>
					<Typography variant="body1">
						{projectImage.description}
					</Typography>
				</Box>
			</ButtonBase>
		</Stack>
	)
}

export default ImageModal;
