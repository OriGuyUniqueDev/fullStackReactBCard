import { Box, Button, Fade, Grid, Stack, Typography, useTheme } from "@mui/material";
import { width } from "@mui/system";
import axios from "axios";
import { FunctionComponent, useEffect } from "react";
import { useColorMode } from "../../contexts/ColorModeProvider";
import { useLoggedIn } from "../../contexts/LoggedInProvider";
import NavbarLink from "../../layout/header/components/NavbarLink";
import ROUTES from "../../routes/routesModel";

interface WelcomeProps {}

const Welcome: FunctionComponent<WelcomeProps> = () => {
	const { user } = useLoggedIn();
	const theme = useTheme();
	const { colorMode, setBgColor } = useColorMode();
	const userHeroText = 'You can use this dashboard to discover and save your favorite businesses in one convenient place. Browse the latest business cards and add them to your favorites to keep track of their updates. You can also visit the "About" section to learn more about the author of this project.';
	const bizHeroText = "You can use this dashboard to manage your business account, create your own digital card to showcase your services, and keep your business information up-to-date. You have full control over your card and can update it at any time. You can also browse other businesses and add them to your favorites.";

	useEffect(() => {}, [colorMode]);
	return (
		<Grid
			container
			position="relative"
			overflow="hidden"
			height="100%"
			width="fit"
			sx={{ placeContent: "center", bgcolor: "transparent" }}
		>
			<Fade
				in={true}
				easing={{ enter: theme.transitions.easing.easeInOut }}
				timeout={{ enter: 1000 }}
			>
				<Grid
					item
					xs={12}
					md={5}
					textAlign="center"
				>
					<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mx: { xs: 2, lg: 0 } }}>
						<Typography sx={{ textTransform: "capitalize", fontSize: { xs: 48, lg: 64 } }}>
							Welcome {user?.firstName} {user?.lastName} to Control !
						</Typography>
						<Typography
							variant="subtitle2"
							sx={{ py: 5, fontSize: 18, width: "80%", mx: "auto" }}
						>
							{user?.biz ? bizHeroText : userHeroText}
						</Typography>
						<Stack
							sx={{ flexDirection: { xs: "column", lg: "row" } }}

							// spacing={4}
						>
							<NavbarLink to={ROUTES.ADD_CARD}>
								<Button
									color="info"
									variant="contained"
									sx={{ p: 1.75, display: () => (user?.biz ? "block" : "none"), mx: "auto", mb: 3 }}
								>
									Create Your Business Card
								</Button>
							</NavbarLink>
							<NavbarLink to={ROUTES.CARDS}>
								<Button
									color="inherit"
									variant="outlined"
									sx={{ p: 1.75, ml: { lg: 3 } }}
								>
									Browse Businesses
								</Button>
							</NavbarLink>
						</Stack>
					</Box>
				</Grid>
			</Fade>
		</Grid>
	);
};

export default Welcome;
