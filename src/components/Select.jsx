// TODO: refactorizar este componente para que sea un "select" personalizado para su fácil manejo de los datos
import Icons from './Icons';
import './style/input.css';
const Select = ({
	name,
	error,
	onChange,
	value = '',
	label,
	title,
	children,
	className,
}) => {
	return (
		<>
			<div className={`input ${className}`}>
				{label && (
					<label htmlFor={name} className='input__label'>
						{label}:
					</label>
				)}
				<div className={`input__style ${error && 'input__style--show'}`}>
					<select
						className='input__select'
						name={name}
						id={name}
						onChange={onChange}
						value={value}
					>
						<option value='' disabled hidden>
							{title}
						</option>
						{children}
					</select>

					<div className='input__contentIcon'>
						<Icons
							iconName={`${error ? 'interrogant' : 'arrow'}`}
							className={`input__icon ${
								error && 'input__icon--show input__icon--select'
							}`}
						/>
					</div>
				</div>
				{error && <p className='input__error'>{error.msg}</p>}
			</div>
		</>
	);
};
export default Select;
