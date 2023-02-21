import axios, { AxiosResponse } from "axios";
import LoginType from "../interfaces/LoginType";
import UserType from "../interfaces/User";

export const registerUser = (data: UserType) => {
	try {
		let response = axios.post("http://localhost:5000/api/register", data);

		return response;
	} catch (error) {
		error;
	}
};
export const loginUser = (data: LoginType) => {
	try {
		let response = axios.post("http://localhost:5000/api/login", data);

		return response;
	} catch (error) {
		error;
	}
};
export const getAllCards = async () => {
	try {
		let response = await axios.get("http://localhost:5000/api/getAllCards", {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
			},
		});
		return response;
	} catch (error) {
		error;
	}
};
