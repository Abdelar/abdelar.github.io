import C from './assets/C.svg';
import M from './assets/M.svg';
import P from './assets/P.svg';

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
		title: 'Skills',
		href: '#skills',
		icon: 'laptop-code',
	},
	{
		title: 'Contact',
		href: '#contact',
		icon: 'envelope',
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
			},
			{ href: '/not-found', icon: 'external-link-square-alt' },
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
			},
			{
				href: 'https://elaroussi.me/morse-translate',
				icon: 'external-link-square-alt',
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
			{ href: 'https://github.com/Abdelar/postwoman', icon: ['fab', 'github'] },
			{
				href: 'https://elaroussi.me/postwoman/',
				icon: 'external-link-square-alt',
			},
		],
	},
];
