import { useEffect, useState } from 'react';
import { system } from '../data/system';
import Icons from './Icons';
import './style/input.css';
const DoubleInput = ({
	name,
	placeholder,
	error,
	iconName,
	type = 'text',
	onChange,
	label,
}) => {
	const [inputs, setInputs] = useState({});
	const handleChange = e => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};

	const handleDate = () => {
		const eve = {
			target: { name, value: `${inputs[name]} ${inputs.date}` },
		};
		onChange(eve);
	};

	useEffect(() => {
		handleDate();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputs]);

	return (
		<>
			<div className='input'>
				<label htmlFor={name} className='input__label'>
					{label || name}:
				</label>
				<div className='input__doubleInput'>
					<div className={`input__style ${error && 'input__style--show'}`}>
						<input
							type={type}
							id={name}
							name={name}
							placeholder={placeholder}
							onChange={handleChange}
							className={`input__input`}
							value={inputs.name}
						/>
						<div className='input__contentIcon'>
							<Icons
								iconName={`${error ? 'interrogant' : iconName}`}
								className={error && 'input__icon--show'}
							/>
						</div>
					</div>
					<div className={`input__style ${error && 'input__style--show'}`}>
						<select
							className='input__select'
							name='date'
							onChange={handleChange}
							value={inputs.date}
						>
							<option value='' disabled hidden>
								{`${system.component.doubleInput.select.dia}/${system.component.doubleInput.select.mes}/${system.component.doubleInput.select.año}`}
							</option>
							<option value='dia'>
								{system.component.doubleInput.select.dia}
							</option>
							<option value='mes'>
								{system.component.doubleInput.select.mes}
							</option>
							<option value='año'>
								{system.component.doubleInput.select.año}
							</option>
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
				</div>
				{error && <p className='input__error'>{error.msg}</p>}
			</div>
		</>
	);
};
export default DoubleInput;
