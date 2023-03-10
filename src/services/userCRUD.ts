import axios, { AxiosResponse } from "axios";
import CardType from "../interfaces/CardType";
import LoginType from "../interfaces/LoginType";
import UserType from "../interfaces/User";

export const registerUser = (data: UserType) => {
	try {
		let response = axios.post(`${import.meta.env.VITE_URL}/api/register`, data);

		return response;
	} catch (error) {
		error;
	}
};
export const loginUser = (data: LoginType) => {
	try {
		let response = axios.post(`${import.meta.env.VITE_URL}/api/login`, data);

		return response;
	} catch (error) {
		error;
	}
};
export const getAllCards = async () => {
	try {
		let response = await axios.get(`${import.meta.env.VITE_URL}/api/getAllCards`, {
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
		let response = await axios.get(`${import.meta.env.VITE_URL}/api/getBizCard/${bizCardID}`, {
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
		let response = axios.post(`${import.meta.env.VITE_URL}/api/addBizCard`, data, {
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
		let response = axios.get(`${import.meta.env.VITE_URL}/api/getUserBizCard/${userID}`, {
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
		let response = axios.delete(`${import.meta.env.VITE_URL}/api/deleteBizCard/${cardBizID}`, {
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
		let response = axios.put(`${import.meta.env.VITE_URL}/api/updateBizCard/${cardBizID}`, dataToServer, {
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
		let response = axios.put(`${import.meta.env.VITE_URL}/api/updateUser/${userID}`, dataToServer, {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
			},
		});

		return response;
	} catch (error) {
		error;
	}
};
