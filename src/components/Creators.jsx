import { system } from '../data/system';
import './style/creators.css';
const Creators = () => {
	return (
		<>
			<div className='creators'>
				<h2 className='creators__title'>
					{system.component.footer.creator.title}
				</h2>
				<ul className='creators__list'>
					<li>
						<a
							href={system.component.footer.creator.creators.JE.portfolio}
							rel='noopener noreferrer'
							target='_blank'
							className='creators__enlace'
						>
							{system.component.footer.creator.creators.JE.data}
						</a>
					</li>
					<li className='creators__item'>
						{system.component.footer.creator.creators.FM.data}
					</li>
					<li className='creators__item'>
						{system.component.footer.creator.creators.CLC.data}
					</li>
					<li className='creators__item'>
						{system.component.footer.creator.creators.CF.data}
					</li>
				</ul>
			</div>
		</>
	);
};
export default Creators;
