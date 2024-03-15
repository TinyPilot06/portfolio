import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"
import '../components/contactform.scss';


interface ContactFormFields {
	name: string,
	email: string,
	message: string,
}

const ContactForm = () => {
	const [formFields, setFormFields] = useState<ContactFormFields>({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	return (
		<Stack className="content-container" spacing={2} >
			<Typography variant="h4">CONTACT</Typography>
			<Stack className="contact-form" spacing={4}>
				<TextField className="input-label" variant="standard" size="medium"
					required
					id="name"
					name="name"
					placeholder="YOUR NAME"
					value={formFields.name}
					onChange={handleChange}
				/>
				<TextField className="input-label" variant="standard" size="medium"
					required
					id="email"
					name="email"
					placeholder="YOUR EMAIL ADDRESS"
					value={formFields.email}
					onChange={handleChange}
				/>
				<TextField className="input-label" variant="standard"
					required
					id="message"
					name="message"
					placeholder="LEAVE A MESSAGE"
					value={formFields.message}
					onChange={handleChange}
				/>
				<Box>
					<Button size="large" variant="outlined" type="submit" sx={{ px: '25px' }}>SUBMIT</Button>
				</Box>
			</Stack>
		</Stack>

	)

};
export default ContactForm;