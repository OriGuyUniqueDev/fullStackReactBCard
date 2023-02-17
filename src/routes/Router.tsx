import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import { useLoggedIn } from "../contexts/LoggedInProvider";
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
		</Routes>
	);
};

export default Router;
