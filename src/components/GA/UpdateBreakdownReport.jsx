/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { system } from '../../data/system';
import useUpdate from '../../hooks/useUpdate';
import Btn from '../Btn';
import Input from '../Input';
import Select from '../Select';
import './style/register.css';
const initForm = {
	goods: '',
	problem: '',
	condition: '',
	breakdownDepartment: '',
	location: '',
	serialOrCodeBN: '',
};
const condition = [
	{ label: 'Averia menor', value: 'averia menor' },
	{ label: 'Averia mayor', value: 'averia mayor' },
];
const breakdownDepartment = [{ label: 'Tecnologia', value: 'tecnologia' }];
const UpdateBreakdownReport = ({
	handleClose,
	newData,
	handleList,
	filter,
}) => {
	const { form, setForm, handleChange, handleSubmit, errors, data } = useUpdate(
		{
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.breakdownReport.primary +
				system.routeApi.breakdownReport.update,
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
			<h2 className='register__title'>
				{system.component.breakdownReport.update}
			</h2>
			<form
				onSubmit={handleSubmit}
				className='register__form register__form--update'
			>
				<Input
					className='register__input'
					iconName={'furniture'}
					name={'goods'}
					label={system.component.form.label.goods}
					placeholder={system.component.form.placeholder.goods}
					onChange={handleChange}
					value={form.goods}
					error={errors.goods}
				/>
				<Input
					className='register__input'
					iconName={'description'}
					name={'problem'}
					label={system.component.form.label.problem}
					placeholder={system.component.form.placeholder.problem}
					onChange={handleChange}
					value={form.problem}
					error={errors.problem}
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
				<Select
					className='register__input'
					label={system.component.form.label.breakdownDepartment}
					name={'breakdownDepartment'}
					title={system.component.form.select.breakdownDepartment}
					value={form.breakdownDepartment}
					valueDefault={form.breakdownDepartment}
					onChange={handleChange}
					error={errors.breakdownDepartment}
					data={breakdownDepartment}
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
					iconName={'code'}
					name={'serialOrCodeBN'}
					label={system.component.form.label.serialOrCodeBN}
					placeholder={system.component.form.placeholder.serialOrCodeBN}
					onChange={handleChange}
					value={form.serialOrCodeBN}
					error={errors.serialOrCodeBN}
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
export default UpdateBreakdownReport;
