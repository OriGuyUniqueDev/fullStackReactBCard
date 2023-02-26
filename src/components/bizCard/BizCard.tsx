import { Card, CardActionArea } from "@mui/material";
import { FunctionComponent } from "react";
import CardType from "../../interfaces/CardType";
import UserType from "../../interfaces/User";
import { deleteBizCard, getUserBizCard } from "../../services/userCRUD";
import CardBody from "./cardBody/CardBody";
import CardBottom from "./cardBottom/CardBottom";
import CardTop from "./cardTop/CardTop";

interface BizCardProps {
	data: CardType;
	isRender: React.Dispatch<React.SetStateAction<boolean>>;
}

const BizCard: FunctionComponent<BizCardProps> = ({ data, isRender }) => {
	return (
		<Card sx={{ Width: 350, mx: "auto", display: "flex", flexDirection: "column", alignItems: "center" }}>
			<CardActionArea>
				<CardTop image={{ url: data.imgUrl, alt: data.imgAlt }} />
				<CardBody data={data} />
			</CardActionArea>
			<CardBottom
				data={data}
				isRender={isRender}
				likes={data.likes?.length}
			/>
		</Card>
	);
};

export default BizCard;
