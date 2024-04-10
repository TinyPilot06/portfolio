import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"
import '../components/contactform.scss';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


interface ContactFormFields {
	name: string,
	email: string,
	message: string,
}

const ContactForm = () => {
	const myForm = useRef<HTMLFormElement>(null);

	const [formFields, setFormFields,] = useState<ContactFormFields>({
		name: '',
		email: '',
		message: ''
	});

	const [submitSuccessful, setSubmitSuccessful] = useState(false);

	const sendEmail = (e: FormEvent) => {
		e.preventDefault();

		if (myForm) {
			emailjs
				.sendForm('service_wxq317b', 'template_paobot3', myForm.current as string | HTMLFormElement, {
					publicKey: 'KhWQOduy41IfCSpNa'
				})
				.then((result) => {
					console.log(result.text);
					setSubmitSuccessful(true);

					// Clear the form after successful submit.	
					setFormFields({ name: '', email: '', message: '' })

				}, (error) => {
					console.log(error.text);
					setSubmitSuccessful(false);
				});
		}
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });

	};

	return (
		<form ref={myForm} onSubmit={sendEmail} noValidate>
			<Stack className="content-container" spacing={2} style={{ marginBottom: 150 }} >
				<Typography variant="h4">CONTACT</Typography>
				<Stack spacing={4}>
					<TextField variant="standard"
						required
						id="name"
						name="name"
						placeholder="YOUR NAME"
						value={formFields.name}
						onChange={handleChange}
					/>
					<TextField variant="standard"
						required
						id="email"
						name="email"
						placeholder="YOUR EMAIL ADDRESS"
						value={formFields.email}
						onChange={handleChange}
					/>
					<TextField variant="standard"
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
					{submitSuccessful && (
						<Alert variant="outlined" color="info">Thank you for contacting me!</Alert>
					)}
				</Stack>
			</Stack>
		</form>
	)
};
export default ContactForm;