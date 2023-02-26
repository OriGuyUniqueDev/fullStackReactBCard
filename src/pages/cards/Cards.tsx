import { Box, CircularProgress, Divider, Fade, Grid, InputAdornment, TextField, Typography, useTheme } from "@mui/material";
import { Container } from "@mui/system";
import { FunctionComponent, useEffect, useState } from "react";
import BizCard from "../../components/bizCard/BizCard";
import { useIsLoaded } from "../../hooks/useIsLoaded";
import CardType from "../../interfaces/CardType";
import UserType from "../../interfaces/User";
import { getAllCards } from "../../services/userCRUD";
import { TransitionGroup } from "react-transition-group";
import SearchIcon from "@mui/icons-material/Search";

interface CardsProps {}

const Cards: FunctionComponent<CardsProps> = () => {
	const { isLoaded, setIsLoaded } = useIsLoaded(true);
	const [cards, setCards] = useState<CardType[] | undefined>(undefined);
	const [filterArr, setFilterArr] = useState<CardType[] | undefined>(undefined);
	const [render, setRender] = useState<boolean>(false);

	const theme = useTheme();

	useEffect(() => {
		getAllCards()
			?.then((res) => {
				setCards(res?.data);
				setFilterArr(res?.data);
			})
			.finally(() => setIsLoaded(false))
			.catch((err) => console.log(err));
	}, [isLoaded, render]);
	return (
		<Container>
			<Typography
				variant="h3"
				sx={{ mt: 6, mb: 2, fontSize: { xs: 36, md: 48 } }}
			>
				Find the Perfect Business for Your Needs
			</Typography>
			<Typography
				sx={{ mb: 2, fontSize: { xs: 18, md: 24 } }}
				variant="h5"
			>
				Discover new and exciting businesses to try
			</Typography>
			<Divider />
			<TextField
				id="input-with-icon-textfield"
				label="Search field"
				type="search"
				color="info"
				onChange={(e) => {
					setFilterArr(() => {
						return cards?.filter((item) => item.bizName.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) === true);
					});
				}}
				sx={{ color: "white", mt: 2 }}
				InputProps={{
					endAdornment: (
						<InputAdornment position="end">
							<SearchIcon />
						</InputAdornment>
					),
				}}
				variant="standard"
			/>
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
						filterArr?.map((card, index) => {
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
	);
};

export default Cards;
