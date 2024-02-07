/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import {
	perAssign,
	perBreakdownReport,
	perConsumables,
	perFurniture,
	perModule,
	perPurchase,
	perRol,
	perSite,
	perSystem,
	perTechnology,
	perUser,
	perVehicle,
} from '../../data/permissions';
import { system } from '../../data/system';
import usePermission from '../../hooks/GA/usePermission';
import useUpdate from '../../hooks/useUpdate';
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
const UpdateRol = ({ handleClose, handleList, order, newData }) => {
	const { form, setForm, handleChange, handleSubmit, errors, data } = useUpdate(
		{
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.rol.primary +
				system.routeApi.rol.update,
		},
	);
	const { handleClick, setData } = usePermission({
		onChange: handleChange,
	});
	useEffect(() => {
		if (data) {
			handleList({
				uidSite: filter?.site,
				orderProperty: filter?.order,
				status: filter?.status,
			});
			setForm(initForm);
			handleClose();
		}
	}, [data]);
	useEffect(() => {
		if (newData) {
			setForm(newData);
			setData(newData?.permissions.split(','));
		}
	}, [newData]);
	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.rol.update}</h2>
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
								checked={form?.permissions
									?.split(',')
									.some(per => per === item.value)}
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
export default UpdateRol;
