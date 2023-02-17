import { IconButton, Snackbar, Alert } from "@mui/material";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface ToastMessageProps {
	snackOpen: boolean;
	setSnackOpen: Dispatch<SetStateAction<boolean>>;
	message: string;
}

const ToastMessage: FunctionComponent<ToastMessageProps> = ({ snackOpen, setSnackOpen, message }) => {
	const handleSnackClick = () => {
		setSnackOpen((prev) => !prev);
	};
	const handleSnackClose = (event: React.SyntheticEvent | Event, reason?: string) => {
		if (reason === "clickaway") {
			return;
		}
		setSnackOpen(false);
	};
	const action = (
		<>
			<IconButton
				size="small"
				aria-label="close"
				color="inherit"
				onClick={handleSnackClose}
			>
				<CloseIcon fontSize="small" />
			</IconButton>
		</>
	);

	return (
		<Snackbar
			open={snackOpen}
			autoHideDuration={6000}
			onClose={handleSnackClose}
			action={action}
			anchorOrigin={{ vertical: "top", horizontal: "center" }}
		>
			<Alert
				onClose={handleSnackClose}
				severity="error"
				variant="filled"
				sx={{ width: "100%", color: "white" }}
			>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default ToastMessage;
