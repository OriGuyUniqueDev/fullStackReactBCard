import { Grid, TextField } from "@mui/material";
import { FunctionComponent } from "react";

interface PersonalInfoProps {
	formik: any;
}

const PersonalInfo: FunctionComponent<PersonalInfoProps> = ({ formik }) => {
	return (
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
	);
};

export default PersonalInfo;
