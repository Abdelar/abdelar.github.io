import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logo, navLinks } from '../../config';

import './Nav.css';

export default function Nav() {
	const [open, setOpen] = useState(false);

	const toggleNav = () => {
		setOpen(!open);
	};

	return (
		<nav className={`nav ${open ? 'open' : 'closed'}`}>
			<a title={logo.title} href={logo.href} className='logo'>
				<span>{logo.text}</span>
			</a>
			<div
				className={`nav-toggle ${open ? 'X' : 'sticks'}`}
				onClick={toggleNav}>
				<span></span>
			</div>
			<ul className='nav-links'>
				{navLinks.map(({ href, title, icon }) => (
					<li key={href}>
						<a title={title} href={href} onClick={() => setOpen(false)}>
							<FontAwesomeIcon
								className='link-icon'
								icon={icon}
								aria-hidden='true'
							/>{' '}
							{title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
}
