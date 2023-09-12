import { Link } from 'react-router-dom';
import Icons from './Icons';
import './style/cardModule.css';
const CardModule = ({ title, iconName, to }) => {
	return (
		<article className='card'>
			<h2 className='card__title'>{title}</h2>
			<Icons className='card__icon' iconName={iconName} type='module' />
			<Link className='card__link' to={to}>
				Entrar
			</Link>
		</article>
	);
};
export default CardModule;
