import { FunctionComponent, useEffect } from "react";
import JSConfetti from "js-confetti";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import ROUTES from "../../../../routes/routesModel";

interface SuccessProps {
	firstName: string | undefined;
	lastName: string | undefined;
}

const Success: FunctionComponent<SuccessProps> = ({ firstName, lastName }) => {
	const navigate = useNavigate();

	useEffect(() => {
		const jsConfetti = new JSConfetti();
		jsConfetti.addConfetti();
		setTimeout(() => {
			jsConfetti.clearCanvas();
			<Navigate
				replace
				to={ROUTES.WELCOME}
			/>;
		}, 2500);
	}, []);
	return (
		<>
			<div>{firstName + " " + lastName} Yay your registered, we'll direct you</div>
		</>
	);
};

export default Success;
