import { useContext, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContextToken } from '../context/TokenContext';
import { system } from '../data/system';
import useExit from '../hooks/useExit';
import useValidatePermissions from '../hooks/useValidatePermissions';
import Btn from './Btn';
import Icons from './Icons';
import Theme from './Theme';
import './style/menu.css';
import { permissions } from '../data/dataPermissions';
const Menu = ({ children, className, route }) => {
	const { validatePermissions } = useValidatePermissions();
	const menu = useRef(null);
	const bar = useRef(null);
	const profile = useRef(null);
	const { handelClickExit } = useExit();
	const { token } = useContext(ContextToken);
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
	const handleExit = () => handelClickExit();

	return (
		<>
			<section className={`menu ${className}`}>
				<Link to='/' onClick={handleHome}>
					<h1 className='menu__title'>
						{<Icons iconName='logo' className='menu__icon' />}
						{`${system.title}`}
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
						{token && (
							<li className='menu__li menu__li--profileAndExit'>
								<Btn
									nameIcon='user'
									className='menu__btnProfile'
									handleClick={handleProfile}
								/>
								<ul className='menu__profileAndExit' ref={profile}>
									{validatePermissions({ per: permissions.profile }) && (
										<li className='menu__profileAndExitItem'>
											<NavLink
												to={route + system.routeApi.user.profile}
												className={({ isActive }) =>
													`${isActive ? 'menu__a--active' : ''}`
												}
												end
											>
												<Icons iconName='user' />
											</NavLink>
										</li>
									)}
									<li className='menu__profileAndExitItem'>
										<Btn
											nameIcon='exit'
											className='menu__btnExit'
											handleClick={handleExit}
										/>
									</li>
								</ul>
							</li>
						)}
					</ul>
				</nav>
				<Theme />
			</section>
		</>
	);
};
export default Menu;
