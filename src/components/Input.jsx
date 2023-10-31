import { useState } from 'react';
import Btn from './Btn';
import Icons from './Icons';
import './style/input.css';
const Input = ({
	name,
	placeholder,
	error,
	iconName,
	type = 'text',
	onChange,
	value,
	label,
	className,
}) => {
	const [password, setPassword] = useState(true);
	const handlePassword = () => {
		setPassword(!password);
	};
	const renderBtn = ({ type }) => {
		if (type === 'password') {
			return (
				<Btn
					nameIcon={`${password ? 'eye_hidden' : 'eye_visible'}`}
					handleClick={handlePassword}
				/>
			);
		} else if (type === 'search') {
			return <Btn nameIcon={'search'} type='submit' />;
		} else {
			return (
				<Icons
					iconName={`${error ? 'interrogant' : iconName}`}
					className={error && 'input__icon--show'}
				/>
			);
		}
	};
	return (
		<>
			<div className={`input ${className}`}>
				{label && (
					<label htmlFor={name} className='input__label'>
						{label}:
					</label>
				)}
				<div className={`input__style ${error && 'input__style--show'}`}>
					<input
						type={password ? type : 'text'}
						id={name}
						name={name}
						placeholder={placeholder}
						onChange={onChange}
						value={value}
						className={`input__input 
						${type === 'date' ? 'input__input--date' : ''}
						`}
					/>
					<div className='input__contentIcon'>{renderBtn({ type })}</div>
				</div>
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
export default Input;
