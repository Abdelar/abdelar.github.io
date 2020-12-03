import { useState } from 'react';

import './Contact.css';
import SectionTitle from '../SectionTitle/SectionTitle';

export default function Contact() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const changed = e => {
		const { name, value } = e.target;
		switch (name) {
			case 'email':
				setEmail(value);
				break;
			case 'message':
				setMessage(value);
				break;
			default:
				throw new Error('Unexpected Input');
		}
	};

	const submit = e => {
		e.preventDefault();
		console.log(email, message);
	};

	return (
		<div className='contact contained'>
			<SectionTitle title='Say Hello!' />
			<form onSubmit={submit}>
				<div className='form-element'>
					<label htmlFor='email' name='email label'>
						Email
					</label>
					<input
						type='email'
						id='email'
						className='email'
						required
						value={email}
						name='email'
						onChange={changed}
					/>
				</div>
				<div className='form-element'>
					<label htmlFor='message' name='message label'>
						Message
					</label>
					<textarea
						type='message'
						id='message'
						className='message'
						required
						name='message'
						value={message}
						onChange={changed}
					/>
				</div>
				<button type='submit'>Send</button>
			</form>
		</div>
	);
}
