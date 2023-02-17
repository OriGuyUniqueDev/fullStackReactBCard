import { AppBar, Toolbar } from "@mui/material";
import { FunctionComponent } from "react";
import { useLoggedIn } from "../../contexts/LoggedInProvider";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
	const { isLoggedIn } = useLoggedIn();
	return (
		<AppBar
			color="primary"
			position="relative"
			sx={{
				height: "5rem",
				display: () => {
					return isLoggedIn ? { md: "flex", xs: "none" } : "none";
				},
				justifyContent: "center",
			}}
		>
			<Toolbar sx={{ display: "flex", justifyContent: { md: "space-between", xs: "center" }, alignItems: "center", gap: 4, mx: 2 }}></Toolbar>
		</AppBar>
	);
};

export default Header;
