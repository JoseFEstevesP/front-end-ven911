/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { system } from '../../data/system';
import useUpdate from '../../hooks/useUpdate';
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
	serial: '',
	quantity: '',
	value: '',
	condition: '',
	dateOfAcquisition: '',
	location: '',
	warranty: '',
	remarks: '',
	codeBN: '',
};
const condition = [
	{ label: 'Operativo', value: 'operativo' },
	{ label: 'Averiado', value: 'averiado' },
	{ label: 'Desincorporado', value: 'desincorporado' },
];
const UpdateTechnology = ({
	handleClose,
	newData,
	handleList,
	siteValue,
	order,
}) => {
	const { form, setForm, handleChange, handleSubmit, errors, data } = useUpdate(
		{
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.technology.primary +
				system.routeApi.technology.update,
		},
	);
	useEffect(() => {
		if (newData) {
			setForm(newData);
		}
	}, [newData]);
	useEffect(() => {
		if (data) {
			handleList({ uidSite: siteValue, orderProperty: order });
			setForm(initForm);
			handleClose();
		}
	}, [data]);
	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.technology.update}</h2>
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
					iconName={'pc'}
					name={'brand'}
					label={system.component.form.label.brand}
					placeholder={system.component.form.placeholder.brand}
					onChange={handleChange}
					value={form.brand}
					error={errors.brand}
				/>
				<Input
					className='register__input'
					iconName={'pc'}
					name={'model'}
					label={system.component.form.label.model}
					placeholder={system.component.form.placeholder.model}
					onChange={handleChange}
					value={form.model}
					error={errors.model}
				/>
				<Input
					className='register__input'
					iconName={'code'}
					name={'serial'}
					label={system.component.form.label.serial}
					placeholder={system.component.form.placeholder.serial}
					onChange={handleChange}
					value={form.serial}
					error={errors.serial}
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
				<Input
					className='register__input'
					iconName={'bs'}
					name={'value'}
					type='number'
					label={system.component.form.label.value}
					placeholder={system.component.form.placeholder.value}
					onChange={handleChange}
					value={form.value}
					error={errors.value}
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
					iconName={'location'}
					name={'location'}
					label={system.component.form.label.location}
					placeholder={system.component.form.placeholder.location}
					onChange={handleChange}
					value={form.location}
					error={errors.location}
				/>
				<Input
					className='register__input'
					iconName={'shield'}
					name={'warranty'}
					label={system.component.form.label.warranty}
					placeholder={system.component.form.placeholder.warranty}
					onChange={handleChange}
					value={form.warranty}
					error={errors.warranty}
				/>
				<Input
					className='register__input'
					iconName={'shield'}
					name={'remarks'}
					label={system.component.form.label.remarks}
					placeholder={system.component.form.placeholder.remarks}
					onChange={handleChange}
					value={form.remarks}
					error={errors.remarks}
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
export default UpdateTechnology;
