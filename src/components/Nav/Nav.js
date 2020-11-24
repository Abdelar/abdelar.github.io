import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Nav.css';

export default function Nav() {
	const [open, setOpen] = useState(false);

	const toggleNav = () => {
		setOpen(!open);
	};
	return (
		<nav className={`nav ${open ? 'open' : 'closed'}`}>
			<a title='main page' href='/' className='logo'>
				<span>Abdellatif Elaroussi</span>
			</a>
			<div
				className={`nav-toggle ${open ? 'X' : 'sticks'}`}
				onClick={toggleNav}>
				<span></span>
			</div>
			<ul className='nav-links'>
				<li>
					<a title='About' href='#about'>
						<FontAwesomeIcon
							className='link-icon'
							icon='user'
							aria-hidden='true'
						/>{' '}
						About
					</a>
				</li>
				<li>
					<a title='Work' href='#work'>
						<FontAwesomeIcon
							className='link-icon'
							icon='folder-open'
							aria-hidden='true'
						/>{' '}
						Work
					</a>
				</li>
				<li>
					<a title='Skills' href='#skills'>
						<FontAwesomeIcon
							className='link-icon'
							icon='laptop-code'
							aria-hidden='true'
						/>{' '}
						Skills
					</a>
				</li>
				<li>
					<a title='Contact' href='#contact'>
						<FontAwesomeIcon
							className='link-icon'
							icon='envelope'
							aria-hidden='true'
						/>{' '}
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
