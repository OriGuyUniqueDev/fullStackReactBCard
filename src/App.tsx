import { createTheme, CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import LoggedInProvider, { useLoggedIn } from "./contexts/LoggedInProvider";
import Layout from "./layout/Layout";
import Router from "./routes/Router";

function App() {
	const themeUse = useTheme();
	const darkTheme = createTheme({
		palette: {
			mode: "dark",
			primary: {
				main: "#7B4DFF",
			},
			secondary: {
				main: "#00B5D8",
			},
			success: {
				main: "#6F78E3",
			},
			background: {
				default: "#1A202C",
				paper: "#1A202C",
			},
		},
	});
	const lightTheme = createTheme({
		palette: {
			mode: "light",
			primary: {
				main: "#1976d2",
			},
			secondary: {
				main: "rgb(220, 0, 78)",
			},
			background: {
				default: "#F7F7F0",
				paper: "#FFFDFA",
			},
		},
	});
	return (
		<div className="App">
			<ThemeProvider theme={darkTheme}>
				<BrowserRouter>
					<LoggedInProvider>
						<>
							<CssBaseline />
							<Layout>
								<Router />
							</Layout>
						</>
					</LoggedInProvider>
				</BrowserRouter>
			</ThemeProvider>
		</div>
	);
}

export default App;
