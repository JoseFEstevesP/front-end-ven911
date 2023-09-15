import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Btn from './Btn';
import Icons from './Icons';
import './style/menu.css';
const Menu = ({ children }) => {
	const menu = useRef(null);
	const bar = useRef(null);
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

	return (
		<>
			<section className='menu'>
				<Link to='/' onClick={handleHome}>
					<h1 className='menu__title'>
						{<Icons iconName='logo' className='menu__icon' />}S.U.C.I 911
					</h1>
				</Link>
				<div className='menu__contentBtn'>
					<button className='menu__btn' onClick={handleClick}>
						<div className='menu__bar' ref={bar}></div>
					</button>
				</div>
				<nav className='menu__menu' ref={menu} onClick={handleClick}>
					<ul className='menu__ul'>{children}</ul>
				</nav>
				<Btn nameIcon='sun' className='menu__btnTheme' />
			</section>
		</>
	);
};
export default Menu;
