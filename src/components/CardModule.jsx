import Btn from './Btn';
import Icons from './Icons';
import './style/cardModule.css';
const CardModule = ({ title, iconName }) => {
	return (
		<article className='card'>
			<h2 className='card__title'>{title}</h2>
			<Icons className='card__icon' iconName={iconName} type='module' />
			<Btn text='Entrar' className='btn card__btn' />
		</article>
	);
};
export default CardModule;
