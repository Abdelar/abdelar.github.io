import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faFolderOpen,
	faLaptopCode,
	faUser,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import Nav from '../Nav/Nav';
import './Main.css';

library.add(faLaptopCode, faUser, faFolderOpen, faEnvelope);

export default function Main() {
	return (
		<>
			<header>
				<Nav />
			</header>
			<main className='test'>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt deleniti
				consequuntur iusto, doloribus non animi eum odit numquam nulla?
				Similique enim reiciendis voluptate quia officiis hic pariatur
				accusantium recusandae exercitationem!
			</main>
		</>
	);
}
