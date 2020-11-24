import { useState } from 'react';

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
						About
					</a>
				</li>
				<li>
					<a title='Work' href='#work'>
						Work
					</a>
				</li>
				<li>
					<a title='Skills' href='#skills'>
						Skills
					</a>
				</li>
				<li>
					<a title='Contact' href='#contact'>
						Contact
					</a>
				</li>
			</ul>
		</nav>
	);
}
