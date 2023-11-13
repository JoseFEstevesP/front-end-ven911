/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { system } from '../../data/system';
import useGet from '../../hooks/useGet';
import useUpdate from '../../hooks/useUpdate';
import Btn from '../Btn';
import Input from '../Input';
import Select from '../Select';
import './style/register.css';
const initForm = {
	uid: '',
	ci: '',
	name: '',
	surname: '',
	email: '',
	uidRol: '',
	uidSite: '',
};
const UpdateUser = ({
	isOpen,
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
				system.routeApi.user.primary +
				system.routeApi.user.update,
		},
	);
	const { handelFetch: handelFetchRol, data: dataRol } = useGet();
	const { handelFetch: handelFetchSite, data: dataSite } = useGet();
	useEffect(() => {
		if (newData) {
			setForm(newData);
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
		if (isOpen) {
			handelFetchRol({
				url:
					import.meta.env.VITE_ULR_API +
					system.routeApi.rol.primary +
					system.routeApi.rol.lisOfLimit,
			});
			handelFetchSite({
				url: validatePermissions({ per: system.permissions.site })
					? import.meta.env.VITE_ULR_API +
					  system.routeApi.site.primary +
					  system.routeApi.site.lisOfLimit
					: import.meta.env.VITE_ULR_API +
					  system.routeApi.site.primary +
					  system.routeApi.site.item +
					  site,
			});
		}
	}, [isOpen]);

	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.user.update}</h2>
			<form
				onSubmit={handleSubmit}
				className='register__form register__form--update'
			>
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
				<Select
					className='register__input'
					label={system.component.form.label.rol}
					name={'uidRol'}
					title={system.component.form.select.rol}
					value={form.uidRol}
					valueDefault={form.uidRol}
					onChange={handleChange}
					error={errors.uidRol}
					data={dataRol?.map(item => ({ value: item.uid, label: item.name }))}
				/>
				<Select
					className='register__input'
					label={system.component.form.label.site}
					name={'uidSite'}
					title={system.component.form.select.site}
					value={form.uidSite}
					valueDefault={form.uidSite}
					onChange={handleChange}
					error={errors.uidSite}
					data={dataSite?.map(item => ({ value: item.uid, label: item.name }))}
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
export default UpdateUser;
