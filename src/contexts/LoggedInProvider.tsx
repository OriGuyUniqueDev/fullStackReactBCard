import axios from "axios";
import React, { useState, useContext, createContext, FC, useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import UserType from "../interfaces/User";

type LoggedInContextType = {
	isLoggedIn: boolean;
	setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	user: UserType | null;
};

const LoggedInContext = createContext<LoggedInContextType | null>(null);

type LoggedInProps = {
	children: React.ReactNode;
};

export const LoggedInProvider: FC<LoggedInProps> = ({ children }) => {
	const navigate = useNavigate();
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [user, setUser] = useState<LoggedInContextType["user"]>(null);
	const token = sessionStorage.getItem("ent");

	useEffect(() => {
		if (token)
			axios
				.get("http://localhost:5000/api/login", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => {
					setUser(res.data);
					setLoggedIn(true);
				})
				.finally(() => navigate("/welcome"))
				.catch((err) => {
					setLoggedIn(false);
					navigate("/");
				});

		setLoggedIn(false);
		navigate("/");
	}, [token]);

	return <LoggedInContext.Provider value={{ isLoggedIn, setLoggedIn, user }}>{children}</LoggedInContext.Provider>;
};

export const useLoggedIn = (): LoggedInContextType => {
	const context = useContext(LoggedInContext);
	if (!context) throw new Error("useLoggedIn must be used within a LoggedInProvider");
	return context;
};

export default LoggedInProvider;
