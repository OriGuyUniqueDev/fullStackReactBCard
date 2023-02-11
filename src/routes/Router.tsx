import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";
import LoginRegister from "../pages/loginRegister/LoginRegister";
import ROUTES from "./routesModel";

interface RouterProps {}

const Router: FunctionComponent<RouterProps> = () => {
	return (
		<Routes>
			<Route
				path={ROUTES.ROOT}
				element={<LoginRegister />}
			/>
		</Routes>
	);
};

export default Router;
