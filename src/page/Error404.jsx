import { Link } from 'react-router-dom';
import Page from '../components/Page';
import Icons from '../components/Icons';
import './style/error404.css';
const Error404 = () => {
	return (
		<Page title={'404'}>
			<section className='error404'>
				<Link to={'/'} className='error404__link'>
					<Icons iconName={'logo'} className={'error404__icon'} />
				</Link>
				<div className='error404__contentText'>
					<h1 className='error404__title'>404</h1>
					<p className='error404__text'>
						Parece que estas en una ruta errónea. <br /> Por favor verifique
					</p>
				</div>
			</section>
		</Page>
	);
};
export default Error404;
