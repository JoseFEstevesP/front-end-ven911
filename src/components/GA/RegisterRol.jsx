/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {
	perConsumables,
	perFurniture,
	perModule,
	perRol,
	perSite,
	perSystem,
	perTechnology,
	perUser,
	perVehicle,
	perBreakdownReport,
	perPurchase,
	perAssign,
} from '../../data/permissions';
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
					<strong>{system.component.rol.permissionAll}:</strong>
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
					<strong>{system.component.rol.permissionUser}:</strong>
					<div className='register__permission'>
						{perUser?.map(item => (
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
					<strong>{system.component.rol.permissionRol}:</strong>
					<div className='register__permission'>
						{perRol?.map(item => (
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
					<strong>{system.component.rol.permissionSite}:</strong>
					<div className='register__permission'>
						{perSite?.map(item => (
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
					<strong>{system.component.rol.permissionTechnology}:</strong>
					<div className='register__permission'>
						{perTechnology?.map(item => (
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
					<strong>{system.component.rol.permissionConsumables}:</strong>
					<div className='register__permission'>
						{perConsumables?.map(item => (
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
					<strong>{system.component.rol.permissionFurniture}:</strong>
					<div className='register__permission'>
						{perFurniture?.map(item => (
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
					<strong>{system.component.rol.permissionVehicle}:</strong>
					<div className='register__permission'>
						{perVehicle?.map(item => (
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
					<strong>{system.component.rol.permissionBreakdownReport}:</strong>
					<div className='register__permission'>
						{perBreakdownReport?.map(item => (
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
					<strong>{system.component.rol.permissionPurchase}:</strong>
					<div className='register__permission'>
						{perPurchase?.map(item => (
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
					<strong>{system.component.rol.permissionAssign}:</strong>
					<div className='register__permission'>
						{perAssign?.map(item => (
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
