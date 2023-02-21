import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { useLoggedIn } from "../contexts/LoggedInProvider";
import AboutPage from "../pages/about/About";
import Cards from "../pages/cards/Cards";
import LoginRegister from "../pages/loginRegister/LoginRegister";
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
				path="*"
				element={<h1>404</h1>}
			/>
		</Routes>
	);
};

export default Router;
