import './About.css';
import { technologies } from '../../config';
import SectionTitle from '../SectionTitle/SectionTitle';
import portrait from '../../assets/portrait.png';

export default function About() {
	return (
		<div className='about contained'>
			<div className='about-desc'>
				<SectionTitle title='About Me' />
				<p className='about-text regular-text'>
					Hello! I'm Abdellatif, a developer based in Morocco. I enjoy creating
					things that live on the internet, whether that be websites,
					applications, or anything in between. My goal is to always build
					products that provide pixel-perfect, performant experiences. Here are
					a few technologies I've been working with recently:
				</p>
				<ul className='about-techs'>
					{technologies.map(tech => (
						<li className='tech regular-text' key={tech}>
							<div className='arrow-right'></div>
							{tech}
						</li>
					))}
				</ul>
			</div>
			<div className='portrait'>
				<img
					src={portrait}
					alt='Portrait'
					title='Portrait'
					loading='lazy'
					draggable={false}
				/>
			</div>
		</div>
	);
}
