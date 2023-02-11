import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

interface RegisterProps {
	setLogin: Dispatch<SetStateAction<boolean>>;
}

const Register: FunctionComponent<RegisterProps> = ({ setLogin }) => {
	const validationSchema = yup.object({
		email: yup.string().email("Enter a valid email").required("Email is required"),
		password: yup.string().min(8, "Password should be of minimum 8 characters length").required("Password is required"),
		firstName: yup.string().min(2).required(),
		lastName: yup.string().min(2).required(),
		imgUrl: yup.string().min(2).required(),
		imgAlt: yup.string().min(2).required(),
		state: yup.string().min(2),
		country: yup.string().min(2).required(),
		city: yup.string().min(2).required(),
		street: yup.string().min(2).required(),
		houseNumber: yup.string().min(2).required(),
		zip: yup.number().min(7),
		biz: yup.boolean(),
		phone: yup.string().min(10).required(),
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
	const handleClickRegister = () => {
		setLogin(true);
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
					gap: 2,
				}}
			>
				<Typography
					component="h1"
					variant="h4"
					sx={{ marginBottom: 3 }}
				>
					Lets, Sign Up
				</Typography>
				<Typography
					component="h3"
					variant="h6"
				>
					Personal Info
				</Typography>
				<Grid
					container
					component="form"
					onSubmit={formik.handleSubmit}
					sx={{ width: "80%", justifyContent: "space-between" }}
					gridColumn={2}
				>
					<Grid
						item
						xs={6}
					>
						<TextField
							margin="normal"
							required
							type="text"
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
							autoFocus
						/>
					</Grid>
					<Grid
						item
						xs={6}
					>
						<TextField
							margin="normal"
							required
							type="text"
							id="lastName"
							label="Last Name"
							name="lastName"
							autoComplete="lastName"
						/>
					</Grid>
					<Grid
						item
						xs={12}
					>
						<TextField
							margin="normal"
							required
							type="text"
							id="phone"
							label="Phone"
							name="phone"
							autoComplete="phone"
						/>
					</Grid>
				</Grid>

				<Link
					to={""}
					onClick={handleClickRegister}
					style={{ color: "white", textDecoration: "none", width: "100%", textAlign: "right", marginTop: 8 }}
				>
					Already Our Friend? let's Login
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
		</Grid>
	);
};

export default Register;

{
	/* <Grid
						item
						xs={12}
					>
						<TextField
							margin="normal"
							required
							type="text"
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
							autoFocus
						/>
					</Grid>
					<Grid item>
						<TextField
							margin="normal"
							required
							type="text"
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
							autoFocus
						/>
					</Grid>
					<Grid item>
						<TextField
							margin="normal"
							required
							type="text"
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
							autoFocus
						/>
					</Grid>
					<Grid item>
						<TextField
							margin="normal"
							required
							type="text"
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
							autoFocus
						/>
					</Grid>
					<Grid item>
						<TextField
							margin="normal"
							required
							type="text"
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
							autoFocus
						/>
					</Grid>
					<Grid item>
						<TextField
							margin="normal"
							required
							type="text"
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
							autoFocus
						/>
					</Grid>
					<Grid item>
						<TextField
							margin="normal"
							required
							type="text"
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
							autoFocus
						/>
					</Grid>
					<Grid item>
						<TextField
							margin="normal"
							required
							type="text"
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
							autoFocus
						/>
					</Grid>
					<Grid item>
						<TextField
							margin="normal"
							required
							type="text"
							id="firstName"
							label="First Name"
							name="firstName"
							autoComplete="firstName"
							autoFocus
						/>
					</Grid>
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
					/> */
}
