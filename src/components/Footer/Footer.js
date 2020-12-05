import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Footer.css';
import logo from '../../assets/logo.svg';
import { socials } from '../../config';

export default function Footer() {
	return (
		<div className='footer'>
			{/* <div className='identity'> */}
			<img src={logo} alt='Identity' draggable={false} />
			{/* </div> */}
			<div className='copyright'>
				Elaroussi.dev &copy; 2020
				<br /> All rights reserved
			</div>
			<ul className='socials'>
				{socials.map(social => (
					<li className='social'>
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
		</div>
	);
}
