import moment from 'moment';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import Btn from './Btn';
import './style/calendar.css';
import './style/input.css';
import './style/inputCalendar.css';

const InputCalendar = ({
	name,
	placeholder,
	error,
	onChange,
	value,
	label,
	className,
}) => {
	const [open, setOpen] = useState(false);
	const [valueCalendar, setValueCalendar] = useState(null);
	useEffect(() => {
		if (valueCalendar) {
			const e = {
				target: { name, value: moment(valueCalendar).format('YYYY-MM-DD') },
			};
			onChange(e);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [valueCalendar]);
	const handleOpen = () => {
		setOpen(!open);
	};
	return (
		<>
			<div className={`input ${className}`}>
				{label && (
					<label htmlFor={name} className='input__label'>
						{label}:
					</label>
				)}
				<section className='inputCalendar'>
					<div className={`input__style ${error && 'input__style--show'}`}>
						<input
							type={'date'}
							id={name}
							name={name}
							placeholder={placeholder}
							onChange={onChange}
							value={value}
							className={`input__input `}
						/>
						<div className='input__contentIcon'>
							{<Btn nameIcon={'calendar'} handleClick={handleOpen} />}
						</div>
					</div>
					{/* {open && ( */}
					<Calendar
						className={`inputCalendar__calendar ${
							open ? 'inputCalendar__calendar--show' : ''
						}`}
						locale='es-VE'
						onChange={value => setValueCalendar(value)}
						value={valueCalendar}
					/>
					{/* )} */}
				</section>
				{error &&
					error.map((err, i) => (
						<p key={i} className='input__error'>
							{err[name]}
						</p>
					))}
			</div>
		</>
	);
};
export default InputCalendar;
