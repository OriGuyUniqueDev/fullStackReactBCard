import { Grid, Box, Button, Typography, Stepper, Step, StepLabel, CircularProgress, TextField, Container, Dialog, DialogContent, DialogContentText, DialogTitle, Divider } from "@mui/material";
import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoggedIn } from "../../contexts/LoggedInProvider";
import { useToast } from "../../contexts/ToastProvider";
import { registerUser, updateUser } from "../../services/userCRUD";
import PersonalInfo from "../loginRegister/register/personaInfo/PersonalInfo";
import Success from "../loginRegister/register/success/Success";
import UserInfo from "../loginRegister/register/userInfo/UserInfo";
import * as yup from "yup";
import UserType from "../../interfaces/User";

interface ProfilePageProps {}

const ProfilePage: FunctionComponent<ProfilePageProps> = () => {
	const URLTOMATCH = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/);
	const [isLoading, setLoading] = useState<boolean>(false);
	const { isLoggedIn, setLoggedIn, user, setUserUpdated } = useLoggedIn();
	const navigate = useNavigate();
	const { setMessage, setSnackOpen, setType } = useToast();
	const validationSchema = yup.object({ firstName: yup.string().min(2).required(), lastName: yup.string().min(2).required(), state: yup.string().min(2), country: yup.string().min(2).required(), city: yup.string().min(2).required(), street: yup.string().min(2).required(), houseNumber: yup.number().integer().required(), zip: yup.string().min(7), phone: yup.string().min(10).required(), imgUrl: yup.string().matches(URLTOMATCH, "Enter  a valid URL") });

	const formik = useFormik({
		initialValues: {
			firstName: user?.firstName,
			lastName: user?.lastName,
			imgUrl: user?.imgUrl,
			imgAlt: user?.imgAlt,
			state: user?.state,
			country: user?.country,
			city: user?.city,
			street: user?.street,
			houseNumber: user?.houseNumber,
			zip: user?.zip || "0000000",
			phone: user?.phone,
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			setLoading(true);
			await updateUser(user?._id, values)
				?.then((res) => {
					setSnackOpen((prev) => !prev);
					setUserUpdated((prev) => !prev);
					setType("success");
					setMessage(res.data);
				})
				.catch((err) => {
					setSnackOpen((prev) => !prev);
					setType("error");
					setMessage(err.response.data);
				});
		},
	});

	return (
		<Container
			component="form"
			onSubmit={formik.handleSubmit}
			sx={{ display: "flex", flexDirection: "column" }}
		>
			<Typography
				variant="h3"
				sx={{ mt: 6, mb: 2 }}
			>
				{user?.firstName} {user?.lastName}'s Profile
			</Typography>
			<Typography
				sx={{ mb: 2 }}
				variant="h5"
			>
				This is the perfect place to update you'r user information
			</Typography>
			<Divider />
			<Grid
				container
				component="div"
				direction="row"
				justifyContent="space-between"
				columnGap={2}
				flexGrow={1}
				columns={12}
				flexWrap={"wrap"}
			>
				<Grid
					item
					xs={5.7}
					sm={5.7}
					md={5.6}
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
						sx={{ width: "100%" }}
						onChange={formik.handleChange}
						error={Boolean(formik.touched.firstName && formik.errors.firstName)}
						helperText={Boolean(formik.errors.firstName) && formik.errors.firstName}
						value={formik.values.firstName}
					/>
				</Grid>
				<Grid
					item
					xs={5.7}
					sm={5.7}
					md={5.6}
				>
					<TextField
						margin="normal"
						required
						type="text"
						id="lastName"
						label="Last Name"
						name="lastName"
						autoComplete="lastName"
						sx={{ width: "100%" }}
						onChange={formik.handleChange}
						error={Boolean(formik.touched.lastName && formik.errors.lastName)}
						helperText={Boolean(formik.errors.lastName) && formik.errors.lastName}
						value={formik.values.lastName}
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
						sx={{ width: "100%" }}
						onChange={formik.handleChange}
						error={Boolean(formik.touched.phone && formik.errors.phone)}
						helperText={Boolean(formik.errors.phone) && formik.errors.phone}
						value={formik.values.phone}
					/>
				</Grid>
				<Grid
					item
					xs={5.7}
					sm={5.7}
					md={5.6}
				>
					<TextField
						margin="normal"
						type="text"
						id="imgUrl"
						label="Image URL"
						name="imgUrl"
						autoComplete="imgUrl"
						sx={{ width: "100%" }}
						onChange={formik.handleChange}
						error={Boolean(formik.touched.imgUrl && formik.errors.imgUrl)}
						helperText={Boolean(formik.errors.imgUrl) && formik.errors.imgUrl}
						value={formik.values.imgUrl}
					/>
				</Grid>
				<Grid
					item
					xs={5.7}
					sm={5.7}
					md={5.6}
				>
					<TextField
						margin="normal"
						type="text"
						id="imgAlt"
						label="Image Text (text to show when unavailable)"
						name="imgAlt"
						autoComplete="imgAlt"
						sx={{ width: "100%" }}
						onChange={formik.handleChange}
						error={Boolean(formik.touched.imgAlt && formik.errors.imgAlt)}
						helperText={Boolean(formik.errors.imgAlt) && formik.errors.imgAlt}
						value={formik.values.imgAlt}
					/>
				</Grid>
				<Grid
					item
					xs={5.7}
					sm={5.7}
					md={5.6}
				>
					<TextField
						margin="normal"
						type="text"
						id="state"
						label="State"
						name="state"
						autoComplete="state"
						sx={{ width: "100%" }}
						onChange={formik.handleChange}
						error={Boolean(formik.touched.state && formik.errors.state)}
						helperText={Boolean(formik.errors.state) && formik.errors.state}
						value={formik.values.state}
					/>
				</Grid>
				<Grid
					item
					xs={5.7}
					sm={5.7}
					md={5.6}
				>
					<TextField
						margin="normal"
						type="text"
						id="country"
						label="Country"
						name="country"
						autoComplete="country"
						sx={{ width: "100%" }}
						required
						onChange={formik.handleChange}
						error={Boolean(formik.touched.country && formik.errors.country)}
						helperText={Boolean(formik.errors.country) && formik.errors.country}
						value={formik.values.country}
					/>
				</Grid>
				<Grid
					item
					xs={5.7}
					sm={5.7}
					md={5.6}
				>
					<TextField
						margin="normal"
						type="text"
						id="city"
						label="City"
						name="city"
						autoComplete="city"
						sx={{ width: "100%" }}
						required
						onChange={formik.handleChange}
						error={Boolean(formik.touched.city && formik.errors.city)}
						helperText={Boolean(formik.errors.city) && formik.errors.city}
						value={formik.values.city}
					/>
				</Grid>
				<Grid
					item
					xs={5.7}
					sm={5.7}
					md={5.6}
				>
					<TextField
						margin="normal"
						type="text"
						id="street"
						label="Street"
						name="street"
						autoComplete="street"
						sx={{ width: "100%" }}
						required
						onChange={formik.handleChange}
						error={Boolean(formik.touched.street && formik.errors.street)}
						helperText={Boolean(formik.errors.street) && formik.errors.street}
						value={formik.values.street}
					/>
				</Grid>
				<Grid
					item
					xs={5.7}
					sm={5.7}
					md={5.6}
				>
					<TextField
						margin="normal"
						type="text"
						id="houseNumber"
						label="House Number"
						name="houseNumber"
						autoComplete="houseNumber"
						sx={{ width: "100%" }}
						required
						onChange={formik.handleChange}
						error={Boolean(formik.touched.houseNumber && formik.errors.houseNumber)}
						helperText={formik.errors.houseNumber}
						value={formik.values.houseNumber}
					/>
				</Grid>
				<Grid
					item
					xs={5.7}
					sm={5.7}
					md={5.6}
				>
					<TextField
						margin="normal"
						type="text"
						id="zip"
						label="Zip"
						name="zip"
						autoComplete="zip"
						sx={{ width: "100%" }}
						onChange={formik.handleChange}
						error={Boolean(formik.touched.zip && formik.errors.zip)}
						helperText={Boolean(formik.errors.zip) && formik.errors.zip}
						value={formik.values.zip}
					/>
				</Grid>
			</Grid>
			<Button
				sx={{ width: 200, mt: 5, mx: "auto" }}
				variant="contained"
				type="submit"
			>
				Update User
			</Button>
		</Container>
	);
};

export default ProfilePage;
