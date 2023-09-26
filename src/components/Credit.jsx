import { system } from '../data/system';
import './style/credit.css';
const Credit = () => {
	return (
		<>
			<div className='credit'>
				<h2 className='credit__title'>
					{system.component.footer.credit.title}
				</h2>
				<span className='credit__subTitle'>
					{system.component.footer.credit.creditIcon.title}
				</span>
				<ul className='credit__list'>
					<li>
						<a
							href={
								system.component.footer.credit.creditIcon.presentationIcon.url
							}
							rel='noopener noreferrer'
							target='_blank'
							className='credit__enlace'
						>
							{system.component.footer.credit.creditIcon.presentationIcon.title}
						</a>
					</li>
					<li>
						<a
							href={system.component.footer.credit.creditIcon.ambulanceIcon.url}
							rel='noopener noreferrer'
							target='_blank'
							className='credit__enlace'
						>
							{system.component.footer.credit.creditIcon.ambulanceIcon.title}
						</a>
					</li>
					<li>
						<a
							href={system.component.footer.credit.creditIcon.boydIcon.url}
							rel='noopener noreferrer'
							target='_blank'
							className='credit__enlace'
						>
							{system.component.footer.credit.creditIcon.boydIcon.title}
						</a>
					</li>
					<li>
						<a
							href={system.component.footer.credit.creditIcon.pazIcon.url}
							rel='noopener noreferrer'
							target='_blank'
							className='credit__enlace'
						>
							{system.component.footer.credit.creditIcon.pazIcon.title}
						</a>
					</li>
					<li>
						<a
							href={system.component.footer.credit.creditIcon.personalIcon.url}
							rel='noopener noreferrer'
							target='_blank'
							className='credit__enlace'
						>
							{system.component.footer.credit.creditIcon.personalIcon.title}
						</a>
					</li>
					<li>
						<a
							href={system.component.footer.credit.creditIcon.budgetIcon.url}
							rel='noopener noreferrer'
							target='_blank'
							className='credit__enlace'
						>
							{system.component.footer.credit.creditIcon.budgetIcon.title}
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};
export default Credit;
