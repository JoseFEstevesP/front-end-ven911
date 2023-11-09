/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { system } from '../../data/system';
import useUpdate from '../../hooks/useUpdate';
import Btn from '../Btn';
import Input from '../Input';
import './style/register.css';
const initForm = {
	uid: '',
	name: '',
	direction: '',
};
const UpdateSite = ({ handelClose, newData, handleList, order }) => {
	const { form, setForm, handleChange, handleSubmit, errors, data } = useUpdate(
		{
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.site.primary +
				system.routeApi.site.update,
		},
	);
	useEffect(() => {
		if (newData) {
			setForm(newData);
		}
	}, [newData]);
	useEffect(() => {
		if (data) {
			handleList({ orderProperty: order });
			setForm(initForm);
			handelClose();
		}
	}, [data]);

	return (
		<section className='register'>
			<h2 className='register__title'>Actualizar de Sede</h2>
			<form
				onSubmit={handleSubmit}
				className='register__form register__form--update'
			>
				<Input
					className='register__input'
					iconName={'building'}
					name={'name'}
					label={system.component.form.label.name}
					placeholder={system.component.form.placeholder.name}
					value={form.name}
					onChange={handleChange}
					error={errors.name}
				/>
				<Input
					className='register__input'
					iconName={'location__gps'}
					name={'direction'}
					label={system.component.form.label.direction}
					placeholder={system.component.form.placeholder.direction}
					value={form.direction}
					onChange={handleChange}
					error={errors.direction}
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
export default UpdateSite;
