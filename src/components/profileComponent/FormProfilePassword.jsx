import { system } from '../../data/system';
import useUpdateData from '../../hooks/useUpdateData';
import Btn from '../Btn';
import Input from '../Input';

const FormProfilePassword = ({ initForm }) => {
	const { handleSubmit, handleChange, form, errors } = useUpdateData({
		initForm,
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.user.primary +
			system.routeApi.user.updatePassword,
	});
	return (
		<section className='box formData formData--pass'>
			<h2 className='formData__title'>{system.page.profile.pass}</h2>
			<form onSubmit={handleSubmit} className='formData__form'>
				<Input
					iconName={'padlock'}
					name={'oldPassword'}
					label={system.page.profile.form.oldPassword}
					placeholder={system.component.form.placeholder.password}
					type='password'
					onChange={handleChange}
					value={form.oldPassword}
					error={errors.password}
				/>
				<Input
					iconName={'padlock'}
					name={'newPassword'}
					label={system.page.profile.form.newPassword}
					placeholder={system.component.form.placeholder.password}
					type='password'
					onChange={handleChange}
					value={form.newPassword}
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
export default FormProfilePassword;
