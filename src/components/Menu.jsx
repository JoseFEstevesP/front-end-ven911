import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { system } from '../data/system';
import Btn from './Btn';
import Icons from './Icons';
import Theme from './Theme';
import './style/menu.css';
const Menu = ({ children }) => {
	const menu = useRef(null);
	const bar = useRef(null);
	const profile = useRef(null);
	const handleClick = () => {
		document.body.classList.toggle('none');
		menu.current.classList.toggle('menu__menu--show');
		bar.current.classList.toggle('menu__bar--show');
	};
	const handleHome = () => {
		document.body.classList.remove('none');
		menu.current.classList.remove('menu__menu--show');
		bar.current.classList.remove('menu__bar--show');
	};
	const handleProfile = () => {
		profile.current.classList.toggle('menu__profileAndExit--show');
	};
	return (
		<>
			<section className='menu'>
				<Link to='/' onClick={handleHome}>
					<h1 className='menu__title'>
						{<Icons iconName='logo' className='menu__icon' />}
						{`${system.component.menu.title}`}
					</h1>
				</Link>
				<div className='menu__contentBtn'>
					<button className='menu__btn' onClick={handleClick} type='button'>
						<div className='menu__bar' ref={bar}></div>
					</button>
				</div>
				<nav className='menu__menu' ref={menu}>
					<ul className='menu__ul'>
						{children}
						<li className='menu__li menu__li--profileAndExit'>
							<Btn
								nameIcon='user'
								className='menu__btnProfile'
								handleClick={handleProfile}
							/>
							<ul className='menu__profileAndExit' ref={profile}>
								<li className='menu__profileAndExitItem'>
									<Link to='/profile'>
										<Icons iconName='user' />
									</Link>
								</li>
								<li className='menu__profileAndExitItem'>
									<Btn nameIcon='exit' className='menu__btnExit' />
								</li>
							</ul>
						</li>
					</ul>
				</nav>
				<Theme />
			</section>
		</>
	);
};
export default Menu;
