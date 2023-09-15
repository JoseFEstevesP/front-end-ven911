import { NavLink } from 'react-router-dom';

const MenuItem = ({ to, text }) => {
	return (
		<li className='menu__li'>
			<NavLink
				to={to}
				className={({ isActive }) =>
					`menu__a ${isActive ? 'menu__a--active' : ''}`
				}
			>
				{text}
			</NavLink>
		</li>
	);
};
export default MenuItem;
