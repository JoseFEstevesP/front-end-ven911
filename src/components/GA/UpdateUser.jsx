/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { system } from '../../data/system';
import useGet from '../../hooks/useGet';
import useUpdate from '../../hooks/useUpdate';
import Btn from '../Btn';
import Input from '../Input';
import Select from '../Select';
import './style/registerUser.css';
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
				url:
					import.meta.env.VITE_ULR_API +
					system.routeApi.site.primary +
					system.routeApi.site.lisOfLimit,
			});
		}
	}, [isOpen]);
	return (
		<section className='registerUser'>
			<h2 className='registerUser__title'>Actualizar de usuario</h2>
			<form onSubmit={handleSubmit} className='register'>
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
					label={'Rol del usuario'}
					name={'uidRol'}
					title={'Seleccione el Rol'}
					value={form.uidRol}
					onChange={handleChange}
					error={errors.uidRol}
				>
					{dataRol?.map(item => (
						<option key={item.uid} value={item.uid}>
							{item.name}
						</option>
					))}
				</Select>
				<Select
					className='register__input'
					label={'Sede del usuario'}
					name={'uidSite'}
					title={'Seleccione la sede'}
					value={form.uidSite}
					onChange={handleChange}
					error={errors.uidSite}
				>
					{dataSite?.map(item => (
						<option key={item.uid} value={item.uid}>
							{item.name}
						</option>
					))}
				</Select>
				<Btn
					className='btnStyle'
					text={system.component.btn.submit}
					type='submit'
				/>
			</form>
		</section>
	);
};
export default UpdateUser;
