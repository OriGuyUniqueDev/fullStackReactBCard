import axios from "axios";
import React, { useState, useContext, createContext, FC, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

type LoggedInContextType = {
	isLoggedIn: boolean;
	setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	user: { email: string; biz: boolean };
};

const LoggedInContext = createContext<LoggedInContextType | null>(null);

type LoggedInProps = {
	children: React.ReactNode;
};

export const LoggedInProvider: FC<LoggedInProps> = ({ children }) => {
	const navigate = useNavigate();
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState<LoggedInContextType["user"]>({ email: "", biz: false });

	useEffect(() => {
		axios
			.get("http://localhost:5000/api/login", {
				headers: {
					Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
				},
			})
			.then((res) => {
				setUser(res.data);
				setLoggedIn(true);
				navigate("/welcome");
			})
			.catch((err) => {
				setLoggedIn(false);
				navigate("/");
			});
	}, []);

	return <LoggedInContext.Provider value={{ isLoggedIn, setLoggedIn, user }}>{children}</LoggedInContext.Provider>;
};

export const useLoggedIn = (): LoggedInContextType => {
	const context = useContext(LoggedInContext);
	if (!context) throw new Error("useLoggedIn must be used within a LoggedInProvider");
	return context;
};

export default LoggedInProvider;
