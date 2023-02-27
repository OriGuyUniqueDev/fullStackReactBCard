import { Box, Button, Chip, CircularProgress, Container, Divider, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { FunctionComponent, useState } from "react";
import * as yup from "yup";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import DiamondIcon from "@mui/icons-material/Diamond";
import FormInputField from "../../../components/FormInputField";
import CardType from "../../../interfaces/CardType";
import { addBizCard } from "../../../services/userCRUD";
import { useToast } from "../../../contexts/ToastProvider";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

interface AddCardProps {}

const AddCard: FunctionComponent<AddCardProps> = () => {
	const [bDataError, setBDataError] = useState(true);
	const [isLoading, setLoading] = useState<boolean>(false);
	const { setMessage, setSnackOpen, setType } = useToast();
	const navigate = useNavigate();

	const validationSchema = yup.object({
		state: yup.string().min(2, "State must be at least 2 characters").notRequired(),
		country: yup.string().min(2, "State must be at least 2 characters").required(),
		city: yup.string().min(2, "City must be at least 2 characters").required(),
		street: yup.string().min(2, "Street must be at least 2 characters").required(),
		houseNumber: yup.number().integer().required(),
		phone: yup.string().min(10, "Street must be at least 2 characters").required(),
		imgUrl: yup.string().min(2, "Street must be at least 2 characters").required(),
		imgAlt: yup.string().min(2, "Street must be at least 2 characters").required(),
		bizName: yup.string().min(2, "Street must be at least 2 characters").required(),
		bizField: yup.string().min(2, "Street must be at least 2 characters").required(),
	});
	const formik = useFormik({
		initialValues: {
			state: "",
			country: "",
			city: "",
			street: "",
			houseNumber: 0,
			phone: "",
			imgUrl: "",
			imgAlt: "",
			bizName: "",
			bizField: "",
		},
		validationSchema: validationSchema,
		onSubmit: async (values) => {
			setLoading(true);
			await addBizCard(values)
				?.then((res) => {
					setSnackOpen((prev) => !prev);
					setType("success");
					setMessage("You'r card has been added ");
					<Navigate
						replace
						to={ROUTES.MY_CARDS}
					/>;
				})
				.finally(() => setLoading(false))
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
		>
			<Typography
				component="h1"
				variant="h4"
				sx={{ marginBottom: 3, display: "flex", alignItems: "left", width: "100%", mt: 5, textTransform: "capitalize" }}
			>
				Great, lets add your business
			</Typography>
			<Grid
				container
				flexGrow={1}
				columns={12}
				// columnGap={5.9}
				gap={1}
				sx={{ mx: "auto" }}
			>
				<Grid
					item
					xs={12}
					sm={12}
					md={12}
				>
					<Divider sx={{ mb: 2 }}>
						<Chip
							color="info"
							icon={<BusinessCenterIcon />}
							label="Business Data"
						/>
					</Divider>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={5.9}
				>
					<TextField
						fullWidth
						id="bizName"
						name="bizName"
						label="Business Name"
						autoFocus
						value={formik.values.bizName}
						onChange={formik.handleChange}
						error={formik.touched.bizName && Boolean(formik.errors.bizName)}
						helperText={formik.touched.bizName && formik.errors.bizName}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={5.9}
				>
					<TextField
						fullWidth
						id="bizField"
						name="bizField"
						label="Business Field"
						value={formik.values.bizField}
						onChange={formik.handleChange}
						error={formik.touched.bizField && Boolean(formik.errors.bizField)}
						helperText={formik.touched.bizField && formik.errors.bizField}
					/>
				</Grid>

				<Grid
					item
					xs={12}
					sm={12}
					md={5.9}
				>
					<TextField
						fullWidth
						id="state"
						name="state"
						label="State"
						value={formik.values.state}
						onChange={formik.handleChange}
						error={formik.touched.state && Boolean(formik.errors.state)}
						helperText={formik.touched.state && formik.errors.state}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={5.9}
				>
					<TextField
						fullWidth
						id="country"
						name="country"
						label="Country"
						value={formik.values.country}
						onChange={formik.handleChange}
						error={formik.touched.country && Boolean(formik.errors.country)}
						helperText={formik.touched.country && formik.errors.country}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={5.9}
				>
					<TextField
						fullWidth
						id="city"
						name="city"
						label="City"
						value={formik.values.city}
						onChange={formik.handleChange}
						error={formik.touched.city && Boolean(formik.errors.city)}
						helperText={formik.touched.city && formik.errors.city}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={5.9}
				>
					<TextField
						fullWidth
						id="street"
						name="street"
						label="Street"
						value={formik.values.street}
						onChange={formik.handleChange}
						error={formik.touched.street && Boolean(formik.errors.street)}
						helperText={formik.touched.street && formik.errors.street}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={5.9}
				>
					<TextField
						fullWidth
						id="phone"
						name="phone"
						label="Phone"
						value={formik.values.phone}
						onChange={formik.handleChange}
						error={formik.touched.phone && Boolean(formik.errors.phone)}
						helperText={formik.touched.phone && formik.errors.phone}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={5.9}
				>
					<TextField
						fullWidth
						id="houseNumber"
						name="houseNumber"
						label="Business Number"
						value={formik.values.houseNumber}
						onChange={formik.handleChange}
						error={formik.touched.houseNumber && Boolean(formik.errors.houseNumber)}
						helperText={formik.touched.houseNumber && formik.errors.houseNumber}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={12}
				>
					<Divider sx={{ my: 2 }}>
						<Chip
							color="info"
							icon={<DiamondIcon />}
							label="Business Logo"
						/>
					</Divider>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={5.9}
				>
					<TextField
						fullWidth
						id="imgUrl"
						name="imgUrl"
						label="Logo URL"
						value={formik.values.imgUrl}
						onChange={formik.handleChange}
						error={formik.touched.imgUrl && Boolean(formik.errors.imgUrl)}
						helperText={formik.touched.imgUrl && formik.errors.imgUrl}
					/>
				</Grid>
				<Grid
					item
					xs={12}
					sm={12}
					md={5.9}
				>
					<TextField
						fullWidth
						id="imgAlt"
						name="imgAlt"
						label="Logo Text"
						value={formik.values.imgAlt}
						onChange={formik.handleChange}
						error={formik.touched.imgAlt && Boolean(formik.errors.imgAlt)}
						helperText={formik.touched.imgAlt && formik.errors.imgAlt}
					/>
				</Grid>
				<Grid
					item
					xs={6}
					sx={{ mx: "auto", mt: 3 }}
				>
					<Button
						type="submit"
						variant="contained"
						fullWidth
						size="large"
						sx={{ py: 2, display: () => (isLoading ? "none" : "flex") }}
					>
						Submit
					</Button>
					<Button
						type={"submit"}
						variant="contained"
						size="large"
						fullWidth
						id="submitButton"
						sx={{ mt: 3, mb: 2, paddingBlock: 2, display: () => (isLoading ? "flex" : "none"), gap: 3 }}
					>
						<CircularProgress color="info" /> <Typography>Adding {formik.values.bizName}</Typography>
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
};

export default AddCard;
