import { Box, Container } from "@mui/material";
import { FunctionComponent } from "react";
import { useLoggedIn } from "../../contexts/LoggedInProvider";

interface MainProps {
	children: JSX.Element;
}

const Main: FunctionComponent<MainProps> = ({ children }) => {
	const { isLoggedIn } = useLoggedIn();
	return <Box sx={{ height: () => (isLoggedIn ? "86vh" : "100vh"), overflowY: () => (isLoggedIn ? "scroll" : "hidden"), overflowX: "hidden" }}>{children}</Box>;
};

export default Main;
