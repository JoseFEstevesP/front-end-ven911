import { useEffect } from 'react';
import { system } from '../../data/system';
import useRegister from '../../hooks/useRegister';
import Btn from '../Btn';
import Input from '../Input';
import InputCalendar from '../InputCalendar';
import Select from '../Select';
import './style/register.css';
const initForm = {
	description: '',
	brand: '',
	model: '',
	place: '',
	quantity: '',
	condition: '',
	dateOfAcquisition: '',
	codeBN: '',
};
const condition = [
	{ label: 'Operativo', value: 'operativo' },
	{ label: 'Averiado', value: 'averiado' },
	{ label: 'Desincorporado', value: 'desincorporado' },
];
const urlVehicle =
	import.meta.env.VITE_ULR_API + system.routeApi.vehicle.primary;
const RegisterVehicle = ({ handleClose, handleList, filter }) => {
	const { form, setForm, handleChange, handleSubmit, errors, data } =
		useRegister({
			initForm,
			url: urlVehicle + system.routeApi.vehicle.register,
		});
	useEffect(() => {
		if (data) {
			handleList({
				uidSite: filter.site,
				orderProperty: filter.order,
				status: filter.status,
			});
			setForm(initForm);
			handleClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.vehicle.register}</h2>
			<form onSubmit={handleSubmit} className='register__form'>
				<Input
					className='register__input'
					iconName={'description'}
					name={'description'}
					label={system.component.form.label.description}
					placeholder={system.component.form.placeholder.description}
					onChange={handleChange}
					value={form.description}
					error={errors.description}
				/>
				<Input
					className='register__input'
					iconName={'car'}
					name={'brand'}
					label={system.component.form.label.brand}
					placeholder={system.component.form.placeholder.brand}
					onChange={handleChange}
					value={form.brand}
					error={errors.brand}
				/>
				<Input
					className='register__input'
					iconName={'car'}
					name={'model'}
					label={system.component.form.label.model}
					placeholder={system.component.form.placeholder.model}
					onChange={handleChange}
					value={form.model}
					error={errors.model}
				/>
				<Input
					className='register__input'
					iconName={'car'}
					name={'place'}
					label={system.component.form.label.place}
					placeholder={system.component.form.placeholder.place}
					onChange={handleChange}
					value={form.place}
					error={errors.place}
				/>
				<Input
					className='register__input'
					iconName={'number'}
					name={'quantity'}
					type='number'
					label={system.component.form.label.quantity}
					placeholder={system.component.form.placeholder.quantity}
					onChange={handleChange}
					value={form.quantity}
					error={errors.quantity}
				/>
				<Select
					className='register__input'
					label={system.component.form.label.condition}
					name={'condition'}
					title={system.component.form.select.condition}
					value={form.condition}
					onChange={handleChange}
					error={errors.condition}
					data={condition}
				/>
				<InputCalendar
					className='register__input'
					name={'dateOfAcquisition'}
					label={system.component.form.label.dateOfAcquisition}
					onChange={handleChange}
					value={form.dateOfAcquisition}
					error={errors.dateOfAcquisition}
				/>
				<Input
					className='register__input'
					iconName={'code'}
					name={'codeBN'}
					label={system.component.form.label.codeBN}
					placeholder={system.component.form.placeholder.codeBN}
					onChange={handleChange}
					value={form.codeBN}
					error={errors.codeBN}
				/>
				<Btn
					className='btnStyle register__btn'
					text={system.component.btn.submit}
					type='submit'
				/>
			</form>
		</section>
	);
};
export default RegisterVehicle;
