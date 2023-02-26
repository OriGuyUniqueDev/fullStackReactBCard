import axios, { AxiosResponse } from "axios";
import CardType from "../interfaces/CardType";
import LoginType from "../interfaces/LoginType";
import UserType from "../interfaces/User";

export const registerUser = (data: UserType) => {
	try {
		let response = axios.post("https://reactbizcardserverside.onrender.com/api/register", data);

		return response;
	} catch (error) {
		error;
	}
};
export const loginUser = (data: LoginType) => {
	try {
		let response = axios.post("https://reactbizcardserverside.onrender.com/api/login", data);

		return response;
	} catch (error) {
		error;
	}
};
export const getAllCards = async () => {
	try {
		let response = await axios.get("https://reactbizcardserverside.onrender.com/api/getAllCards", {
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
		let response = await axios.get(`https://reactbizcardserverside.onrender.com/api/getBizCard/${bizCardID}`, {
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
		let response = axios.post("https://reactbizcardserverside.onrender.com/api/addBizCard", data, {
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
		let response = axios.get(`https://reactbizcardserverside.onrender.com/api/getUserBizCard/${userID}`, {
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
		let response = axios.delete(`https://reactbizcardserverside.onrender.com/api/deleteBizCard/${cardBizID}`, {
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
		let response = axios.put(`https://reactbizcardserverside.onrender.com/api/updateBizCard/${cardBizID}`, dataToServer, {
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
		let response = axios.put(`https://reactbizcardserverside.onrender.com/api/updateUser/${userID}`, dataToServer, {
			headers: {
				Authorization: `Bearer ${sessionStorage.getItem("ent")}`,
			},
		});

		return response;
	} catch (error) {
		error;
	}
};
