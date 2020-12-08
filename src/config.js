import C from './assets/C.svg';
import M from './assets/M.svg';
import P from './assets/P.svg';
import resume from './assets/resume.pdf';

export const logo = {
	title: 'Abdellatif Elaroussi',
	href: '#home',
	text: 'Abdellatif Elaroussi',
};

export const navLinks = [
	{
		title: 'About',
		href: '#about',
		icon: 'user',
	},
	{
		title: 'Work',
		href: '#work',
		icon: 'folder-open',
	},
	{
		title: 'Contact',
		href: '#contact',
		icon: 'envelope',
	},
	{
		title: 'Resume',
		href: resume,
		icon: 'file',
		target: '_blank',
	},
];

export const technologies = [
	'Javascript',
	'Node.js',
	'Firebase',
	'MongoDB',
	'React',
	'Adobe XD',
];

export const learnMore = {
	title: 'Learn More',
	href: '#about',
};

export const projects = [
	{
		imgSrc: C,
		name: 'Confessio',
		desc:
			'Simple web app for posting confessions anonymously and share it with the world.',
		tools: ['Firebase', 'React', 'Axios'],
		links: [
			{
				href: 'https://github.com/Abdelar/iShare-frontend',
				icon: ['fab', 'github'],
				title: 'See the project on GitHub',
			},
			{
				href: 'https://abdell.tech/confessio',
				icon: 'external-link-square-alt',
				title: 'Demo',
			},
		],
	},
	{
		imgSrc: M,
		name: 'Morse Translate',
		desc: 'Translate from and to morse code.',
		tools: ['React', 'Web Audio Api', 'Material-UI'],
		links: [
			{
				href: 'https://github.com/Abdelar/morse-translate',
				icon: ['fab', 'github'],
				title: 'See the project on GitHub',
			},
			{
				href: 'https://abdell.tech/morse-translate',
				icon: 'external-link-square-alt',
				title: 'Demo',
			},
		],
	},
	{
		imgSrc: P,
		name: 'Postwoman',
		desc:
			'Quickly and easily send REST, SOAP, and GraphQL requests directly within Postwoman.',
		tools: ['React', 'Axios', 'Local Storage'],
		links: [
			{
				href: 'https://github.com/Abdelar/postwoman',
				icon: ['fab', 'github'],
				title: 'See the project on GitHub',
			},
			{
				href: 'https://abdell.tech/postwoman/',
				icon: 'external-link-square-alt',
				title: 'Demo',
			},
		],
	},
];

export const socials = [
	{
		href: 'https://www.linkedin.com/in/elaroussi',
		title: 'LinkedIn',
		icon: ['fab', 'linkedin'],
	},
	{
		href: 'https://github.com/Abdelar',
		title: 'GitHub',
		icon: ['fab', 'github'],
	},
	{
		href: 'https://dribbble.com/Elaroussi',
		title: 'Dribbble',
		icon: ['fab', 'dribbble'],
	},
	{
		href: 'https://codepen.io/elaroussi',
		title: 'CodePen',
		icon: ['fab', 'codepen'],
	},
];
