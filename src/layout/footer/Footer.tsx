import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { FunctionComponent } from "react";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../../contexts/LoggedInProvider";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	const navigate = useNavigate();
	const { isLoggedIn } = useLoggedIn();

	return (
		<>
			<BottomNavigation
				showLabels
				sx={{
					position: "sticky",
					height: "4rem",
					backgroundColor: "primary",
					display: () => {
						return isLoggedIn ? { md: "flex", xs: "none" } : "none";
					},
				}}
			>
				<BottomNavigationAction
					sx={{ color: "background.text" }}
					label="About"
					value="About"
					icon={<InfoIcon color="primary" />}
					onClick={() => {
						navigate(ROUTES.ABOUT);
					}}
				></BottomNavigationAction>
				<BottomNavigationAction
					sx={{ color: "background.text" }}
					label="Favorites"
					value="Favorites"
					icon={<FavoriteIcon color="primary" />}
					onClick={() => {
						navigate(ROUTES.FAV_CARDS);
					}}
				></BottomNavigationAction>
				<BottomNavigationAction
					sx={{ color: "background.text" }}
					label="My Cards"
					value="My Cards"
					icon={<LibraryBooksIcon color="primary" />}
					onClick={() => {
						navigate(ROUTES.CARDS);
					}}
				></BottomNavigationAction>
			</BottomNavigation>
		</>
	);
};

export default Footer;
