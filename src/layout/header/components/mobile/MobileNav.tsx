import { AppBar, Toolbar, IconButton, Drawer, Box, Button, Avatar, Stack } from "@mui/material";
import { FunctionComponent, useState } from "react";
import ROUTES from "../../../../routes/routesModel";
import NavbarLink from "../NavbarLink";
import PagesIcon from "@mui/icons-material/Pages";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useLoggedIn } from "../../../../contexts/LoggedInProvider";
import { useColorMode } from "../../../../contexts/ColorModeProvider";
import { redirect, useNavigate } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface MobileNavProps {}

const MobileNav: FunctionComponent<MobileNavProps> = () => {
	const [open, setOpen] = useState(false);
	const { colorMode, toggleColorMode } = useColorMode();
	const { setLoggedIn } = useLoggedIn();
	const navigate = useNavigate();

	const { user } = useLoggedIn();
	function handleLogoutClick() {
		sessionStorage.removeItem("ent");
		setLoggedIn(false);
		navigate("/");
	}

	return (
		<Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 4, mx: 2 }}>
			<PagesIcon
				color="secondary"
				fontSize="large"
			/>

			<IconButton
				size="large"
				edge="start"
				onClick={() => setOpen(true)}
			>
				<MoreVertIcon />
			</IconButton>

			<Drawer
				anchor="top"
				open={open}
				onClose={() => setOpen(false)}
			>
				<Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: "column", height: "100%", my: 4, mx: 14, fontSize: 20, gap: 2, ml: 6 }}>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
					</Box>
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
			</Drawer>
		</Toolbar>
	);
};

export default MobileNav;
