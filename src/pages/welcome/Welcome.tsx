import axios from "axios";
import { FunctionComponent, useEffect, useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { useLoggedIn } from "../../contexts/LoggedInProvider";

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
	const { user } = useLoggedIn();

	return <div>welcome page {user.email} </div>;
};

export default Welcome;
