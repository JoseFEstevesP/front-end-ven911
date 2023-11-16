import { useEffect } from 'react';
import { system } from '../../data/system';
import useRegister from '../../hooks/useRegister';
import Btn from '../Btn';
import Input from '../Input';
import './style/register.css';
const initForm = {
	product: '',
	serial: '',
	brand: '',
	model: '',
	dateOfPurchase: '',
	value: '',
	quantity: '',
	supplier: '',
	warranty: '',
	orderNumber: '',
	location: '',
};
const RegisterPurchase = ({ handelClose, handleList, siteValue, order }) => {
	const { form, setForm, handleChange, handleSubmit, errors, data } =
		useRegister({
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.purchase.primary +
				system.routeApi.purchase.register,
		});
	useEffect(() => {
		if (data) {
			handleList({ uidSite: siteValue, orderProperty: order });
			setForm(initForm);
			handelClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.purchase.register}</h2>
			<form onSubmit={handleSubmit} className='register__form'>
				<Input
					className='register__input'
					iconName={'cart'}
					name={'product'}
					label={system.component.form.label.product}
					placeholder={system.component.form.placeholder.product}
					onChange={handleChange}
					value={form.product}
					error={errors.product}
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
					iconName={'box'}
					name={'brand'}
					label={system.component.form.label.brand}
					placeholder={system.component.form.placeholder.brand}
					onChange={handleChange}
					value={form.brand}
					error={errors.brand}
				/>
				<Input
					className='register__input'
					iconName={'box'}
					name={'model'}
					label={system.component.form.label.model}
					placeholder={system.component.form.placeholder.model}
					onChange={handleChange}
					value={form.model}
					error={errors.model}
				/>
				<Input
					className='register__input'
					iconName={'calendar'}
					name={'dateOfPurchase'}
					type='date'
					label={system.component.form.label.dateOfPurchase}
					onChange={handleChange}
					value={form.dateOfPurchase}
					error={errors.dateOfPurchase}
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
					iconName={'box'}
					name={'supplier'}
					label={system.component.form.label.supplier}
					placeholder={system.component.form.placeholder.supplier}
					onChange={handleChange}
					value={form.supplier}
					error={errors.supplier}
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
					iconName={'number'}
					name={'orderNumber'}
					label={system.component.form.label.orderNumber}
					placeholder={system.component.form.placeholder.orderNumber}
					type='number'
					onChange={handleChange}
					value={form.orderNumber}
					error={errors.orderNumber}
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
				<Btn
					className='btnStyle register__btn'
					text={system.component.btn.submit}
					type='submit'
				/>
			</form>
		</section>
	);
};
export default RegisterPurchase;
