import { Box, TextField, Button, Grid, FormControlLabel, Checkbox } from "@mui/material";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

interface UserInfoProps {
	formik: any;
}

const UserInfo: FunctionComponent<UserInfoProps> = ({ formik }) => {
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
				xs={12}
				sm={12}
				md={12}
			>
				<TextField
					margin="normal"
					required
					type="email"
					id="email"
					label="Email"
					name="email"
					autoComplete="email"
					autoFocus
					sx={{ width: "100%" }}
					onChange={formik.handleChange}
					error={Boolean(formik.touched.email && formik.errors.email)}
					helperText={Boolean(formik.errors.email) && formik.errors.email}
					value={formik.values.email}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
			>
				<TextField
					margin="normal"
					required
					type="password"
					id="password"
					label="Password"
					name="password"
					autoComplete="password"
					sx={{ width: "100%" }}
					onChange={formik.handleChange}
					error={Boolean(formik.touched.password && formik.errors.password)}
					helperText={Boolean(formik.errors.password) && formik.errors.password}
					value={formik.values.password}
				/>
			</Grid>
			<Grid
				item
				xs={12}
				sm={12}
				md={12}
			>
				<TextField
					margin="normal"
					required
					type="password"
					id="confirmPassword"
					label="Confirm Password"
					name="confirmPassword"
					autoComplete="confirmPassword"
					sx={{ width: "100%" }}
					onChange={formik.handleChange}
					error={Boolean(formik.touched.confirmPassword && formik.errors.confirmPassword)}
					helperText={Boolean(formik.errors.confirmPassword) && formik.errors.confirmPassword}
					value={formik.values.confirmPassword}
				/>
			</Grid>
			<FormControlLabel
				control={<Checkbox />}
				label="Are You a Business ?"
				id="biz"
				name="biz"
				onChange={formik.handleChange}
				value={formik.values.biz}
			/>
		</Grid>
	);
};

export default UserInfo;
