import { useEffect } from 'react';
import Btn from './Btn';
import './style/modal.css';
const Modal = ({ isOpen, children, close }) => {
	useEffect(() => {
		if (isOpen) {
			document.documentElement.classList.add('none');
		} else {
			document.documentElement.classList.remove('none');
		}
	}, [isOpen]);
	return (
		<>
			<div className={`modal ${isOpen && 'modal--show'}`} onClick={close}>
				<section className='modal__content box'>
					<Btn nameIcon='close' className='modal__btn' handleClick={close} />
					{children}
				</section>
			</div>
		</>
	);
};
export default Modal;
