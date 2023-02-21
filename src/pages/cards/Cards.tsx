import { Box, CircularProgress, Divider, Fade, Grid, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { FunctionComponent, useEffect, useState } from "react";
import BizCard from "../../components/bizCard/BizCard";
import { useIsLoaded } from "../../hooks/useIsLoaded";
import CardType from "../../interfaces/CardType";
import UserType from "../../interfaces/User";
import { getAllCards } from "../../services/userCRUD";
import { TransitionGroup } from "react-transition-group";

interface CardsProps {}

const Cards: FunctionComponent<CardsProps> = () => {
	const { isLoaded, setIsLoaded } = useIsLoaded(true);
	const [cards, setCards] = useState<CardType[] | null>(null);
	const theme = useTheme();

	useEffect(() => {
		getAllCards()
			?.then((res) => {
				setCards(res?.data);
			})
			.finally(() => setIsLoaded(false))
			.catch((err) => console.log(err));
	}, [isLoaded]);
	return (
		<Container>
			<Typography
				variant="h3"
				sx={{ mt: 6, mb: 2 }}
			>
				Find the Perfect Business for Your Needs
			</Typography>
			<Typography
				sx={{ mb: 2 }}
				variant="h5"
			>
				Discover new and exciting businesses to try
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
						<Typography>No Cards To Show</Typography>
					) : (
						cards?.map((card, index) => {
							return (
								<Fade
									in={true}
									easing={{ enter: theme.transitions.easing.easeInOut }}
									timeout={{ enter: 500 }}
								>
									<Grid
										key={index}
										item
										md={4}
										sm={6}
										xs={12}
									>
										<BizCard data={card} />
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

export default Cards;
