import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faFolderOpen,
	faUser,
	faEnvelope,
	faExternalLinkSquareAlt,
	faFile,
} from '@fortawesome/free-solid-svg-icons';

import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import './Main.css';

library.add(
	faFile,
	faUser,
	faFolderOpen,
	faEnvelope,
	faGithub,
	faExternalLinkSquareAlt
);

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
				<section id='work'>
					<Work />
				</section>
				<section id='contact'>
					<Contact />
				</section>
			</main>
		</>
	);
}
