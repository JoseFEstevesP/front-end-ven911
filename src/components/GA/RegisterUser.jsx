import { useEffect } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useGet from '../../hooks/useGet';
import useRegister from '../../hooks/useRegister';
import useValidate from '../../hooks/useValidate';
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
const urlRol = import.meta.env.VITE_ULR_API + system.routeApi.rol.primary;
const urlSite = import.meta.env.VITE_ULR_API + system.routeApi.site.primary;
const urlUser = import.meta.env.VITE_ULR_API + system.routeApi.user.primary;

const RegisterUser = ({ isOpen, handleClose, handleList, filter }) => {
	const { validate } = useValidate();
	const { form, setForm, handleChange, handleSubmit, errors, data } =
		useRegister({
			initForm,
			url: urlUser + system.routeApi.user.register,
		});
	const { handleFetch: handleFetchRol, data: dataRol } = useGet();
	const { handleFetch: handleFetchSite, data: dataSite } = useGet();
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
	useEffect(() => {
		if (isOpen) {
			handleFetchRol({
				url: urlRol + system.routeApi.rol.lisOfLimit,
			});
			if (validate({ per: permissions.siteAssignation })) {
				handleFetchSite({
					url: urlSite + system.routeApi.site.lisOfLimit,
				});
			}
			setForm({ ...form, uidSite: filter.site });
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
				{validate({ per: permissions.siteAssignation }) && (
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
