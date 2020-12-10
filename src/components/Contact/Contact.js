import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Contact.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { sendEmail } from '../../util/sendEmail';
import { flipVar } from '../../util/flipVar';

export default function Contact() {
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	useEffect(() => {
		return flipVar(success, setSuccess, 5000);
	}, [success]);

	useEffect(() => {
		return flipVar(error, setError, 5000);
	}, [error]);

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

	const submit = async e => {
		e.preventDefault();
		setLoading(true);
		try {
			await sendEmail({ email, emailBody: message });
			setSuccess(true);
			setError(false);
			setMessage('');
			setEmail('');
		} catch (err) {
			setError(true);
			setSuccess(false);
		} finally {
			setLoading(false);
		}
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
				<button type='submit' disabled={loading}>
					{loading ? <FontAwesomeIcon icon='spinner' pulse /> : 'Send'}
				</button>
				{error && (
					<div className='error'>
						Not Sent <FontAwesomeIcon icon='times' />
					</div>
				)}
				{success && (
					<div className='success'>
						Sent <FontAwesomeIcon icon='check' />
					</div>
				)}
			</form>
		</div>
	);
}
