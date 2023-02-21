import { useState, useEffect } from "react";

interface useIsLoadedState {
	initialState: boolean;
}

export const useIsLoaded = (initialState: useIsLoadedState["initialState"]) => {
	const [isLoaded, setIsLoaded] = useState<boolean>(initialState);

	useEffect(() => {
		setIsLoaded(true);
		return () => {
			// code to run on component unmount
		};
	}, []);

	return {
		isLoaded,
		setIsLoaded,
	};
};
