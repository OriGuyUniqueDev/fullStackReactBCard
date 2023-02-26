export default interface UserType {
	firstName: string;
	lastName: string;
	state?: string;
	country: string;
	city: string;
	street: string;
	houseNumber: number;
	zip?: string;
	email: string;
	password: string;
	phone: string;
	imgUrl?: string;
	imgAlt?: string;
	biz: boolean;
	bizName?: string;
	bizField?: string;
	_id?: string;
	favBiz: string[];
}
