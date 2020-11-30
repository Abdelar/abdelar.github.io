import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faFolderOpen,
	faLaptopCode,
	faUser,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';
import About from '../About/About';
import './Main.css';

library.add(faLaptopCode, faUser, faFolderOpen, faEnvelope);

export default function Main() {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>
				<section id='home'>
					<Intro />
				</section>
				<section id='about'>
					<About />
				</section>
			</main>
		</>
	);
}
