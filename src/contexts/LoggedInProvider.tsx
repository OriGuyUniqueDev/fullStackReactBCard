import axios from "axios";
import React, { useState, useContext, createContext, FC, useEffect } from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { useIsLoaded } from "../hooks/useIsLoaded";
import CardType from "../interfaces/CardType";
import UserType from "../interfaces/User";
import ROUTES from "../routes/routesModel";
import { getAllCards } from "../services/userCRUD";

type LoggedInContextType = {
	isLoggedIn: boolean;
	// isLoaded: boolean;
	// setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
	setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	user: UserType | null;
	cards: CardType | null;
	setUserUpdated: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoggedInContext = createContext<LoggedInContextType | null>(null);

type LoggedInProps = {
	children: React.ReactNode;
};

export const LoggedInProvider: FC<LoggedInProps> = ({ children }) => {
	const navigate = useNavigate();
	const [isLoggedIn, setLoggedIn] = useState(false);
	const [isUserUpdated, setUserUpdated] = useState(false);
	const [user, setUser] = useState<LoggedInContextType["user"]>(null);
	const [cards, setCards] = useState<LoggedInContextType["cards"]>(null);
	const { isLoaded, setIsLoaded } = useIsLoaded(true);

	const token = sessionStorage.getItem("ent");

	useEffect(() => {
		if (token) {
			axios
				.get("http://localhost:5000/api/login", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				.then((res) => {
					setUser(res.data);
					navigate(ROUTES.WELCOME);
					setLoggedIn(true);
				})
				.catch((err) => {
					console.log(err);
				});
		} else {
			setLoggedIn(false);
			navigate(ROUTES.ROOT);
		}
	}, [token]);
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
					res.data;
				})
				.catch((err) => {
					console.log(err);
				});
	}, [isUserUpdated]);

	return <LoggedInContext.Provider value={{ isLoggedIn, setLoggedIn, user, setUserUpdated, cards }}>{children}</LoggedInContext.Provider>;
};

export const useLoggedIn = (): LoggedInContextType => {
	const context = useContext(LoggedInContext);
	if (!context) throw new Error("useLoggedIn must be used within a LoggedInProvider");
	return context;
};

export default LoggedInProvider;
