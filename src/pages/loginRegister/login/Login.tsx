import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import * as yup from "yup";
import ToastMessage from "../../../components/ToastMessage";
import { useLoggedIn } from "../../../contexts/LoggedInProvider";
import { useToast } from "../../../contexts/ToastProvider";
import ROUTES from "../../../routes/routesModel";
import { loginUser } from "../../../services/userCRUD";

interface LoginProps {
	setLogin: Dispatch<SetStateAction<boolean>>;
}

const Login: FunctionComponent<LoginProps> = ({ setLogin }) => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [errMessage, setErrMessage] = useState<string>("");
	const navigate = useNavigate();
	const { isLoggedIn, setLoggedIn } = useLoggedIn();
	const { setMessage, setSnackOpen, setType } = useToast();

	const validationSchema = yup.object({
		email: yup.string().email("Enter a valid email").required("Email is required"),
		password: yup.string().min(8, "Password should be of minimum 8 characters length").required("Password is required"),
	});
	const formik = useFormik({
		initialValues: {
			email: "foobar@example.com",
			password: "foobar",
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			setLoading(true);
			await loginUser(values)
				?.then((res) => {
					setLoading(false);
					setLoggedIn(true);
					sessionStorage.setItem("ent", res.data.token);
					setSnackOpen((prev) => !prev);
					setType("success");
					setMessage("Welcome to Control");
					navigate(ROUTES.WELCOME);
				})

				.catch((err) => {
					setMessage(err.response.data);
					setSnackOpen((prev) => !prev);
					setType("error");
					setLoading(false);
				});
		},
	});
	const handleClickLogin = () => {
		setLogin(false);
	};
	const handleLoginAsGuest = async () => {
		await loginUser({ email: "demo1@demo.com", password: "12345678" })
			?.then((res) => {
				setLoading(false);
				setLoggedIn(true);
				sessionStorage.setItem("ent", res.data.token);
				setSnackOpen((prev) => !prev);
				setType("success");
				setMessage("Welcome to Control");
				navigate(ROUTES.WELCOME);
			})

			.catch((err) => {
				setMessage(err.response.data);
				setSnackOpen((prev) => !prev);
				setType("error");
				setLoading(false);
			});
	};

	return (
		<Grid
			item
			xs={12}
			sm={8}
			md={5}
			component="div"
			sx={{ height: "full", alignSelf: "center" }}
		>
			<Box
				sx={{
					my: 8,
					mx: 4,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 5,
				}}
			>
				<Typography
					component="h1"
					variant="h4"
					textAlign={"center"}
				>
					Welcome, Please Login
				</Typography>
				<Box
					component="form"
					onSubmit={formik.handleSubmit}
					sx={{ display: "flex", flexDirection: "column", width: "70%" }}
				>
					<TextField
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
						margin="normal"
						required
						type="email"
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						onChange={formik.handleChange}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
						margin="normal"
						required
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>

					<Link
						to={""}
						onClick={handleClickLogin}
						style={{ color: "white", textDecoration: "none", width: "100%", textAlign: "left", marginTop: 8 }}
					>
						Not Our Friend Yet? Lets sign you up !
					</Link>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						size="large"
						id="submitButton"
						sx={{ mt: 3, mb: 2, paddingBlock: 2 }}
						disabled={formik.dirty && !formik.isValid}
					>
						{isLoading ? <CircularProgress color="info" /> : "Sign In"}
					</Button>
					<Button
						type="button"
						fullWidth
						variant="outlined"
						size="small"
						id="loginAsGuest"
						sx={{ mt: 0, mb: 2, paddingBlock: 2 }}
						onClick={handleLoginAsGuest}
					>
						{isLoading ? <CircularProgress color="info" /> : "Login as Guest"}
					</Button>
				</Box>
			</Box>
		</Grid>
	);
};

export default Login;
