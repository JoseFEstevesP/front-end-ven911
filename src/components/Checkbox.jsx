import { useEffect, useState } from 'react';
import Icons from './Icons';
import './style/checkbox.css';

const Checkbox = ({ value, title, onClick, checked = false }) => {
	const [check, setCheck] = useState(false);
	useEffect(() => {
		setCheck(checked);
	}, [checked]);
	const handleCheck = e => {
		onClick(
			e.target.parentElement.dataset?.value ||
				e.target.parentElement.parentElement.dataset?.value ||
				e.target.dataset.value,
		);
		setCheck(!check);
	};
	return (
		<>
			<button
				type='button'
				className='checkbox'
				onClick={handleCheck}
				data-value={value}
				role='checkbox'
				aria-checked={check}
				tabIndex='0'
			>
				<Icons
					iconName={check ? 'checked' : 'checkbox'}
					className='checkbox__icon'
				/>
				<span>{title}</span>
			</button>
		</>
	);
};
export default Checkbox;
