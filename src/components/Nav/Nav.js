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
					<a title='Services' href='#services'>
						Services
					</a>
				</li>
				<li>
					<a title='Services' href='#services'>
						Services
					</a>
				</li>
				<li>
					<a title='Services' href='#services'>
						Services
					</a>
				</li>
				<li>
					<a title='Services' href='#services'>
						Services
					</a>
				</li>
			</ul>
		</nav>
	);
}
