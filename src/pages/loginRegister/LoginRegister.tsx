import { Grid } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { useLoggedIn } from "../../contexts/LoggedInProvider";
import Login from "./login/Login";
import Register from "./register/Register";
import { redirect, useNavigate } from "react-router-dom";

interface LoginRegisterProps {}

const LoginRegister: FunctionComponent<LoginRegisterProps> = () => {
	const [loginPage, setLoginRegisterPage] = useState<boolean>(true);
	const navigate = useNavigate();
	const { isLoggedIn } = useLoggedIn();
	useEffect(() => {
		isLoggedIn && navigate("/welcome");
	}, []);
	return (
		<Grid
			container
			sx={{ height: "100vh" }}
		>
			<Grid
				item
				xs={false}
				sm={4}
				md={7}
				sx={{
					backgroundImage: "url(https://source.unsplash.com/random/?pets,happy)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			></Grid>
			{loginPage ? <Login setLogin={setLoginRegisterPage} /> : <Register setLoginPage={setLoginRegisterPage} />}
		</Grid>
	);
};

export default LoginRegister;
