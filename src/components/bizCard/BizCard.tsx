import { Card, CardActionArea } from "@mui/material";
import { FunctionComponent } from "react";
import CardType from "../../interfaces/CardType";
import UserType from "../../interfaces/User";
import CardBody from "./cardBody/CardBody";
import CardBottom from "./cardBottom/CardBottom";
import CardTop from "./cardTop/CardTop";

interface BizCardProps {
	data: CardType;
}

const BizCard: FunctionComponent<BizCardProps> = ({ data }) => {
	return (
		<Card sx={{ Width: 350, mx: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
			<CardActionArea>
				<CardTop image={{ url: data.imgUrl, alt: data.imgAlt }} />
				<CardBody data={data} />
			</CardActionArea>
			<CardBottom likes={data.likes.length} />
		</Card>
	);
};

export default BizCard;
