import { AppBar, Toolbar, useTheme } from "@mui/material";
import { FunctionComponent } from "react";
import { useLoggedIn } from "../../contexts/LoggedInProvider";
import LeftSideNavBar from "./components/LeftSideNavBar";
import MobileNav from "./components/mobile/MobileNav";
import RightSideNavBar from "./components/RightSideNavBar";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = ({}) => {
	const { isLoggedIn } = useLoggedIn();
	const theme = useTheme();
	return (
		<>
			<AppBar
				position="relative"
				color="transparent"
				sx={{
					height: "5rem",
					display: () => {
						return isLoggedIn ? { lg: "flex", xs: "none" } : "none";
					},
					justifyContent: "center",
					zIndex: "50",
				}}
			>
				<Toolbar
					variant="dense"
					sx={{ display: "flex", justifyContent: { lg: "space-between", xs: "center" }, alignItems: "center", gap: 4, mx: 2 }}
				>
					<LeftSideNavBar />
					<RightSideNavBar />
				</Toolbar>
			</AppBar>
			<AppBar
				color="transparent"
				sx={{
					height: "5rem",
					display: () => {
						return isLoggedIn ? { lg: "none", xs: "flex" } : "none";
					},
					justifyContent: "center",
				}}
				position="relative"
			>
				<MobileNav />
			</AppBar>
		</>
	);
};

export default Header;
