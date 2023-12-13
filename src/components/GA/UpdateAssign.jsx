/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { system } from '../../data/system';
import useDataInventory from '../../hooks/useDataInventory';
import useUpdate from '../../hooks/useUpdate';
import Btn from '../Btn';
import Input from '../Input';
import Select from '../Select';
import './style/register.css';
const initForm = {
	uid: '',
	inventory: '',
	article: '',
	articleUid: '',
	department: '',
	quantity: '',
	description: '',
	remarks: '',
};
const inventory = [
	{ label: 'Consumibles', value: 'consumable' },
	{ label: 'Mobiliario', value: 'furniture' },
	{ label: 'Tecnología', value: 'technology' },
	{ label: 'Vehículo', value: 'vehicle' },
];
const UpdateAssign = ({
	handelClose,
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
				system.routeApi.assign.primary +
				system.routeApi.assign.update,
		},
	);
	const { data: dataInventory, handelDataInventory } = useDataInventory({
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.assign.primary +
			system.routeApi.assign.listInventory,
	});
	useEffect(() => {
		if (newData) {
			setForm(newData);
			handelDataInventory({ inventory: newData.inventory });
		}
	}, [newData]);
	useEffect(() => {
		if (data) {
			handleList({ uidSite: siteValue, orderProperty: order });
			setForm(initForm);
			handelClose();
		}
	}, [data]);
	useEffect(() => {
		if (form.inventory) {
			handelDataInventory({ inventory: form.inventory });
		}
	}, [form.inventory]);
	useEffect(() => {
		if (form?.articleUid) {
			const article = dataInventory?.find(
				item => item.uid === form?.articleUid,
			);
			setForm({
				...form,
				article: article?.description || newData.article,
			});
		}
	}, [form?.articleUid]);
	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.assign.update}</h2>
			<form
				onSubmit={handleSubmit}
				className='register__form register__form--update'
			>
				<Select
					className='register__input'
					label={system.component.form.label.inventory}
					name={'inventory'}
					title={system.component.form.select.inventory}
					value={form.inventory}
					onChange={handleChange}
					error={errors.inventory}
					data={inventory}
					valueDefault={newData?.inventory || form?.inventory}
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
					valueDefault={newData.articleUid}
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
export default UpdateAssign;
