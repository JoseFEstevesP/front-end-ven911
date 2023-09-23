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
	return (
		<>
			<div className='input'>
				<label htmlFor={name} className='input__label'>
					{label || name}:
				</label>
				<div className={`input__style ${error && 'input__style--show'}`}>
					<input
						type={type}
						id={name}
						name={name}
						placeholder={placeholder}
						onChange={onChange}
						value={value}
						className={`input__input ${
							type === 'date' ? 'input__input--date' : ''
						}`}
					/>
					<div className='input__contentIcon'>
						<Icons
							iconName={`${error ? 'interrogant' : iconName}`}
							className={error && 'input__icon--show'}
						/>
					</div>
				</div>
				{error && <p className='input__error'>{error.msg}</p>}
			</div>
		</>
	);
};
export default Input;
