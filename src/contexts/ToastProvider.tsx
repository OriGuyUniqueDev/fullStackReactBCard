import { Alert, AlertColor, IconButton, Snackbar } from "@mui/material";
import React, { useState, useContext, createContext, FC } from "react";
import CloseIcon from "@mui/icons-material/Close";

type ToastContextType = {
	setMessage: React.Dispatch<string>;
	setSnackOpen: React.Dispatch<React.SetStateAction<boolean>>;
	setType: React.Dispatch<AlertColor>;
};

const ToastContext = createContext<ToastContextType | null>(null);

type ToastProps = {
	children: React.ReactNode;
};

export const ToastProvider: FC<ToastProps> = ({ children }) => {
	const [snackOpen, setSnackOpen] = useState<boolean>(false);
	const [message, setMessage] = useState<string>("");
	const [type, setType] = useState<AlertColor>("success");
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
		<ToastContext.Provider value={{ setSnackOpen, setMessage, setType }}>
			<>
				<Snackbar
					open={snackOpen}
					autoHideDuration={4000}
					onClose={handleSnackClose}
					action={action}
					anchorOrigin={{ vertical: "top", horizontal: "center" }}
				>
					<Alert
						onClose={handleSnackClose}
						severity={type}
						variant="filled"
						sx={{ width: "100%", color: "white" }}
					>
						{message}
					</Alert>
				</Snackbar>
				{children}
			</>
		</ToastContext.Provider>
	);
};

export const useToast = (): ToastContextType => {
	const context = useContext(ToastContext);
	if (!context) throw new Error("useToast must be used within a ToastProvider");
	return context;
};
