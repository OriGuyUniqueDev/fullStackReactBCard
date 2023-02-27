import { Container, Divider, Fade, Grid, Slide, Typography, useTheme } from "@mui/material";
import { FunctionComponent } from "react";

interface AboutPageProps {}

const AboutPage: FunctionComponent<AboutPageProps> = () => {
	const theme = useTheme();
	return (
		<Container
			maxWidth="xl"
			style={{ marginTop: 40 }}
			sx={{ mb: 10 }}
		>
			<Fade
				in={true}
				timeout={850}
				easing={{ enter: theme.transitions.easing.easeInOut }}
			>
				<Typography sx={{ typography: { xs: "h2", lg: "h1" } }}>About Me 👋</Typography>
			</Fade>
			<Divider />
			<Grid
				container
				columnSpacing={6}
				marginTop={5}
				justifyContent="space-between"
				alignItems="center"
				height={"100%"}
				width={"100%"}
			>
				<Fade
					in={true}
					easing={{ enter: theme.transitions.easing.easeInOut }}
					timeout={{ enter: 1000 }}
				>
					<Grid
						item
						display={{ lg: "block" }}
						lg={4}
						xs={12}
						alignSelf="center"
					>
						<img
							style={{ borderRadius: 20, width: "100%", marginBottom: 25 }}
							src="/profilePic.jpg"
						/>
					</Grid>
				</Fade>
				<Fade
					in={true}
					easing={{ enter: theme.transitions.easing.easeInOut }}
					timeout={{ enter: 1000 }}
				>
					<Grid
						item
						xs={12}
						md={7}
					>
						<Typography
							marginBottom={2}
							sx={{ typography: { xs: "h6", lg: "h5" } }}
						>
							Hi there! I'm a driven and enthusiastic Full Stack Developer with a passion for delivering outstanding programming solutions. I recently graduated from HackerU College and have honed my skills through hands-on projects and self-study.
						</Typography>
						<Typography
							marginBottom={2}
							sx={{ typography: { xs: "h6", lg: "h5" } }}
						>
							My expertise lies in Frontend development languages and frameworks like HTML, CSS, JavaScript, Angular, React, and Vue3, as well as backend technologies like Node.js, I have a strong understanding of UI/UX concepts, and enjoy collaborating with designers to create user-friendly projects.
						</Typography>
						<Typography
							marginBottom={2}
							sx={{ typography: { xs: "h6", lg: "h5" } }}
						>
							With a background in customer service and technical support, and experience in leading teams, I bring a well-rounded skillset to the table. I also have a proven track record of training and mentoring others, making me a valuable asset to any team.
						</Typography>
						<Typography
							marginBottom={2}
							sx={{ typography: { xs: "h6", lg: "h5" } }}
						>
							I'm eager to start my career as a professional developer and make a positive impact in the industry. If you're looking for a young, happy, and professional full stack developer with a passion for learning, I'm your guy!
						</Typography>
					</Grid>
				</Fade>
			</Grid>
		</Container>
	);
};

export default AboutPage;
