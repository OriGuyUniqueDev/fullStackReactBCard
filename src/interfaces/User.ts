export default interface UserType {
	firstName: String;
	lastName: String;
	state?: String;
	country: String;
	city: String;
	street: String;
	houseNumber: Number;
	zip?: String;
	email: String;
	password: String;
	phone: String;
	imgUrl?: String;
	imgAlt?: String;
	biz: Boolean;
}
