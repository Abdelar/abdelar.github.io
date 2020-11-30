import './SectionTitle.css';

export default function SectionTitle({ title }) {
	return (
		<h3 className=' section-title'>
			<span className='section-title-text'>{title}</span>
			<div className='section-title-line'></div>
		</h3>
	);
}
