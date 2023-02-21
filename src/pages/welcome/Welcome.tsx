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

	useEffect(() => {
		console.log(colorMode);
	}, [colorMode]);
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
					xs={5}
					textAlign="center"
				>
					<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
						<Typography
							variant="h2"
							sx={{ textTransform: "capitalize" }}
						>
							Welcome {user?.firstName} {user?.lastName} to Control !
						</Typography>
						<Typography
							variant="subtitle2"
							sx={{ py: 5, fontSize: 18, width: "80%", mx: "auto" }}
						>
							{user?.biz ? bizHeroText : userHeroText}
						</Typography>
						<Stack
							direction="row"
							spacing={4}
						>
							<Button
								color="info"
								variant="contained"
								sx={{ p: 1.75, display: () => (user?.biz ? "block" : "none") }}
							>
								Create Your Business Card
							</Button>
							<NavbarLink to={ROUTES.CARDS}>
								<Button
									color="inherit"
									variant="outlined"
									sx={{ p: 1.75 }}
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
