/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import { system } from '../data/system';
import Icons from './Icons';
import './style/select.css';

const Select = ({
	name,
	title,
	valueDefault,
	onChange,
	value,
	data,
	className,
	label,
	error,
	iconName = 'arrow',
	disabled = true,
}) => {
	const [defaultValue, setDefaultValue] = useState('');
	const [open, setOpen] = useState(false);
	useEffect(() => {
		setDefaultValue(valueDefault);
	}, [valueDefault]);
	const handleOpen = () => setOpen(!open);
	const handleFocus = e => e.target.setAttribute('aria-selected', 'true');
	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			handleOpen();
		}
	};
	const handleKeyDownItem = e => {
		if (e.key === 'Enter') {
			handleClick(e);
		}
	};
	const handleClick = e => {
		setDefaultValue(e.target.dataset.value);
		const items = document.querySelectorAll('.selectPer__item');
		items.forEach(item => item.classList.remove('selectPer__item--active'));
		e.target.classList.toggle('selectPer__item--active');
		titleSelect.current.textContent = e.target.textContent;
		setOpen(false);
		const event = {
			target: {
				name,
				value: e.target.dataset.value,
			},
		};
		onChange(event);
	};
	useEffect(() => {
		if (value === '') {
			titleSelect.current.textContent = title;
			const items = document.querySelectorAll('.selectPer__item');
			items.forEach(item => item.classList.remove('selectPer__item--active'));
		}
	}, [value]);
	const titleDefault =
		data?.find(item => item.value === defaultValue)?.label || title;
	const titleSelect = useRef(null);
	return (
		<div className={`input ${className || ''}`}>
			{label && (
				<label htmlFor={name} className='input__label'>
					{label}:
				</label>
			)}
			<section className={`selectPer `} role='listbox'>
				<div
					className={`selectPer__content ${
						error && 'selectPer__content--error'
					}`}
					aria-label={system.component.form.select.aria}
					onClick={handleOpen}
					onKeyDown={handleKeyDown}
					tabIndex='0'
				>
					<strong
						className={`selectPer__title ${
							!disabled && 'selectPer__title--disabled'
						}`}
						ref={titleSelect}
					>
						{titleDefault}
					</strong>
					<div className='selectPer__contentIcon'>
						<Icons
							iconName={`${
								(error && 'interrogant') || !disabled ? 'padlock' : iconName
							}`}
							className={`selectPer__icon ${
								(error && 'selectPer__icon--show selectPer__icon--select') ||
								!disabled
									? 'selectPer__icon--select'
									: ''
							}`}
						/>
					</div>
				</div>
				{disabled && (
					<nav
						className={`selectPer__options ${
							open ? 'selectPer__options--show' : ''
						}`}
						role='menu'
					>
						<ul className='selectPer__ul'>
							{data?.map((item, index) => (
								<li
									tabIndex='0'
									key={item.value || index}
									className={`selectPer__item ${
										item.value === defaultValue ? 'selectPer__item--active' : ''
									}`}
									role='option'
									aria-selected={item.value === defaultValue}
									data-value={item.value}
									onClick={handleClick}
									onKeyDown={handleKeyDownItem}
									onFocus={handleFocus}
								>
									{item.label}
								</li>
							))}
						</ul>
					</nav>
				)}
				<input type='hidden' name={name} value={value} />
			</section>
			{error &&
				error.map((err, i) => (
					<p key={i} className='input__error'>
						{err[name]}
					</p>
				))}
		</div>
	);
};
export default Select;
