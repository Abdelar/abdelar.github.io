import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faFolderOpen,
	faLaptopCode,
	faUser,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import Nav from '../Nav/Nav';
import Intro from '../Intro/Intro';
import './Main.css';

library.add(faLaptopCode, faUser, faFolderOpen, faEnvelope);

export default function Main() {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main>
				<div className='intro-bg'>
					<section id='intro'>
						<Intro />
					</section>
				</div>
				<section className='about'>about</section>
			</main>
		</>
	);
}
