import { useEffect } from 'react';
import { system } from '../../data/system';
import useRegister from '../../hooks/useRegister';
import Btn from '../Btn';
import Input from '../Input';
import Select from '../Select';
import './style/register.css';
const initForm = {
	goods: '',
	problem: '',
	symptoms: '',
	proposedSolution: '',
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
const RegisterBreakdownReport = ({
	handelClose,
	handleList,
	siteValue,
	order,
}) => {
	const { form, setForm, handleChange, handleSubmit, errors, data } =
		useRegister({
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.breakdownReport.primary +
				system.routeApi.breakdownReport.register,
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
			<h2 className='register__title'>
				{system.component.breakdownReport.register}
			</h2>
			<form onSubmit={handleSubmit} className='register__form'>
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
				<Input
					className='register__input'
					iconName={'description'}
					name={'symptoms'}
					label={system.component.form.label.symptoms}
					placeholder={system.component.form.placeholder.symptoms}
					onChange={handleChange}
					value={form.symptoms}
					error={errors.symptoms}
				/>
				<Input
					className='register__input'
					iconName={'gears'}
					name={'proposedSolution'}
					label={system.component.form.label.proposedSolution}
					placeholder={system.component.form.placeholder.proposedSolution}
					onChange={handleChange}
					value={form.proposedSolution}
					error={errors.proposedSolution}
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
				<Select
					className='register__input'
					label={system.component.form.label.breakdownDepartment}
					name={'breakdownDepartment'}
					title={system.component.form.select.breakdownDepartment}
					value={form.breakdownDepartment}
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
export default RegisterBreakdownReport;
