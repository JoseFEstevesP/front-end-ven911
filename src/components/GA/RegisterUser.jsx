import { useEffect } from 'react';
import { system } from '../../data/system';
import useGet from '../../hooks/useGet';
import useRegister from '../../hooks/useRegister';
import Btn from '../Btn';
import Input from '../Input';
import Select from '../Select';
import './style/registerUser.css';
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
	setData,
	handleList,
	siteValue,
	order,
}) => {
	const { form, handleChange, handleSubmit, errors, data } = useRegister({
		initForm,
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.user.primary +
			system.routeApi.user.register,
		setData,
	});
	const { handelFetch: handelFetchRol, data: dataRol } = useGet();
	const { handelFetch: handelFetchSite, data: dataSite } = useGet();
	useEffect(() => {
		if (data) {
			handleList({ uidSite: siteValue, orderProperty: order });
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
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	return (
		<section className='registerUser'>
			<h2 className='registerUser__title'>Registro de usuario</h2>
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
export default RegisterUser;
