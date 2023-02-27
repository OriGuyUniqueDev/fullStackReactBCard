import { Box, Typography, Button, Grid, Stepper, Step, StepLabel, CircularProgress } from "@mui/material";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import PersonalInfo from "./personaInfo/PersonalInfo";
import UserInfo from "./userInfo/UserInfo";
import { registerUser } from "../../../services/userCRUD";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Success from "./success/Success";
import { useLoggedIn } from "../../../contexts/LoggedInProvider";
import { redirect, useNavigate } from "react-router-dom";
import { useToast } from "../../../contexts/ToastProvider";

interface RegisterProps {
	setLoginPage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register: FunctionComponent<RegisterProps> = ({ setLoginPage }) => {
	const [activeStep, setActiveStep] = useState(0);
	const [isLoading, setLoading] = useState<boolean>(false);
	const { isLoggedIn, setLoggedIn } = useLoggedIn();
	const navigate = useNavigate();
	const { setMessage, setSnackOpen, setType } = useToast();
	const handleBack = () => {
		setLoginPage(true);
	};
	const handleBackStep = () => {
		setActiveStep((prev) => prev - 1);
	};

	const URLTOMATCH = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);

	const validationSchemaArr = [
		yup.object({ firstName: yup.string().min(2).required(), lastName: yup.string().min(2).required(), state: yup.string().min(2), country: yup.string().min(2).required(), city: yup.string().min(2).required(), street: yup.string().min(2).required(), houseNumber: yup.number().integer().required(), zip: yup.string().min(7), phone: yup.string().min(10).required(), imgUrl: yup.string().matches(URLTOMATCH, "Enter  a valid URL") }),
		yup.object({
			email: yup.string().email("Enter a valid email").required("Email is required"),
			password: yup.string().min(8, "Password should be of minimum 8 characters length").required("Password is required"),
			confirmPassword: yup
				.string()
				.oneOf([yup.ref("password")], "Password should be the same")
				.min(8, "Password should be of minimum 8 characters length")
				.required("Confirm Password is required"),
			biz: yup.boolean(),
		}),
	];

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			confirmPassword: "",
			firstName: "",
			lastName: "",
			imgUrl: "",
			imgAlt: "",
			state: "",
			country: "",
			city: "",
			street: "",
			houseNumber: 0,
			zip: "",
			biz: false,
			phone: "",
		},
		validationSchema: validationSchemaArr[activeStep],
		onSubmit: async (values) => {
			values;

			if (activeStep === steps.length - 1) {
				if (values.password === values.confirmPassword) {
					const { confirmPassword, ...dataToServer } = values;
					setLoading(true);
					await registerUser(dataToServer)
						?.then((res) => {
							sessionStorage.setItem("ent", res.data.token);
							setLoggedIn(true);
							setActiveStep((prevStep) => prevStep + 1);
							setSnackOpen((prev) => !prev);
							setType("success");
							setMessage("Welcome to Control, You'r Register We'll Direct you");
						})
						.catch((err) => {
							setSnackOpen((prev) => !prev);
							setType("error");
							setMessage(err.response.data);
						});
				}
			} else {
				setActiveStep((prevStep) => prevStep + 1);
			}
			setLoading(false);
		},
	});
	const handleClickRegister = () => {
		setLoggedIn(true);
	};
	const steps = ["Personal Info", "User Info"];
	const formContent = (step: number) => {
		switch (step) {
			case 0:
				return <PersonalInfo formik={formik} />;
			case 1:
				return <UserInfo formik={formik} />;
			default:
				return (
					<Success
						firstName={formik.values.firstName}
						lastName={formik.values.lastName}
					/>
				);
		}
	};

	return (
		<Grid
			item
			xs={12}
			sm={8}
			md={5}
			component="div"
			sx={{ position: "relative", width: "70%", alignSelf: "center", flexGrow: 1 }}
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
				<Button
					onClick={handleBack}
					sx={{
						marginRight: "auto",
						color: "white",
						display: () => {
							return activeStep === 2 ? "none" : "block";
						},
					}}
				>
					<ArrowBackIcon />
				</Button>

				<Typography
					component="h1"
					variant="h4"
					sx={{ marginBottom: 3, display: "flex", alignItems: "center", width: "100%", justifyContent: "center" }}
				>
					Lets, Sign Up
				</Typography>
				<Stepper
					activeStep={activeStep}
					alternativeLabel
				>
					{steps.map((label, index) => (
						<Step key={index}>
							<StepLabel>{label}</StepLabel>
						</Step>
					))}
				</Stepper>
				<Grid
					component="form"
					onSubmit={formik.handleSubmit}
					noValidate
				>
					{formContent(activeStep)}
					<Box
						display={activeStep === 2 ? "none" : "flex"}
						sx={{ justifyContent: "center", gap: 2 }}
					>
						<Button
							type="button"
							variant="contained"
							size="large"
							id="submitButton"
							sx={{ mt: 3, mb: 2, paddingBlock: 2 }}
							disabled={activeStep === 0}
							onClick={handleBackStep}
						>
							Back
						</Button>
						<Button
							type={"submit"}
							variant="contained"
							size="large"
							id="submitButton"
							sx={{ mt: 3, mb: 2, paddingBlock: 2, display: () => (isLoading ? "none" : "block") }}
						>
							{activeStep === 1 ? "Submit" : "Continue"}
						</Button>
						<Button
							type={"submit"}
							variant="contained"
							size="large"
							id="submitButton"
							sx={{ mt: 3, mb: 2, paddingBlock: 2, display: () => (isLoading ? "flex" : "none"), gap: 3 }}
						>
							<CircularProgress color="info" /> <Typography>Adding {formik.values.firstName + " " + formik.values.lastName}</Typography>
						</Button>
					</Box>
				</Grid>
			</Box>
		</Grid>
	);
};

export default Register;
