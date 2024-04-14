import { CardMedia, Divider, Link, List, ListItem, ListItemIcon, ListItemText, Paper, Stack, Typography, useTheme } from '@mui/material'
import profilePic from '../../assets/profilePic.jpg';
import './resume.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react';

type Props = {
};

const Resume = forwardRef<HTMLDivElement, Props>((props, ref) => {
	const theme = useTheme();

	return (
		<Stack direction='row' className="resume-main" ref={ref} spacing={2} mb={4} p={4} pt={16}>
			<Stack className='contact' sx={{ mt: '140px', ml: '70px' }}>
				<Stack sx={{ m: '26px' }}>
					<CardMedia
						sx={{ height: 235, width: 235, borderRadius: '50%', backgroundPosition: '50% 28%', border: '3px solid #d43f1d' }}
						image={profilePic}
						title='Photo of Michelle Polan'
					/>
					<Typography sx={{ m: '12px' }}>FULL STACK DEVELOPER</Typography>
				</Stack>
				<Stack>
					<Stack className='contact-info' direction="row">
						<Stack className='info' spacing={2}>
							<Link
								href="https://www.linkedin.com/in/michelle-polan/"
								target="_blank"
								underline="none"
							>
								<Stack direction="row" alignItems="center" spacing={2}>
									<FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'linkedin' }} style={{ fontSize: 20 }} fixedWidth />
									<Typography variant="body1">LinkedIn</Typography>
								</Stack>
							</Link>
							<Link
								href="https://github.com/TinyPilot06"
								target="_blank"
								underline="none"
							>
								<Stack direction="row" alignItems="center" spacing={2}>
									<FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'github' }} style={{ fontSize: 20 }} fixedWidth />
									<Typography variant="body1">GitHub</Typography>
								</Stack>
							</Link>
							<Link href="tel://+17173186104" underline="none">
								<Stack direction="row" alignItems="center" spacing={2}>
									<FontAwesomeIcon icon="phone" style={{ fontSize: 20 }} fixedWidth />
									<Typography variant="body1">+1 (717) 318-6104</Typography>
								</Stack>
							</Link>
						</Stack>
					</Stack>

					<Stack className='contact-info'>
						<Typography className='contact-item-title' sx={{ m: '6px', p: '8px' }}>TECHNICAL SKILLS</Typography>
						<Stack spacing={3}>
							<Typography>
								Languages <br />
								JavaScript/TypeScript, Python, HTML, CSS, SASS<br />
							</Typography>
							<Typography>
								Frameworks & Technologies <br />
								React, Node.js, Django, MongoDB, MUI, AWS Lambda, Docker < br />
							</Typography>
							<Typography>
								Databases <br />
								PostgreSQL, DynamoDB <br />
							</Typography>
							<Typography>
								Tools <br />
								Git, Docker
							</Typography>
						</Stack>
					</Stack>
					<Stack className='contact-info'>
						<Typography className='contact-item-title' sx={{ m: '6px', p: '8px' }}>CERTIFICATION AND COURSES</Typography>
						<Stack spacing={3} sx={{ m: '6px', p: '8px' }}>
							<Typography>
								Web Development Fundamentals, nuCamp <br />
							</Typography>
							<Typography>
								Backend, SQL, and DevOps with Python, nuCamp <br />
							</Typography>
							<Typography>
								Front End and Mobile Development, nuCamp
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
			<Stack className="main-content" spacing={8}>
				<Stack spacing={3}>
					<Typography variant="h5">OBJECTIVE</Typography>
					<Paper elevation={0}>
						<Typography m="10px" p="20px">
							Motivated and dependable professional transitioning from the service and gaming industry to the technology sector,
							with a foundational knowledge in web & mobile development and a passion for technology and innovation. Eager to apply my problem-solving skills,
							adaptability, and commitment to learning in a full-stack developer role. I bring a unique perspective from extensive service industry experience,
							including working under pressure, excellent communication, and a demonstrably strong work ethic.
						</Typography>
					</Paper>
				</Stack>
				<Divider variant='middle' />
				<Stack spacing={3}>
					<Typography variant="h5">PROJECTS</Typography>
					<Paper elevation={0}>
						<Stack spacing={6} sx={{ m: '10px', p: '15px' }}>
							<List>
								<Stack spacing={3}>
									<ListItem>
										<Stack>
											<Typography>Music Library WebApp</Typography>
											<Typography>
												React, TypeScript, Material UI, Node.js, Cognito, Lambda, DynamoDB, S3 <br />
												Developed a full-featured music library management application from scratch,
												focusing on serverless architecture with AWS Lambda functions and DynamoDB for data management.
												Front end built in React using Material UI v5. <br />
											</Typography>
										</Stack>
									</ListItem>
									<Divider variant="middle" />
									<ListItem>
										<Stack>
											<Typography>Command Line BlackJack</Typography>
											<Typography>Phyton</Typography>
											<Typography>Created a command line-based Blackjack game with full Blackjack rules logic and ASCII graphipcs.</Typography>
										</Stack>
									</ListItem>
									<Divider variant="middle" />
									<ListItem>
										<Stack>
											<Typography>NuCamp Bootcamp < br />
												HTML, CSS, Javascript, SQL, REACT, ReactNative, AWS/AZURE DevOps
											</Typography>
											<Typography>Participated in numerous projects, covering website and web app design & development, database development
												Phyton scripting, DevOps in both the AWS and Azure environments, mobile app devlopment, and full-stack design and architecture principles.
											</Typography>
										</Stack>
									</ListItem>
								</Stack>
							</List>
						</Stack>
					</Paper>
				</Stack>
				<Divider variant='middle' />
				<Stack spacing={3}>
					<Typography variant="h5">PROFESSIONAL EXPERIENCE</Typography>
					<Stack spacing={6}>
						<Stack spacing={3}>
							<Stack direction="row" width="100%" justifyContent="space-between" spacing={4}>
								<Stack>
									<Typography fontWeight="bold">
										Blackjack Dealer / Pit Supervisor <br />
									</Typography>
									<Typography color={theme.palette.info.main}>
										May 2012 - Present
									</Typography>
								</Stack>
								<Stack>
									<Typography textAlign="right" fontWeight="bold">
										Seminole HardRock Hotel and Casino
									</Typography>
									<Typography textAlign="right" color={theme.palette.info.main}>
										5223 Orient Road, Tampa, FL  33610
									</Typography>
								</Stack>
							</Stack>
							<Paper elevation={0}>
								<List>
									<ListItem>
										<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
										<ListItemText>Excelled in a high-pressure environment, managing games for high-stake clients and high rollers.</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
										<ListItemText>Oversee a section of dealers, keeping an eagle-eye on money exchanges, card-counters, and unruly guests.</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
										<ListItemText>Utilized excellent communication and humor to maintain a positive atmosphere and diffuse tensions.</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
										<ListItemText>Demonstrated a strong work ethic and commitment to community service through volunteering in company-led initiatives.</ListItemText>
									</ListItem>
								</List>
							</Paper>
						</Stack>
						<Divider variant='middle' />
						<Stack spacing={3}>
							<Stack direction="row" width="100%" justifyContent="space-between" spacing={4}>
								<Stack>
									<Typography fontWeight="bold">
										Office Manager
									</Typography>
									<Typography color={theme.palette.info.main}>
										October 2011 - May 2012
									</Typography>
								</Stack>
								<Stack>
									<Typography textAlign="right" fontWeight="bold">
										TM Realty, LLC.
									</Typography>
									<Typography textAlign="right" color={theme.palette.info.main}>
										3275 Arbor Pointe Cir, Tampa, FL  33617
									</Typography>
								</Stack>
							</Stack>
							<Paper elevation={0}>
								<List>
									<ListItem>
										<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
										<ListItemText>Managed rent and HOA dues collection and delinquency.</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
										<ListItemText>Organized agendas for homeowner board meetings.</ListItemText>
									</ListItem>
									<ListItem>
										<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
										<ListItemText>Managed maintenance staff and addressed issues for owners and tenants.</ListItemText>
									</ListItem>
								</List>
							</Paper>
						</Stack>
						<Divider variant='middle' />
						<Stack>
							<Stack spacing={3}>
								<Stack direction="row" width="100%" justifyContent="space-between" spacing={4}>
									<Stack>
										<Typography fontWeight="bold">
											Waitress
										</Typography>
										<Typography color={theme.palette.info.main}>
											June 2001 - December 2011
										</Typography>
									</Stack>
									<Stack>
										<Typography textAlign="right" fontWeight="bold">
											The Cheesecake Factory Restaurants
										</Typography>
										<Typography textAlign="right" color={theme.palette.info.main}>
											2223 N Westshore Blvd., Tampa, FL  33607
										</Typography>
									</Stack>
								</Stack>
								<Paper elevation={0}>
									<List>
										<ListItem>
											<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
											<ListItemText>
												Excelled in customer service in the high-pressure, fast-paced environment of a wildly popular premium restaurant brand.
											</ListItemText>
										</ListItem>
									</List>
								</Paper>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
				<Divider variant='middle' />
				<Stack spacing={3}>
					<Typography variant="h5">SOFT SKILLS</Typography>
					<Paper elevation={0}>
						<List>
							<ListItem>
								<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
								<ListItemText>
									Demonstrably strong work ethic and company loyalty.
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
								<ListItemText>
									Excellent communication and interpersonal skills honed in high-pressure service environments.
								</ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon><FontAwesomeIcon icon="caret-right" /></ListItemIcon>
								<ListItemText>
									Adaptability and eagerness to learn and apply new technologies.
								</ListItemText>
							</ListItem>
						</List>
					</Paper>
				</Stack>
				<Divider variant='middle' />
				<Stack spacing={3}>
					<Typography variant="h5">ACTIVITIES AND INTERESTS</Typography>
					<Paper elevation={0}>
						<Typography m="10px" p="20px">
							Continuously engaging in self-directed learning through online resources, focusing on web design, user experience, and modern web technologies like AWS, React, and Three.js.
							<br />
							When I’m not coding, I like to build with Lego, play video games, root for the Ravens, and go to the gym.
						</Typography>
					</Paper>
				</Stack>
			</Stack>
		</Stack >
	)
});

export default Resume;