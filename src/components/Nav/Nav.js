import { useState, useCallback, useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logo, navLinks } from '../../config';

import './Nav.css';

export default function Nav() {
	const positionY = useRef(0);
	const [open, setOpen] = useState(false);
	const [isHidden, setIsHidden] = useState(false);

	const toggleMobileNav = () => {
		setOpen(!open);
	};

	const toggleNav = useCallback(() => {
		setOpen(false);
		window.scrollY > positionY.current ? setIsHidden(true) : setIsHidden(false);
		positionY.current = window.scrollY;
	}, []);

	useEffect(() => {
		window.addEventListener('scroll', throttle(toggleNav, 300));
		return () => window.removeEventListener('scroll', throttle(toggleNav, 300));
	}, [toggleNav]);

	return (
		<nav
			className={`nav ${open ? 'open' : 'closed'} ${
				isHidden ? 'hideBar' : ''
			}`}>
			<a title={logo.title} href={logo.href} className='logo'>
				<span>{logo.text}</span>
			</a>
			<div
				className={`nav-toggle ${open ? 'X' : 'sticks'}`}
				onClick={toggleMobileNav}>
				<span></span>
			</div>
			<ul className='nav-links'>
				{navLinks.map(({ href, title, icon, target }) => (
					<li key={href}>
						<a
							title={title}
							href={href}
							target={target}
							onClick={() => setOpen(false)}>
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
