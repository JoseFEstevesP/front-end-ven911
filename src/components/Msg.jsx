import { useContext, useEffect, useState } from 'react';
import { ContextMsg } from '../context/msg.context';
import Btn from './Btn';
import './style/msg.css';
const Msg = () => {
	const { msg } = useContext(ContextMsg);
	const [msgText, setMsgText] = useState('');
	const [isMsg, setIsMsg] = useState(false);
	const handleClose = () => {
		setIsMsg(false);
	};
	useEffect(() => {
		if (msg && (msg.msg || msg.uid)) {
			setIsMsg(true);
			setMsgText(msg.msg || msg.uid);
		}
		const timer = setTimeout(() => setIsMsg(false), 3500);
		return () => clearTimeout(timer);
	}, [msg]);
	return (
		<>
			<div
				className={`msg ${isMsg && 'msg--show'} ${
					msg?.type ? 'msg--incorrect' : ''
				}`}
			>
				<strong className='msg__text'>{msgText}</strong>
				<Btn
					nameIcon={'close'}
					className='msg__btn'
					handleClick={handleClose}
				/>
			</div>
		</>
	);
};
export default Msg;
