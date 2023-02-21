import { CodeSharp } from "@mui/icons-material";
import { Link, useTheme } from "@mui/material";
import { FunctionComponent } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { css } from "@emotion/react";
import { useLoggedIn } from "../../../contexts/LoggedInProvider";

interface NavbarLinkProps {
	to: string;
	children: JSX.Element;
	isLogo?: boolean | undefined;
	showLink?: boolean | undefined;
}

const NavbarLink: FunctionComponent<NavbarLinkProps> = ({ to, children, isLogo = false, showLink = true }) => {
	const theme = useTheme();
	const location = useLocation();
	const isActive = location.pathname === to;

	let activeStyle = {
		textDecoration: "underline",
		// color: theme.palette.primary.contrastText,
	};
	return (
		<NavLink
			className="active"
			style={{ color: theme.palette.text.primary, textDecoration: isLogo ? "none" : "", display: showLink ? "block" : "none", ...(isActive && !isLogo ? activeStyle : {}) }}
			to={to}
		>
			{children}
		</NavLink>
	);
};

export default NavbarLink;
