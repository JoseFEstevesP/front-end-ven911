/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { dataStatus } from '../../data/dataOrder';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useUpdate from '../../hooks/useUpdate';
import useValidate from '../../hooks/useValidate';
import Btn from '../Btn';
import Input from '../Input';
import InputCalendar from '../InputCalendar';
import Select from '../Select';
import './style/register.css';
const initForm = {
	uid: '',
	description: '',
	brand: '',
	model: '',
	place: '',
	quantity: '',
	condition: '',
	dateOfAcquisition: '',
	codeBN: '',
	status: '',
	olStatus: '',
	fuelCapacity: '',
	currentFuel: '',
};
const condition = [
	{ label: 'Operativo', value: 'operativo' },
	{ label: 'Averiado', value: 'averiado' },
	{ label: 'Desincorporado', value: 'desincorporado' },
];
const UpdateVehicle = ({ handleClose, newData, handleList, filter }) => {
	const { validate } = useValidate();
	const { form, setForm, handleChange, handleSubmit, errors, data } = useUpdate(
		{
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.vehicle.primary +
				system.routeApi.vehicle.update,
		},
	);
	useEffect(() => {
		if (newData) {
			setForm(newData);
		}
	}, [newData]);
	useEffect(() => {
		if (data) {
			handleList({
				uidSite: filter.site,
				orderProperty: filter.order,
				status: filter?.status,
			});
			setForm(initForm);
			handleClose();
		}
	}, [data]);
	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.vehicle.update}</h2>
			<form
				onSubmit={handleSubmit}
				className='register__form register__form--update'
			>
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
					valueDefault={form.condition}
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
				{validate({ per: permissions.super }) && (
					<Select
						className='page__input'
						name={'status'}
						label={system.component.form.label.status}
						title={system.component.form.select.status}
						value={form.status}
						valueDefault={form.status}
						onChange={handleChange}
						data={dataStatus}
					/>
				)}
				<Input
					className='register__input'
					iconName={'fuel'}
					name={'fuelCapacity'}
					label={system.component.form.label.fuelCapacity}
					placeholder={system.component.form.placeholder.fuelCapacity}
					onChange={handleChange}
					value={form.fuelCapacity}
					error={errors.fuelCapacity}
				/>
				<Input
					className='register__input'
					iconName={'fuel'}
					name={'currentFuel'}
					label={system.component.form.label.currentFuel}
					placeholder={system.component.form.placeholder.currentFuel}
					onChange={handleChange}
					value={form.currentFuel}
					error={errors.currentFuel}
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
export default UpdateVehicle;
