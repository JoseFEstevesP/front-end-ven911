import { memo, useCallback, useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ContextToken } from '../context/TokenContext';
import { permissions } from '../data/dataPermissions';
import { system } from '../data/system';
import useExit from '../hooks/useExit';
import useValidate from '../hooks/useValidate';
import Btn from './Btn';
import Icons from './Icons';
import Theme from './Theme';
import './style/menu.css';

const Menu = memo(({ children, className, route }) => {
	// Obtiene la función de validación del contexto
	const { validate } = useValidate();
	// Obtiene el token del contexto
	const { token } = useContext(ContextToken);
	// Estado para el menú
	const [menu, setMenu] = useState(null);
	// Estado para la barra
	const [bar, setBar] = useState(null);
	// Estado para el perfil
	const [profile, setProfile] = useState(null);
	// Obtiene la función de salida del hook useExit
	const { handleClickExit } = useExit();

	// Función para manejar el clic en el botón del menú
	const handleClick = useCallback(() => {
		document.body.classList.toggle('none');
		menu.classList.toggle('menu__menu--show');
		bar.classList.toggle('menu__bar--show');
	}, [menu, bar]);

	// Función para manejar el clic en el enlace de inicio
	const handleHome = useCallback(() => {
		document.body.classList.remove('none');
		menu.classList.remove('menu__menu--show');
		bar.classList.remove('menu__bar--show');
	}, [menu, bar]);

	// Función para manejar el clic en el perfil
	const handleProfile = useCallback(() => {
		profile.classList.toggle('menu__profileAndExit--show');
	}, [profile]);

	// Función para manejar la salida
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const handleExit = useCallback(() => handleClickExit(), []);

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
						<div className='menu__bar' ref={setBar}></div>
					</button>
				</div>
				<nav className='menu__menu' ref={setMenu}>
					<ul className='menu__ul'>
						{children}
						{token && (
							<li className='menu__li menu__li--profileAndExit'>
								<Btn
									nameIcon='user'
									className='menu__btnProfile'
									handleClick={handleProfile}
								/>
								<ul className='menu__profileAndExit' ref={setProfile}>
									{validate({ per: permissions.profile }) && (
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
});
Menu.displayName = 'Menu';
export default Menu;
