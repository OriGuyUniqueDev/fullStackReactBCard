export default interface CardType {
	state?: string;
	country: string;
	city: string;
	street: string;
	houseNumber: number;
	phone: string;
	imgUrl: string;
	imgAlt: string;
	bizName: string;
	bizField: string;
	uniqueNum: number;
	likes: string[];
}
