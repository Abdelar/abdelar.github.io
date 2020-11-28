import './Intro.css';
import illustration from '../../assets/illustration.svg';

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
				<p className='detailed-introduction'>
					I am a web developer and I enjoy building everything from small
					business sites to rich interactive web apps.
				</p>
			</div>
			<img
				src={illustration}
				className='introduction-illustration'
				alt='introduction illustration'
			/>
		</div>
	);
}
