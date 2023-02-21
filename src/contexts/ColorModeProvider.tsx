import { useTheme } from "@mui/material";
import React, { useState, useContext, createContext, FC, SetStateAction, Dispatch, useEffect } from "react";

type ColorModeContextType = {
	colorMode: string;
	setBgColor: Dispatch<SetStateAction<string>>;
	bgcolor: string;
	toggleColorMode: Function;
};

const ColorModeContext = createContext<ColorModeContextType | null>(null);

type ColorModeProps = {
	children: React.ReactNode;
};

export const ColorModeProvider: FC<ColorModeProps> = ({ children }) => {
	const theme = useTheme();
	const [colorMode, setColorMode] = useState<"light" | "dark">("dark");
	const [bgcolor, setBgColor] = useState<string>("");
	function toggleColorMode() {
		setColorMode((prev) => (prev === "dark" ? "light" : "dark"));
	}
	useEffect(() => {
		colorMode === "dark" ? setBgColor("radial-gradient(circle, rgba(63,81,181,1) 26%, rgba(26,32,44,1) 100%)") : setBgColor("linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)");
	}, [colorMode]);
	return <ColorModeContext.Provider value={{ colorMode, toggleColorMode, bgcolor, setBgColor }}>{children}</ColorModeContext.Provider>;
};

export const useColorMode = (): ColorModeContextType => {
	const context = useContext(ColorModeContext);
	if (!context) throw new Error("useColorMode must be used within a ColorModeProvider");
	return context;
};
