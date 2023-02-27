import { createTheme, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { useState } from "react";
import { BrowserRouter, createBrowserRouter, HashRouter, RouterProvider } from "react-router-dom";
import { ColorModeProvider, useColorMode } from "./contexts/ColorModeProvider";
import LoggedInProvider, { useLoggedIn } from "./contexts/LoggedInProvider";
import { ToastProvider } from "./contexts/ToastProvider";
import Layout from "./layout/Layout";
import Router from "./routes/Router";

function App() {
	const themeUse = useTheme();
	themeUse.palette.mode = "dark";
	const { colorMode, bgcolor } = useColorMode();

	const darkTheme = createTheme({
		palette: {
			mode: "dark",
			primary: {
				main: "#3F51B5",
				contrastText: "#FFFFFF",
			},
			secondary: {
				main: "#E91E63",
				contrastText: "#FFFFFF",
			},
			error: {
				main: "#F44336",
				contrastText: "#FFFFFF",
			},
			warning: {
				main: "#FFC107",
				contrastText: "#000000",
			},
			info: {
				main: "#2196F3",
				contrastText: "#FFFFFF",
			},
			success: {
				main: "#4CAF50",
				contrastText: "#FFFFFF",
			},
			background: {
				default: "#1A202C",
				paper: "#1A202C",
			},
			text: {
				primary: "#FFFFFF",
			},
		},
	});
	const lightTheme = createTheme({
		palette: {
			mode: "light",
			primary: {
				main: "#3F51B5",
				contrastText: "#FFFFFF",
			},
			secondary: {
				main: "#E91E63",
				contrastText: "#FFFFFF",
			},
			error: {
				main: "#F44336",
				contrastText: "#FFFFFF",
			},
			warning: {
				main: "#FFC107",
				contrastText: "#000000",
			},
			info: {
				main: "#2196F3",
				contrastText: "#FFFFFF",
			},
			success: {
				main: "#4CAF50",
				contrastText: "#FFFFFF",
			},
			background: {
				default: "#f5f5e8",
				paper: "#fff",
			},
			text: {
				primary: "#333333",
				// secondary: "#FFFFFF",
			},
		},
	});

	return (
		<div
			className="App"
			// style={{ background: bgcolor }}
		>
			<ToastProvider>
				<ThemeProvider theme={colorMode === "dark" ? darkTheme : lightTheme}>
					<BrowserRouter basename="/">
						<LoggedInProvider>
							<>
								<CssBaseline />
								<Layout>
									<Router />
								</Layout>
							</>
						</LoggedInProvider>
					</BrowserRouter>
					{/* <BrowserRouter>
						
					</BrowserRouter> */}
				</ThemeProvider>
			</ToastProvider>
		</div>
	);
}

export default App;
