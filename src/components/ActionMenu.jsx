import { useEffect, useState } from 'react';
import Btn from './Btn';
import './style/actionMenu.css';
const ActionMenu = ({ children, close }) => {
	const [show, setShow] = useState(false);
	useEffect(() => {
		setShow(close);
	}, [close]);
	const handelMenu = () => setShow(!show);
	return (
		<>
			<section className='popupMenu'>
				<nav
					className={`popupMenu__menu ${show ? 'popupMenu__menu--show' : ''}`}
				>
					<ul className='popupMenu__menuContent'>{children}</ul>
				</nav>
				<h2 className='popupMenu__title'>
					<Btn
						className={'popupMenu__btn'}
						handleClick={handelMenu}
						nameIcon={'interrogant'}
					/>
				</h2>
			</section>
		</>
	);
};
export default ActionMenu;
