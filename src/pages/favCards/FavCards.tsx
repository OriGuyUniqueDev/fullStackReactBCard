import { useTheme } from "@emotion/react";
import { Container, Typography, Divider, Box, CircularProgress, Grid, Fade, Zoom } from "@mui/material";
import { FunctionComponent, useEffect, useState } from "react";
import BizCard from "../../components/bizCard/BizCard";
import { useLoggedIn } from "../../contexts/LoggedInProvider";
import { useIsLoaded } from "../../hooks/useIsLoaded";
import CardType from "../../interfaces/CardType";
import { getAllCards, getBizCard, getUserBizCard } from "../../services/userCRUD";

interface FavCardsProps {}

const FavCards: FunctionComponent<FavCardsProps> = () => {
	const { isLoaded, setIsLoaded } = useIsLoaded(true);
	const [cards, setCards] = useState<CardType[] | null>(null);
	const [render, setRender] = useState<boolean>(false);
	const { user } = useLoggedIn();
	const theme = useTheme();

	useEffect(() => {
		let arr: CardType[] | null = [];
		if (user?.favBiz) {
			const promises = Array.from(new Set(user.favBiz)).map(async (fav) => {
				return await getBizCard(fav)
					.then((res) => {
						if (res?.data !== undefined) {
							return arr?.push(res?.data);
						} else {
							return "";
						}
					})
					.catch((err) => {
						console.log(err.response);
						return null;
					});
			});
			Promise.all(promises)
				.then((results) => {
					// arr = results.filter((card) => card !== null) as CardType[];
					setCards(arr);
					setIsLoaded(false);
				})
				.catch((err) => {
					console.log(err);
				});
			user.favBiz;
		}
	}, []);
	return (
		<Container>
			<Typography
				variant="h3"
				sx={{ mt: 6, mb: 2, fontSize: { xs: 36, lg: 48 } }}
			>
				Liked Business
			</Typography>
			<Typography
				sx={{ mb: 2, fontSize: { xs: 18, lg: 24 } }}
				variant="h5"
			>
				Business you find interesting
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
					{!cards?.length ? (
						<Zoom
							in={true}
							style={{ transitionDelay: "250ms" }}
							// easing={{ enter: theme.transitions.easing.easeInOut }}
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
						cards?.map((card, index) => {
							return (
								<Fade
									in={true}
									// easing={{ enter: theme.transitions.easing.easeInOut }}
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
	);
};

export default FavCards;
