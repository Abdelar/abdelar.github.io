import { useState } from 'react';

import './Nav.css';

export default function Nav() {
	const [open, setOpen] = useState(true);
	return (
		<header>
			<nav className='nav'>
				<a title='main page' href='/' className='logo'>
					<span>Abdellatif Elaroussi</span>
				</a>
				<span className={`nav-toggle ${open ? 'X' : 'sticks'}`}>X</span>
				<ul className='nav-links'>
					<li>
						<a title='Services' href='#services'>
							Services
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}
