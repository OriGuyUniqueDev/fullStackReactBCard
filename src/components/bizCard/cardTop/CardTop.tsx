import { CardMedia } from "@mui/material";
import { FunctionComponent } from "react";
import ImageType from "../../../interfaces/ImageType";

interface CardTopProps {
	image: ImageType;
}

const CardTop: FunctionComponent<CardTopProps> = ({ image }) => {
	return (
		<CardMedia
			sx={{ height: 240 }}
			title={image.alt}
			image={image.url}
		/>
	);
};

export default CardTop;
