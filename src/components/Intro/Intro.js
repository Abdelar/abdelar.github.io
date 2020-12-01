import './Intro.css';
import illustration from '../../assets/illustration.svg';
import { learnMore } from '../../config';

export default function Intro() {
	return (
		<div className='intro contained'>
			<div className='introduction-text'>
				<h1 className='greeting'>
					<span>Hi, my name is</span> Abdellatif Elaroussi.
				</h1>
				<h2 className='brief-introduction'>
					I design &amp; build things for the web.
				</h2>
				<p className='detailed-introduction regular-text'>
					I am a web developer and I enjoy building everything from small
					business sites to rich interactive web apps.
				</p>
				<a title={learnMore.title} className='learn-more' href={learnMore.href}>
					{learnMore.title}
				</a>
			</div>
			<img
				src={illustration}
				className='introduction-illustration'
				alt='introduction illustration'
				draggable={false}
			/>
		</div>
	);
}
