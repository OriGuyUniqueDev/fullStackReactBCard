import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useFormik } from "formik";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

interface LoginProps {
	setLogin: Dispatch<SetStateAction<boolean>>;
}

const Login: FunctionComponent<LoginProps> = ({ setLogin }) => {
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
		onSubmit: (values) => {
			console.log(values);
		},
	});
	const handleClickLogin = () => {
		setLogin(false);
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
						style={{ color: "white", textDecoration: "none", width: "100%", textAlign: "right", marginTop: 8 }}
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
						Sign In
					</Button>
				</Box>
			</Box>
		</Grid>
	);
};

export default Login;
