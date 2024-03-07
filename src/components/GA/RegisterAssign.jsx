/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { inventory } from '../../data/dataInventory';
import { system } from '../../data/system';
import useDataInventory from '../../hooks/useDataInventory';
import useRegister from '../../hooks/useRegister';
import Btn from '../Btn';
import Input from '../Input';
import Select from '../Select';
import './style/register.css';
const initForm = {
	inventory: '',
	article: '',
	articleUid: '',
	department: '',
	quantity: '',
	description: '',
	remarks: '',
};
const RegisterAssign = ({ handleClose, handleList, filter }) => {
	const { form, setForm, handleChange, handleSubmit, errors, data } =
		useRegister({
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.assign.primary +
				system.routeApi.assign.register,
		});
	const { data: dataInventory, handleDataInventory } = useDataInventory({
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.assign.primary +
			system.routeApi.assign.listInventory,
	});
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
	useEffect(() => {
		if (form.inventory) {
			handleDataInventory({ inventory: form.inventory });
		}
	}, [form.inventory]);
	useEffect(() => {
		const article = dataInventory?.find(item => item.uid === form?.articleUid);
		setForm({ ...form, article: article?.description });
	}, [form?.articleUid]);
	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.assign.register}</h2>
			<form onSubmit={handleSubmit} className='register__form'>
				<Select
					className='register__input'
					label={system.component.form.label.inventory}
					name={'inventory'}
					title={system.component.form.select.inventory}
					value={form.inventory}
					onChange={handleChange}
					error={errors.inventory}
					data={inventory}
				/>
				<Select
					className='register__input'
					label={system.component.form.label.article}
					name={'articleUid'}
					title={system.component.form.select.article}
					value={form.articleUid}
					onChange={handleChange}
					error={errors.articleUid}
					data={dataInventory?.map(item => ({
						label: `${item.description} ${item.quantityAndAssign}`,
						value: item.uid,
					}))}
				/>
				<Input
					className='register__input'
					iconName={'department'}
					name={'department'}
					label={system.component.form.label.department}
					placeholder={system.component.form.placeholder.department}
					onChange={handleChange}
					value={form.department}
					error={errors.department}
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
					iconName={'description'}
					name={'description'}
					label={system.component.form.label.description}
					placeholder={system.component.form.placeholder.description}
					onChange={handleChange}
					value={form.description}
					error={errors.description}
				/>{' '}
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
				<Btn
					className='btnStyle register__btn'
					text={system.component.btn.submit}
					type='submit'
				/>
			</form>
		</section>
	);
};
export default RegisterAssign;
