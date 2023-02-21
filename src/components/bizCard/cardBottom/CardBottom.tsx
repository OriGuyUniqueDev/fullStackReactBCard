import { CardActions, Button, Badge } from "@mui/material";
import { FunctionComponent } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIcon from "@mui/icons-material/Create";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CallIcon from "@mui/icons-material/Call";

interface CardBottomProps {
	likes: number;
}

const CardBottom: FunctionComponent<CardBottomProps> = ({ likes }) => {
	return (
		<CardActions disableSpacing={false}>
			<Button>
				<DeleteForeverIcon sx={{ color: "background.text" }} />
			</Button>
			<Button>
				<CreateIcon sx={{ color: "background.text" }} />
			</Button>
			<Button>
				<CallIcon sx={{ color: "background.text" }} />
			</Button>
			<Button>
				<Badge
					badgeContent={likes}
					sx={{ color: "#ff007f" }}
					color="secondary"
				>
					<FavoriteIcon sx={{ color: "background.text" }} />
				</Badge>
			</Button>
		</CardActions>
	);
};

export default CardBottom;
