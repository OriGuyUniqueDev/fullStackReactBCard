import { TextField } from "@mui/material";
import { FormikValues } from "formik";
import { FunctionComponent } from "react";

interface FormInputFieldProps {
	label: string;
	formikName: string;
	formik: any;
	isAutoFocus?: boolean;
}

const FormInputField: FunctionComponent<FormInputFieldProps> = ({ formikName, label, formik, isAutoFocus }) => (
	<TextField
		margin="normal"
		required
		fullWidth
		type="text"
		id={formikName}
		label={label}
		name={formikName}
		autoComplete={formikName}
		autoFocus={isAutoFocus ? true : false}
		onChange={formik.handleChange}
		error={Boolean(formik.touched.formikName && formik.errors.formikName)}
		helperText={Boolean(formik.errors.formikName) && formik.errors.formikName}
		value={formik.values.formikName}
	/>
);

export default FormInputField;
