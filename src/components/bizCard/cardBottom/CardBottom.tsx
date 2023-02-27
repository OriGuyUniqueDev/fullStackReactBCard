import { CardActions, Button, Badge, useTheme } from "@mui/material";
import { FunctionComponent, useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CreateIcon from "@mui/icons-material/Create";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CallIcon from "@mui/icons-material/Call";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useLoggedIn } from "../../../contexts/LoggedInProvider";
import { deleteBizCard, getUserBizCard, updateBizCard, updateUser } from "../../../services/userCRUD";
import CardType from "../../../interfaces/CardType";
import { useToast } from "../../../contexts/ToastProvider";
import UpdateCard from "../../../pages/cards/updateCard/UpdateCard";

interface CardBottomProps {
	likes: number | undefined;
	data: CardType;
	isRender: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardBottom: FunctionComponent<CardBottomProps> = ({ likes, data, isRender }) => {
	const { user, setUserUpdated } = useLoggedIn();
	const [isDeleted, setDeleted] = useState(false);
	const { setMessage, setSnackOpen, setType } = useToast();
	const [openModal, setOpenModal] = useState(false);

	const { pathname } = useLocation();
	const theme = useTheme();
	function handleDelete() {
		deleteBizCard(data._id)
			?.then((res) => {
				setType("success");
				setMessage(res.data);
				setSnackOpen((prev) => !prev);
			})
			.finally(() =>
				isRender((prev) => {
					prev;
					return !prev;
				})
			)
			.catch((err) => {
				setType("error");
				setMessage(err.response.data);
				setSnackOpen((prev) => !prev);
			});
	}

	async function handleLike() {
		let newArr = data.likes;
		let favArr = user?.favBiz;
		let uniqueSet = new Set(newArr);
		let uniqueFavSet = new Set(favArr);
		// check if the user exist to dis like
		if (uniqueSet.has(user?._id as string) && uniqueFavSet.has(data._id as string)) {
			uniqueSet.delete(user?._id as string);
			uniqueFavSet.delete(data._id as string);

			let uniqueArr = Array.from(uniqueSet);
			let uniqueFav = Array.from(uniqueFavSet);
			uniqueFav;
			let dataToServer = {
				likes: uniqueArr,
			};
			let dataToServerFav = {
				favBiz: uniqueFav,
			};
			await updateBizCard(data._id, dataToServer)
				?.then((res) => {
					setUserUpdated((prev) => !prev);
					isRender((prev) => !prev);
				})
				.catch((err) => console.log(err.response.data));
			await updateUser(user?._id, dataToServerFav)
				?.then((res) => {
					setUserUpdated((prev) => !prev);
				})
				.catch((err) => console.log(err.response.data));
			return;
		} else {
			uniqueSet.add(user?._id as string);
			uniqueFavSet.add(data._id as string);
			// newArr?.push(user?._id as string);
			// favArr?.push(data._id as string);
			let uniqueArr = Array.from(uniqueSet);
			let uniqueFav = Array.from(uniqueFavSet);
			let dataToServer = {
				likes: uniqueArr,
			};
			let dataToServerFav = {
				favBiz: uniqueFav,
			};
			await updateBizCard(data._id, dataToServer)
				?.then((res) => {
					setUserUpdated((prev) => !prev);
					isRender((prev) => !prev);
				})
				.catch((err) => console.log(err.response.data));
			await updateUser(user?._id, dataToServerFav)
				?.then((res) => {
					setUserUpdated((prev) => !prev);
				})
				.catch((err) => console.log(err.response.data));
			return;
		}
	}
	return (
		<>
			<CardActions
				disableSpacing={false}
				sx={{ justifyContent: "space-evenly", width: "100%" }}
			>
				<Button
					sx={{ display: () => (pathname === "/ourCommunity" || pathname === "/fav-cards" ? "none" : "block") }}
					onClick={handleDelete}
				>
					<DeleteForeverIcon sx={{ color: theme.palette.primary.main }} />
				</Button>
				<Button
					onClick={() => setOpenModal(true)}
					sx={{ display: () => (pathname === "/ourCommunity" || pathname === "/fav-cards" ? "none" : "block") }}
				>
					<CreateIcon sx={{ color: theme.palette.primary.main }} />
				</Button>
				<Button>
					<Link to={`tel:${user?.phone}`}>
						<CallIcon sx={{ color: theme.palette.primary.main }} />
					</Link>
				</Button>
				<Button
					onClick={handleLike}
					disabled={pathname === "/myCards" || user?._id === data.userId ? true : false}
				>
					<Badge
						badgeContent={likes}
						color="secondary"
					>
						<FavoriteIcon />
					</Badge>
				</Button>
			</CardActions>
			<UpdateCard
				open={openModal}
				setOpenModal={setOpenModal}
				card={data}
				isRender={isRender}
			/>
		</>
	);
};

export default CardBottom;
