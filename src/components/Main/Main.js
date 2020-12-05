import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faFolderOpen,
	faUser,
	faEnvelope,
	faExternalLinkSquareAlt,
	faFile,
	faSpinner,
	faCheck,
	faTimes,
} from '@fortawesome/free-solid-svg-icons';

import {
	faGithub,
	faDribbble,
	faCodepen,
	faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';
import About from '../About/About';
import Work from '../Work/Work';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './Main.css';

library.add(
	faFile,
	faUser,
	faFolderOpen,
	faEnvelope,
	faGithub,
	faExternalLinkSquareAlt,
	faSpinner,
	faCheck,
	faTimes,
	faDribbble,
	faLinkedin,
	faCodepen
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
			<footer>
				<Footer />
			</footer>
		</>
	);
}
