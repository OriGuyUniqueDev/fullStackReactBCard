import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ColorModeProvider } from "./contexts/ColorModeProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ColorModeProvider>
			<App />
		</ColorModeProvider>
	</React.StrictMode>
);
