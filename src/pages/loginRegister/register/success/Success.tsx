import { FunctionComponent, useEffect } from "react";
import JSConfetti from "js-confetti";
import { redirect, useNavigate } from "react-router-dom";

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
			navigate("/welcome");
		}, 2500);
	}, []);
	return (
		<>
			<div>{firstName + " " + lastName} Yay your registered, we'll direct you</div>
		</>
	);
};

export default Success;
