import { memo } from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = memo(({ to, text }) => {
	return (
		<li className='menu__li'>
			<NavLink
				to={to}
				className={({ isActive }) => {
					return `menu__a ${isActive ? 'menu__a--active' : ''}`;
				}}
				end
			>
				{text}
			</NavLink>
		</li>
	);
});
MenuItem.displayName = 'MenuItem';
export default MenuItem;
