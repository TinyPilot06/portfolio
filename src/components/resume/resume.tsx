import { Box, Card, CardMedia, Divider, Grid, ImageList, Link, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material'
import MPLogo from '../mp-logo'
import profilePic from '../../assets/profilePic.jpg';
import './resume.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react';

type Props = {
};

const Resume = forwardRef<HTMLDivElement, Props>((props, ref) => {
	return (
		<Stack direction='row' className="resume-main" ref={ref}>
			<Stack className='contact' sx={{ mt: '140px', ml: '70px' }}>
				<Stack sx={{ m: '26px' }}>
					<CardMedia
						sx={{ height: 235, width: 235, borderRadius: '50%', backgroundPosition: '50% 28%', border: '3px solid #d43f1d' }}
						image={profilePic}
						title='Photo of Michelle Polan'
					/>
					<Typography sx={{ m: '12px' }}>FULL STACK DEVELOPER</Typography>
				</Stack>
				<Stack className='side-info'>
					<Stack className='contact-info' spacing={3}>
						<Box className='contact-icon'>
							<FontAwesomeIcon icon='phone' />
							<Typography variant='body1'>717.318.6104</Typography>
						</Box>
						<Box>
							<FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'github' }} />
							<Typography variant='body1'>
								<Link href='https://github.com/TinyPilot06'>https://github.com/TinyPilot06</Link>
							</Typography>
						</Box >
						<Box>
							<FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'linkedin' }} />
							<Typography variant='body1'>
								<Link href='https://www.linkedin.com/in/michelle-polan'>https://www.linkedin.com/in/michelle-polan</Link>
							</Typography>
						</Box>
						<Box>
							<FontAwesomeIcon icon='globe' />
							<Typography variant='body1'>
								<Link href='http://www.michellepolan.com'>http://www.michellepolan.com</Link>
							</Typography>
						</Box>
					</Stack>
					<Stack className='contact-info'>
						<Stack className='contact-item-title'>TECHNICAL SKILLS</Stack>
						{/* sx={{ mt: '200px', ml: '60px', mb: '20px' }} */}
						<Stack>
							<List>
								<ListItem>
									Languages
									JavaScript/TypeScript, Python, HTML, CSS, SASS
								</ListItem>
								<ListItem>
									Frameworks & Technologies <br />
									React, Node.js, Django, MongoDB, MUI, AWS Lambda, Docker
								</ListItem>
								<ListItem>
									Databases <br />
									PostgreSQL, DynamoDB
								</ListItem>
								<ListItem>
									Tools <br />
									Git, Docker
								</ListItem>
							</List>
						</Stack>
					</Stack>
					<Stack className='contact-info'>
						<Stack className='contact-item-title'>CERTIFICATION AND COURSES</Stack>
						{/* sx={{ mt: '200px', ml: '40px', mb: '20px' }} */}
						<Stack sx={{ m: '12px' }}>
							<Typography>
								Web Development Fundamentals, nuCamp <br />
								Backend, SQL, and DevOps with Python, nuCamp <br />
								Front End and Mobile Development, nuCamp
							</Typography>
						</Stack>
					</Stack>
				</Stack>
			</Stack>
			<Stack className="main-content" spacing={8}>
				<Stack>
					<Stack className='resume-item-title'>OBJECTIVE</Stack>
					<Stack>
						<Typography className='resume-text'>
							Motivated and dependable professional transitioning from the service and gaming industry to the technology sector,
							with a foundational knowledge in web & mobile development and a passion for technology and innovation. Eager to apply my problem-solving skills,
							adaptability, and commitment to learning in a full-stack developer role. I bring a unique perspective from extensive service industry experience,
							including working under pressure, excellent communication, and a demonstrably strong work ethic.
						</Typography>
					</Stack>
				</Stack>
				<Stack className='resume-items'>
					<Stack className='resume-item-title'>PROJECTS</Stack>
					<Typography className='resume-text'>
						Music Library WebApp <br />
						React, TypeScript, Material UI, Node.js, Cognito, Lambda, DynamoDB, S3<br />
						<br />
						Developed a full-featured music library management application from scratch, focusing on serverless architecture with AWS Lambda functions and DynamoDB for data management. Front end built in React using Material UI v5.
						Command Line Blackjack <br />
						<br />
						Python
						<br />
						Created a command line-based Blackjack game with full Blackjack rules logic and ASCII graphics.
						NuCamp Bootcamp <br />
						HTML, CSS, JavaScript, SQL, React, ReactNative, AWS/Azure DevOps, <br />
						Participated in numerous projects, covering website and web app design & development, database development, Python scripting, DevOps in both the AWS and Azure environments, mobile app development, and full-stack design and architecture principles.
					</Typography>
				</Stack>
				<Stack className='resume-items' spacing={4}>
					<Stack className='resume-item-title'>PROFESSIONAL EXPERIENCE</Stack>
					<Stack>
						<List>
							<ListItem>
								<Stack direction='row' spacing='600px'>
									<Typography>
										Blackjack Dealer <br /> Pit Supervisor <br />
										May 2012 - Present
									</Typography>
									<Typography>
										Seminole HardRock Hotel and Casino <br />
										5223 Orient Road, Tampa, FL  33610
									</Typography>
								</Stack>
							</ListItem>
							<Stack>
								<Typography className='resume-text'>
									Excelled in a high-pressure environment, managing games for high-stake clients and high rollers. <br />
									Oversee a section of dealers, keeping an eagle-eye on money exchanges, card-counters, and unruly guests. <br />
									Utilized excellent communication and humor to maintain a positive atmosphere and diffuse tensions. <br />
									Demonstrated a strong work ethic and commitment to community service through volunteering in company-led initiatives.
								</Typography>
							</Stack>
						</List>
						<Divider variant='middle' />
						<List>
							<ListItem>
								<Stack direction='row' spacing='550px'>
									<Typography>
										Office Manager <br />
										October 2011 - May 2012
									</Typography>
									<Typography>
										TM Realty, LLC. <br />
										3275 Arbor Pointe Cir, Tampa, FL  33617
									</Typography>
								</Stack>
							</ListItem>
							<Stack>
								<Typography className='resume-text'>
									Managed rent and HOA dues collection and delinquency. <br />
									Organized agendas for homeowner board meetings. <br />
									Managed maintenance staff and addressed issues for owners and tenants.
								</Typography>
							</Stack>
						</List>
						<Divider variant='middle' />
						<List>
							<ListItem>
								<Stack direction='row' spacing='550px'>
									<Typography>
										Waitress <br />
										June 2001 - December 2011
									</Typography>
									<Typography>
										The Cheesecake Factory Restaurants <br />
										2223 N Westshore Blvd., Tampa, FL  33607
									</Typography>
								</Stack>
							</ListItem>
							<Stack>
								<Typography className='resume-text'>
									Excelled in customer service in the high-pressure, fast-paced environment of a wildly popular premium restaurant brand.
								</Typography>
							</Stack>
						</List>
					</Stack>
				</Stack>
				<Stack sx={{ mt: '16px', mb: '16px' }} className='resume-items'>
					<Stack className='resume-item-title' >SOFT SKILLS</Stack>
					<Typography className='resume-text'>
						Demonstrably strong work ethic and company loyalty. <br />
						Excellent communication and interpersonal skills honed in high-pressure service environments. <br />
						Adaptability and eagerness to learn and apply new technologies.
					</Typography>
				</Stack>
				<Stack className='resume-items'>
					<Stack className='resume-item-title'>ACTIVITIES AND INTERESTS</Stack>
					<Typography className='resume-text '>
						Continuously engaging in self-directed learning through online resources, focusing on web design, user experience, and modern web technologies like AWS, React, and Three.js.
						<br />
						When I’m not coding, I like to build with Lego, play video games, root for the Ravens, and go to the gym.
					</Typography>
				</Stack>
			</Stack>
		</Stack >
	)
});

export default Resume;