import { useEffect } from 'react';
import { system } from '../../data/system';
import useRegister from '../../hooks/useRegister';
import Btn from '../Btn';
import Input from '../Input';
import './style/register.css';
const initForm = {
	name: '',
	direction: '',
};
const RegisterSite = ({ handelClose, handleList, order }) => {
	const { form, setForm, handleChange, handleSubmit, errors, data } =
		useRegister({
			initForm,
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.site.primary +
				system.routeApi.site.register,
		});
	useEffect(() => {
		if (data) {
			handleList({ orderProperty: order });
			setForm(initForm);
			handelClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.site.register}</h2>
			<form onSubmit={handleSubmit} className='register__form'>
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
export default RegisterSite;
