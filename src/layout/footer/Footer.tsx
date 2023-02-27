import { BottomNavigation, BottomNavigationAction, useTheme } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { FunctionComponent } from "react";
import ROUTES from "../../routes/routesModel";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useLoggedIn } from "../../contexts/LoggedInProvider";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
	const navigate = useNavigate();
	const theme = useTheme();
	const { isLoggedIn } = useLoggedIn();

	return (
		<>
			<BottomNavigation
				showLabels
				sx={{
					position: "sticky",
					height: "4rem",
					backgroundColor: "transparent",

					display: () => {
						return isLoggedIn ? "flex" : "none";
					},
				}}
			>
				<BottomNavigationAction
					sx={{ color: theme.palette.primary.contrastText }}
					label="About"
					value="About"
					icon={<InfoIcon />}
					onClick={() => {
						return (
							<Navigate
								replace
								to={ROUTES.ABOUT}
							/>
						);
					}}
				></BottomNavigationAction>
				<BottomNavigationAction
					sx={{ color: theme.palette.text.primary }}
					label="Favorites"
					value="Favorites"
					icon={<FavoriteIcon />}
					onClick={() => {
						return (
							<Navigate
								replace
								to={ROUTES.FAV_CARDS}
							/>
						);
					}}
				></BottomNavigationAction>
				<BottomNavigationAction
					sx={{ color: theme.palette.text.primary }}
					label="My Cards"
					value="My Cards"
					icon={<LibraryBooksIcon />}
					onClick={() => {
						return (
							<Navigate
								replace
								to={ROUTES.CARDS}
							/>
						);
					}}
				></BottomNavigationAction>
			</BottomNavigation>
		</>
	);
};

export default Footer;
