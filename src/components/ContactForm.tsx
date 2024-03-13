import { Button, Stack, TextField, Typography } from "@mui/material"
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
		<Stack sx={{ m: '90px 0 100px 70px' }}>
			<Typography variant="h2">CONTACT</Typography>
			<Stack className="contact-form" spacing={2.5} sx={{ m: '50px 0 50px 0' }}>
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
				<TextField className="input-label" variant="outlined"
					required
					id="message"
					name="message"
					placeholder="LEAVE A MESSAGE"
					value={formFields.message}
					onChange={handleChange}
				/>
				<Button className="submit-btn" variant="outlined" type="submit" sx={{ mt: 12, border: '1px solid white', borderRadius: 32, fontSize: 20 }}>SUBMIT</Button>
			</Stack>
		</Stack>
	)

};
export default ContactForm;