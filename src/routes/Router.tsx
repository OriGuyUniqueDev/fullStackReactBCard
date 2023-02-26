import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { useLoggedIn } from "../contexts/LoggedInProvider";
import AboutPage from "../pages/about/About";
import AddCard from "../pages/cards/addCard/AddCard";
import Cards from "../pages/cards/Cards";
import FavCards from "../pages/favCards/FavCards";
import LoginRegister from "../pages/loginRegister/LoginRegister";
import MyCards from "../pages/myCards/MyCards";
import ProfilePage from "../pages/profilePage/ProfilePage";
import Welcome from "../pages/welcome/Welcome";
import ROUTES from "./routesModel";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
	return (
		<Routes>
			<Route
				path={ROUTES.ROOT}
				element={<LoginRegister />}
			/>
			<Route
				path={ROUTES.WELCOME}
				element={<Welcome />}
			/>
			<Route
				path={ROUTES.CARDS}
				element={<Cards />}
			/>

			<Route
				path={ROUTES.ABOUT}
				element={<AboutPage />}
			/>

			<Route
				path={ROUTES.ADD_CARD}
				element={<AddCard />}
			/>
			<Route
				path={ROUTES.MY_CARDS}
				element={<MyCards />}
			/>
			<Route
				path={ROUTES.FAV_CARDS}
				element={<FavCards />}
			/>
			<Route
				path={ROUTES.PROFILE}
				element={<ProfilePage />}
			/>
			<Route
				path="*"
				element={<h1>404</h1>}
			/>
		</Routes>
	);
};

export default Router;
