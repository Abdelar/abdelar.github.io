import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionTitle from '../SectionTitle/SectionTitle';
import { projects } from '../../config';

import './Work.css';

export default function Work() {
	return (
		<div className='work contained'>
			<SectionTitle title='Some Things I’ve Built' />
			<div className='projects'>
				{projects.map(project => (
					<article key={project.name} className='project'>
						<img
							className='project-avatar'
							loading='lazy'
							src={project.imgSrc}
							title={project.name}
							alt='Project Avatar'
							draggable={false}
						/>
						<h4 className='project-name'>{project.name}</h4>
						<p className='project-desc'>{project.desc}</p>
						<ul className='project-tools'>
							{project.tools.map(tool => (
								<li key={tool}>{tool}</li>
							))}
						</ul>
						<ul className='project-links'>
							{project.links.map(link => (
								<li key={link.href}>
									<a
										href={link.href}
										target='_blank'
										title={link.title}
										rel='noreferrer'>
										<FontAwesomeIcon icon={link.icon} />
									</a>
								</li>
							))}
						</ul>
					</article>
				))}
			</div>
		</div>
	);
}
