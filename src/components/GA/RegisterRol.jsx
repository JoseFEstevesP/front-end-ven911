/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { system } from '../../data/system';
import usePermission from '../../hooks/GA/usePermission';
import useRegister from '../../hooks/useRegister';
import Btn from '../Btn';
import Checkbox from '../Checkbox';
import Input from '../Input';
import '../style/input.css';
import './style/register.css';
import './style/registerRol.css';

const initForm = {
	name: '',
	permissions: '',
};
const perSystem = [
	{
		uid: crypto.randomUUID(),
		label: 'Super usuario',
		value: 'SUPER',
	},
	{
		uid: crypto.randomUUID(),
		label: 'Perfil',
		value: 'PROFILE',
	},
	{ uid: crypto.randomUUID(), label: 'Crear', value: 'CREATE' },
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: 'UPDATE',
	},
	{ uid: crypto.randomUUID(), label: 'Leer', value: 'READ' },
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: 'DELETE',
	},
	{
		uid: crypto.randomUUID(),
		label: 'Sede',
		value: 'SITE',
	},
];
const perModule = [
	{
		uid: crypto.randomUUID(),
		label: 'Operaciones cuadrantes de paz',
		value: 'OCP',
	},
	{
		uid: crypto.randomUUID(),
		label: 'Gestión Administrativa',
		value: 'GA',
	},
	{
		uid: crypto.randomUUID(),
		label: 'Gestión humana y asesoría jurídica',
		value: 'GH_AJ',
	},
	{
		uid: crypto.randomUUID(),
		label: 'POP-PSI',
		value: 'POP_PSI',
	},
	{
		uid: crypto.randomUUID(),
		label: 'Tecnología comunicación e información',
		value: 'TCI',
	},
	{
		uid: crypto.randomUUID(),
		label: 'URI potencia',
		value: 'URI_P',
	},
];
const RegisterRol = ({ handelClose, handleList, order }) => {
	const { form, setForm, handleChange, handleSubmit, errors, data } =
		useRegister({
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.rol.primary +
				system.routeApi.rol.register,
		});
	const { handleClick } = usePermission({ onChange: handleChange });
	useEffect(() => {
		if (data) {
			handleList({ orderProperty: order });
			setForm(initForm);
			handelClose();
		}
	}, [data]);

	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.rol.register}</h2>
			<form
				onSubmit={handleSubmit}
				className='register__form register__form--rol'
			>
				<Input
					className='register__input register__input--length'
					iconName={'rol'}
					name={'name'}
					label={system.component.form.label.name}
					placeholder={system.component.form.placeholder.name}
					onChange={handleChange}
					value={form.name}
					error={errors.name}
				/>
				<div className='register__label'>
					<strong>{system.component.rol.permission}:</strong>
					<div className='register__permission'>
						{perSystem?.map(item => (
							<Checkbox
								key={item.uid}
								title={item.label}
								value={item.value}
								onClick={handleClick}
							/>
						))}
					</div>
				</div>
				<div className='register__label'>
					<strong>{system.component.rol.module}:</strong>
					<div className='register__permission register__permission--module'>
						{perModule?.map(item => (
							<Checkbox
								key={item.uid}
								title={item.label}
								value={item.value}
								onClick={handleClick}
							/>
						))}
					</div>
				</div>
				<Btn
					className='btnStyle register__btn'
					text={system.component.btn.submit}
					type='submit'
				/>
			</form>
		</section>
	);
};
export default RegisterRol;
