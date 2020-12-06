import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.css';
import logo from '../../assets/logo.svg';
import { socials } from '../../config';

export default function Footer() {
	const scrollToTop = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	};

	return (
		<div className='footer'>
			<img src={logo} alt='Identity' draggable={false} />
			<div className='copyright'>
				Elaroussi.dev &copy; 2020
				<br /> All rights reserved
			</div>
			<ul className='socials'>
				{socials.map(social => (
					<li className='social' key={social.title}>
						<a
							href={social.href}
							title={social.title}
							target='_blank'
							rel='noreferrer'>
							<FontAwesomeIcon
								icon={social.icon}
								size='2x'
								className='social-icon'
							/>
							<span>{social.title}</span>
						</a>
					</li>
				))}
			</ul>
			<div
				className='top'
				onClick={scrollToTop}
				role='button'
				title='Go to Top'>
				<FontAwesomeIcon icon='angle-up' size='2x' className='top-icon' />
			</div>
		</div>
	);
}
