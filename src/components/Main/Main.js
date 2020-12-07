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
	faAngleUp,
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
import { useOnScreen } from '../../hooks/useOnScreen';

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
	faCodepen,
	faAngleUp
);

export default function Main() {
	const [setRef2, visible2] = useOnScreen({ threshold: 0.4 });
	const [setRef3, visible3] = useOnScreen({ threshold: 0.4 });
	const [setRef4, visible4] = useOnScreen({ threshold: 0.4 });
	const [setRef5, visible5] = useOnScreen({ threshold: 0.4 });
	const [setRef6, visible6] = useOnScreen({ threshold: 0.4 });
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>
				<section id='home' ref={setRef2} className={visible2 ? 'onScreen' : ''}>
					<Intro />
				</section>
				<section
					id='about'
					ref={setRef3}
					className={visible3 ? 'onScreen' : ''}>
					<About />
				</section>
				<section id='work' ref={setRef4} className={visible4 ? 'onScreen' : ''}>
					<Work />
				</section>
				<section
					id='contact'
					ref={setRef5}
					className={visible5 ? 'onScreen' : ''}>
					<Contact />
				</section>
			</main>
			<footer ref={setRef6} className={visible6 ? 'onScreen' : ''}>
				<Footer />
			</footer>
		</>
	);
}
