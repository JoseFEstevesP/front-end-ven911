import { useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ContextToken } from '../Context/Token.context';
import { system } from '../data/system';
import useLogin from '../hooks/useLogin';
import Btn from './Btn';
import Icons from './Icons';
import Input from './Input';
import Theme from './Theme';
import './style/login.css';
const initForm = {
	ci: '',
	password: '',
};
const Login = ({ title, iconSubmit, to, url }) => {
	const { handleSubmit, handleChange, form, errors, loading } = useLogin({
		initForm,
		url,
	});
	const { token } = useContext(ContextToken);
	if (token) return <Navigate to={to} />;
	return (
		<>
			<section className='login'>
				<h2 className='login__title'>
					<Icons iconName={'logo'} />
					<span>{!loading ? system.component.loading : title}</span>
				</h2>
				<form onSubmit={handleSubmit} className='login__content box'>
					<div className='login__options'>
						<Link to={'/'}>
							<Icons iconName={'home'} />
						</Link>
						<Theme />
					</div>
					<Input
						iconName={'ci'}
						name={'ci'}
						label={'CI'}
						placeholder={system.component.form.ci}
						type='number'
						onChange={handleChange}
						value={form.ci}
						error={errors.ci}
					/>
					<Input
						iconName={'padlock'}
						name={'password'}
						label={'contraseña'}
						placeholder={system.component.form.password}
						type='password'
						onChange={handleChange}
						value={form.password}
						error={errors.password}
					/>
					<Btn
						nameIcon={iconSubmit}
						typeIcon='module'
						className='btnStyle'
						text={system.component.btn.submit}
						type='submit'
					/>
					<Link to={'/recovery'} className='login__recovery'>
						<span>Recuperar contraseña</span>
						<Icons iconName={'padlock'} className={'login__icon'} />
					</Link>
				</form>
			</section>
		</>
	);
};
export default Login;
