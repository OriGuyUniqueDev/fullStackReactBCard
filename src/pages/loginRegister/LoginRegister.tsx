import { Grid, Skeleton } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import { useLoggedIn } from "../../contexts/LoggedInProvider";
import Login from "./login/Login";
import Register from "./register/Register";
import { redirect, useNavigate } from "react-router-dom";

interface LoginRegisterProps {}

const LoginRegister: FunctionComponent<LoginRegisterProps> = () => {
	const [loginPage, setLoginRegisterPage] = useState<boolean>(true);
	const [backgroundLoaded, setBackgroundLoaded] = useState<boolean>(false);
	const navigate = useNavigate();
	const { isLoggedIn } = useLoggedIn();
	const styles = {
		backgroundImage: "url(https://source.unsplash.com/random/?pets,happy)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "center",
	};
	const handleBackgroundLoad = () => {
		setBackgroundLoaded(true);
	};
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
				sx={styles}
			>
				{!backgroundLoaded && (
					<Skeleton
						variant="rounded"
						animation="wave"
						sx={{ width: "100%", height: "100%" }}
					/>
				)}
				<img
					src="https://source.unsplash.com/random/?pets,happy"
					alt="happy pets"
					style={{ display: "none" }}
					onLoad={handleBackgroundLoad}
				/>
			</Grid>
			{loginPage ? <Login setLogin={setLoginRegisterPage} /> : <Register setLoginPage={setLoginRegisterPage} />}
		</Grid>
	);
};

export default LoginRegister;
