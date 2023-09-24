import { useCallback, useRef } from 'react';
import Btn from './Btn';

const MenuSubItem = ({ text, children }) => {
	const subMenu = useRef(null);
	const handelClick = useCallback(() => {
		subMenu.current.classList.toggle('menu__submenu--show');
	}, []);
	return (
		<li className='menu__li menu__subLi'>
			<Btn
				className='menu__subBtn'
				classIcon='menu__subIcon'
				text={text}
				nameIcon='arrow'
				handleClick={handelClick}
			/>
			<ul className='box menu__submenu' ref={subMenu}>
				{children}
			</ul>
		</li>
	);
};
export default MenuSubItem;
