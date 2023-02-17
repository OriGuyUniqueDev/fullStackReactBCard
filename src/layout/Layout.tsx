import { Box } from "@mui/material";
import { FunctionComponent } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

interface LayoutProps {
	children: JSX.Element;
}

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
	return (
		<Box sx={{ display: "flex", height: "100vh", flexDirection: "column", justifyContent: "space-between" }}>
			<Header />
			<Main>{children}</Main>
			<Footer />
		</Box>
	);
};

export default Layout;
