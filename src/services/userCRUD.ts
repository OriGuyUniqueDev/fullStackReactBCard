import axios, { AxiosResponse } from "axios";
import CardType from "../interfaces/CardType";
import LoginType from "../interfaces/LoginType";
import UserType from "../interfaces/User";

export const registerUser = (data: UserType) => {
	try {
		let response = axios.post("http://127.0.0.1:5000/api/register", data);

		return response;
	} catch (error) {
		error;
	}
};
export const loginUser = (data: LoginType) => {
	try {
		let response = axios.post("http://127.0.0.1:5000/api/login", data);

		return response;
	} catch (error) {
		error;
	}
};
export const getAllCards = async () => {
	try {
		let response = await axios.get("http://127.0.0.1:5000/api/getAllCards", {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
			},
		});
		return response;
	} catch (error) {
		error;
	}
};
export const getBizCard = async (bizCardID: string | undefined) => {
	try {
		let response = await axios.get(`http://127.0.0.1:5000/api/getBizCard/${bizCardID}`, {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
			},
		});
		return response;
	} catch (error) {
		error;
	}
};
export const addBizCard = (data: CardType) => {
	try {
		let response = axios.post("http://127.0.0.1:5000/api/addBizCard", data, {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
			},
		});

		return response;
	} catch (error) {
		error;
	}
};
export const getUserBizCard = (userID: string | undefined) => {
	try {
		let response = axios.get(`http://127.0.0.1:5000/api/getUserBizCard/${userID}`, {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
			},
		});

		return response;
	} catch (error) {
		error;
	}
};
export const deleteBizCard = (cardBizID: string | undefined) => {
	try {
		let response = axios.delete(`http://127.0.0.1:5000/api/deleteBizCard/${cardBizID}`, {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
			},
		});

		return response;
	} catch (error) {
		error;
	}
};
export const updateBizCard = (cardBizID: string | undefined, dataToServer: any) => {
	try {
		let response = axios.put(`http://127.0.0.1:5000/api/updateBizCard/${cardBizID}`, dataToServer, {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
			},
		});

		return response;
	} catch (error) {
		error;
	}
};
export const updateUser = (userID: string | undefined, dataToServer: any) => {
	try {
		let response = axios.put(`http://127.0.0.1:5000/api/updateUser/${userID}`, dataToServer, {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
			},
		});

		return response;
	} catch (error) {
		error;
	}
};
