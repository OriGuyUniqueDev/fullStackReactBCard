import { Box, TextField, InputAdornment, Button, Avatar, Stack } from "@mui/material";
import { FunctionComponent } from "react";
import ROUTES from "../../../routes/routesModel";
import NavbarLink from "./NavbarLink";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useColorMode } from "../../../contexts/ColorModeProvider";
import { useLoggedIn } from "../../../contexts/LoggedInProvider";
import { Navigate, redirect, useNavigate } from "react-router-dom";

interface RightSideNavBarProps {}

const RightSideNavBar: FunctionComponent<RightSideNavBarProps> = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const navigate = useNavigate();
	const { setLoggedIn, user } = useLoggedIn();
	function handleLogoutClick() {
		sessionStorage.removeItem("ent");
		setLoggedIn(false);
		<Navigate
			replace
			to={ROUTES.ROOT}
		/>;
	}
	return (
		<Box sx={{ display: "flex", alignItems: "flex-end", gap: 2 }}>
			<Stack
				direction="row"
				spacing={3}
			>
				<Button
					variant="contained"
					color="error"
					sx={{ fontWeight: "900" }}
					onClick={handleLogoutClick}
				>
					Logout
				</Button>
				{colorMode === "dark" ? (
					<LightModeIcon
						onClick={() => toggleColorMode()}
						fontSize="large"
					/>
				) : (
					<DarkModeIcon
						onClick={() => toggleColorMode()}
						fontSize="large"
					/>
				)}
				<NavbarLink to={ROUTES.PROFILE}>
					<Avatar
						alt={user?.imgAlt}
						src={user?.imgUrl}
					/>
				</NavbarLink>
			</Stack>
		</Box>
	);
};

export default RightSideNavBar;
