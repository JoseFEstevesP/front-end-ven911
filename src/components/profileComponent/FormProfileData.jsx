import { useEffect } from 'react';
import { system } from '../../data/system';
import Btn from '../Btn';
import Input from '../Input';
import useUpdate from '../../hooks/useUpdate';

const FormProfileData = ({ initForm }) => {
	const { handleSubmit, handleChange, form, errors, data, setForm } = useUpdate(
		{
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.user.primary +
				system.routeApi.user.updateData,
		},
	);
	useEffect(() => {
		if (data) {
			setForm(form);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	return (
		<section className='box formData formData--data'>
			<h2 className='formData__title'>{system.page.profile.data}</h2>
			<form onSubmit={handleSubmit} className='formData__form'>
				<Input
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
					iconName={'user'}
					name={'name'}
					label={system.component.form.label.name}
					placeholder={system.component.form.placeholder.name}
					onChange={handleChange}
					value={form.name}
					error={errors.name}
				/>
				<Input
					iconName={'user'}
					name={'surname'}
					label={system.component.form.label.surname}
					placeholder={system.component.form.placeholder.surname}
					onChange={handleChange}
					value={form.surname}
					error={errors.surname}
				/>
				<Btn
					text={system.component.btn.submit}
					type='submit'
					className='btnStyle'
					nameIcon={'save'}
				/>
			</form>
		</section>
	);
};
export default FormProfileData;
