import { useEffect } from 'react';
import { system } from '../../data/system';
import useUpdateData from '../../hooks/useUpdateData';
import Btn from '../Btn';
import Input from '../Input';

const FormProfileEmail = ({ initForm }) => {
	const { handleSubmit, handleChange, form, errors, data, setForm } =
		useUpdateData({
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.user.primary +
				system.routeApi.user.updateEmail,
		});
	useEffect(() => {
		if (data) {
			setForm({ email: form.email, password: '' });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	return (
		<section className='box formData formData--email'>
			<h2 className='formData__title'>{system.page.profile.email}</h2>
			<form onSubmit={handleSubmit} className='formData__form'>
				<Input
					iconName={'email'}
					name={'email'}
					label={system.component.form.label.email}
					placeholder={system.component.form.placeholder.email}
					type='email'
					onChange={handleChange}
					value={form.email}
					error={errors.email}
				/>
				<Input
					iconName={'padlock'}
					name={'password'}
					label={system.component.form.label.password}
					placeholder={system.component.form.placeholder.password}
					type='password'
					onChange={handleChange}
					value={form.password}
					error={errors.password}
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
export default FormProfileEmail;
