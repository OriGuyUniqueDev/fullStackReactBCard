import { Box, CardContent, Divider, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import CardType from "../../../interfaces/CardType";
import UserType from "../../../interfaces/User";

interface CardBodyProps {
	data: CardType;
}

const CardBody: FunctionComponent<CardBodyProps> = ({ data }) => {
	return (
		<CardContent>
			<Typography
				variant="h4"
				component="div"
			>
				{data.bizName}
			</Typography>
			<Typography
				variant="subtitle1"
				component="div"
			>
				{data.bizField}
			</Typography>
			<Divider
				variant="fullWidth"
				sx={{ my: 2 }}
			/>
			<Box sx={{ display: "flex", gap: 1 }}>
				<Typography
					variant="subtitle2"
					component="div"
				>
					Phone:
				</Typography>
				<Typography
					variant="body2"
					component="div"
				>
					{data.phone}
				</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: 1 }}>
				<Typography
					variant="subtitle2"
					component="div"
				>
					Address:
				</Typography>
				<Typography
					variant="body2"
					component="div"
				>
					{data.street}, {data.houseNumber}, {data.city}, {data.country}
				</Typography>
			</Box>
			<Box sx={{ display: "flex", gap: 1 }}>
				<Typography
					variant="subtitle2"
					component="div"
				>
					Card Number:
				</Typography>
				<Typography
					variant="body2"
					component="div"
				>
					{data?.uniqueNum}
				</Typography>
			</Box>
		</CardContent>
	);
};

export default CardBody;
