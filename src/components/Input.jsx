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
}) => {
	const [password, setPassword] = useState(true);
	const handlePassword = () => {
		setPassword(!password);
	};
	return (
		<>
			<div className='input'>
				<label htmlFor={name} className='input__label'>
					{label || name}:
				</label>
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
					<div className='input__contentIcon'>
						{type === 'password' ? (
							error ? (
								<Icons
									iconName={`${error ? 'interrogant' : iconName}`}
									className={error && 'input__icon--show'}
								/>
							) : (
								<Btn
									nameIcon={`${password ? 'eye_hidden' : 'eye_visible'}`}
									handleClick={handlePassword}
								/>
							)
						) : (
							<Icons
								iconName={`${error ? 'interrogant' : iconName}`}
								className={error && 'input__icon--show'}
							/>
						)}
					</div>
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
