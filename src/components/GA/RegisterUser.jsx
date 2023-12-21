import { useEffect } from 'react';
import { system } from '../../data/system';
import useGet from '../../hooks/useGet';
import useRegister from '../../hooks/useRegister';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import Btn from '../Btn';
import Input from '../Input';
import Select from '../Select';
import './style/register.css';

const initForm = {
	ci: '',
	name: '',
	surname: '',
	email: '',
	password: '',
	uidRol: '',
	uidSite: '',
};
const RegisterUser = ({
	isOpen,
	handelClose,
	handleList,
	siteValue,
	order,
}) => {
	const { validatePermissions } = useValidatePermissions();
	const { form, setForm, handleChange, handleSubmit, errors, data } =
		useRegister({
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.user.primary +
				system.routeApi.user.register,
		});
	const { handelFetch: handelFetchRol, data: dataRol } = useGet();
	const { handelFetch: handelFetchSite, data: dataSite } = useGet();
	useEffect(() => {
		if (data) {
			handleList({ uidSite: siteValue, orderProperty: order });
			setForm(initForm);
			handelClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	useEffect(() => {
		if (isOpen) {
			handelFetchRol({
				url:
					import.meta.env.VITE_ULR_API +
					system.routeApi.rol.primary +
					system.routeApi.rol.lisOfLimit,
			});
			handelFetchSite({
				url:
					import.meta.env.VITE_ULR_API +
					system.routeApi.site.primary +
					system.routeApi.site.lisOfLimit,
			});
			setForm({ ...form, uidSite: siteValue });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.user.register}</h2>
			<form onSubmit={handleSubmit} className='register__form'>
				<Input
					className='register__input'
					iconName={'ci'}
					name={'ci'}
					label={system.component.form.label.ci}
					placeholder={system.component.form.placeholder.ci}
					type='number'
					onChange={handleChange}
					value={form.ci}
					error={errors.ci}
				/>
				<Input
					className='register__input'
					iconName={'user'}
					name={'name'}
					label={system.component.form.label.name}
					placeholder={system.component.form.placeholder.name}
					value={form.name}
					onChange={handleChange}
					error={errors.name}
				/>
				<Input
					className='register__input'
					iconName={'user'}
					name={'surname'}
					label={system.component.form.label.surname}
					placeholder={system.component.form.placeholder.surname}
					value={form.surname}
					onChange={handleChange}
					error={errors.surname}
				/>
				<Input
					className='register__input'
					iconName={'email'}
					name={'email'}
					label={system.component.form.label.email}
					placeholder={system.component.form.placeholder.email}
					type='email'
					value={form.email}
					onChange={handleChange}
					error={errors.email}
				/>
				<Input
					className='register__input'
					iconName={'padlock'}
					name={'password'}
					label={system.component.form.label.password}
					placeholder={system.component.form.placeholder.password}
					type='password'
					onChange={handleChange}
					value={form.password}
					error={errors.password}
				/>
				<Select
					className='register__input'
					label={system.component.form.label.rol}
					name={'uidRol'}
					title={system.component.form.select.rol}
					value={form.uidRol}
					onChange={handleChange}
					error={errors.uidRol}
					data={dataRol?.map(item => ({ value: item.uid, label: item.name }))}
				/>
				{validatePermissions({ per: system.permissions.site }) && (
					<Select
						className='register__input'
						label={system.component.form.label.site}
						name={'uidSite'}
						title={system.component.form.select.site}
						value={form.uidSite}
						onChange={handleChange}
						error={errors.uidSite}
						data={dataSite?.map(item => ({
							value: item.uid,
							label: item.name,
						}))}
					/>
				)}
				<Btn
					className='btnStyle register__btn'
					text={system.component.btn.submit}
					type='submit'
				/>
			</form>
		</section>
	);
};
export default RegisterUser;
