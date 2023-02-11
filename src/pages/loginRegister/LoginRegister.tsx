import { Grid } from "@mui/material";
import { FunctionComponent, useState } from "react";
import Login from "./login/Login";
import Register from "./register/Register";

interface LoginRegisterProps {}

const LoginRegister: FunctionComponent<LoginRegisterProps> = () => {
	const [loginPage, setLoginRegisterPage] = useState<boolean>(true);
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
			{loginPage ? <Login setLogin={setLoginRegisterPage} /> : <Register setLogin={setLoginRegisterPage} />}
		</Grid>
	);
};

export default LoginRegister;
