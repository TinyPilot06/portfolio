import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import ProjectImageModel from "../../types/projectImageModel";
import ImageModal from "./imageModal";

type Props = {
	title: string,
	images: ProjectImageModel[];
};

const ProjectGallery: React.FC<Props> = ({ title, images }) => {
	return (
		<Stack spacing={2}>
			<Typography variant="h5">{title}</Typography>
			<Stack direction="column" spacing={2}>
				{images.map(i => (
					<ImageModal projectImage={i} />
				))}
			</Stack>
		</Stack>
	)
}
export default ProjectGallery;