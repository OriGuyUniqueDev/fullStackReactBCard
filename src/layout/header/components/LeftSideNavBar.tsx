import { Box, Stack, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import PagesIcon from "@mui/icons-material/Pages";
import NavbarLink from "./NavbarLink";
import { useLoggedIn } from "../../../contexts/LoggedInProvider";

interface LeftSideNavBarProps {}

const LeftSideNavBar: FunctionComponent<LeftSideNavBarProps> = () => {
	const { user } = useLoggedIn();

	return (
		<Stack
			direction="row"
			spacing={3}
			alignItems="end"
		>
			<NavbarLink
				isLogo={true}
				to={ROUTES.WELCOME}
			>
				<Box sx={{ display: "flex", alignItems: "flex-end" }}>
					<PagesIcon
						style={{ alignSelf: "center" }}
						fontSize={"large"}
					/>
					<Typography
						sx={{ display: "block", textDecoration: "none" }}
						variant="h4"
						fontWeight={900}
					>
						Control
					</Typography>
				</Box>
			</NavbarLink>
			<Stack
				direction="row"
				spacing={3}
				marginLeft={4}
				fontSize={20}
			>
				<NavbarLink to={ROUTES.WELCOME}>
					<span>Home</span>
				</NavbarLink>
				<NavbarLink to={ROUTES.ABOUT}>
					<span>About</span>
				</NavbarLink>
				<NavbarLink to={ROUTES.FAV_CARDS}>
					<span>Favorites</span>
				</NavbarLink>
				<NavbarLink to={ROUTES.CARDS}>
					<span>Our Community</span>
				</NavbarLink>
				<NavbarLink
					showLink={user?.biz ? true : false}
					to={ROUTES.MY_CARDS}
				>
					<span>My Cards</span>
				</NavbarLink>
			</Stack>
		</Stack>
	);
};

export default LeftSideNavBar;
