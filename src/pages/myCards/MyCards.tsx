import { Typography, Fade, Grid, useTheme, Box, CircularProgress, Divider, Button, Zoom, SpeedDial, Avatar } from "@mui/material";
import { Container } from "@mui/system";
import { FunctionComponent, useEffect, useState } from "react";
import BizCard from "../../components/bizCard/BizCard";
import { useLoggedIn } from "../../contexts/LoggedInProvider";
import { useToast } from "../../contexts/ToastProvider";
import { useIsLoaded } from "../../hooks/useIsLoaded";
import CardType from "../../interfaces/CardType";
import { getUserBizCard } from "../../services/userCRUD";
import AddIcon from "@mui/icons-material/Add";
import { Link, NavLink } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import NavbarLink from "../../layout/header/components/NavbarLink";
import FavoriteIcon from "@mui/icons-material/Favorite";
interface MyCardsProps {}

const MyCards: FunctionComponent<MyCardsProps> = () => {
	const { user } = useLoggedIn();
	const [card, setCard] = useState<CardType[] | never[]>([]);
	const [render, setRender] = useState<boolean>(false);
	const [isLoaded, setIsLoaded] = useState(false);

	const theme = useTheme();

	useEffect(() => {
		setIsLoaded(true);
		getUserBizCard(user?._id)
			?.then((res) => {
				setCard(res.data);
			})
			.finally(() => setIsLoaded(false))
			.catch((err) => {
				setCard([]);
				console.log(err.response.data);
			});
	}, [render]);
	const actions = [
		{
			icon: (
				<NavbarLink to={ROUTES.PROFILE}>
					<Avatar
						alt={user?.imgAlt}
						src={user?.imgUrl}
					/>
				</NavbarLink>
			),
			name: `${user?.firstName}'s Profile`,
		},
		{
			icon: (
				<NavbarLink to={ROUTES.FAV_CARDS}>
					<FavoriteIcon />
				</NavbarLink>
			),
			name: `${user?.firstName}'s Favorites`,
		},
		{
			icon: (
				<NavbarLink to={ROUTES.ADD_CARD}>
					<AddIcon />
				</NavbarLink>
			),
			name: "Add Business",
		},
	];
	return (
		<>
			<Container sx={{ position: "relative" }}>
				<Typography
					variant="h3"
					sx={{ mt: 6, mb: 2 }}
				>
					Business Card Management Made Easy
				</Typography>
				<Typography
					sx={{ mb: 2 }}
					variant="h5"
				>
					Manage your business cards here. Add, edit, or delete cards as needed.
				</Typography>

				<Divider />
				<Box sx={{ display: "flex", flexDirection: "column" }}>
					<CircularProgress
						sx={{ mx: "auto", mt: 5, display: () => (isLoaded ? "block" : "none") }}
						color="warning"
					/>

					<Grid
						spacing={3}
						marginTop={2}
						container
					>
						{card.length === 0 ? (
							<Zoom
								in={true}
								style={{ transitionDelay: "250ms" }}
								easing={{ enter: theme.transitions.easing.easeInOut }}
								timeout={{ enter: 600 }}
							>
								<Typography
									mx="auto"
									mt={5}
									variant="h4"
								>
									No Cards To Show
								</Typography>
							</Zoom>
						) : (
							card?.map((card, index) => {
								return (
									<Fade
										in={true}
										easing={{ enter: theme.transitions.easing.easeInOut }}
										timeout={{ enter: 500 }}
										key={index}
									>
										<Grid
											item
											md={4}
											sm={6}
											xs={12}
										>
											<BizCard
												isRender={setRender}
												data={card}
											/>
										</Grid>
									</Fade>
								);
							})
						)}
					</Grid>
				</Box>
			</Container>
			<Box sx={{ height: 320, position: "absolute", bottom: 0, right: 0, flexGrow: 1 }}>
				<SpeedDial
					ariaLabel="SpeedDial basic example"
					sx={{ position: "relative", zIndex: 150, bottom: 60, right: 60 }}
					icon={<SpeedDialIcon />}
				>
					{actions.map((action) => (
						<SpeedDialAction
							key={action.name}
							icon={action.icon}
							tooltipTitle={action.name}
						/>
					))}
				</SpeedDial>
			</Box>
		</>
	);
};

export default MyCards;
