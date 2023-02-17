import axios from "axios";
import { FunctionComponent } from "react";
import { useLoggedIn } from "../../contexts/LoggedInProvider";

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
	const { user } = useLoggedIn();

	return <div>welcome page {user.email} </div>;
};

export default Welcome;
