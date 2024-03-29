import { useContext, useEffect, useState } from 'react';
import { ContextMsg } from '../context/MsgContext';
import { ContextRol } from '../context/RolContext';
import { ContextSite } from '../context/SiteContext';
import { ContextToken } from '../context/TokenContext';
import { system } from '../data/system';
import usePostLogin from './usePostLogin';

const useLogin = ({ initForm, url }) => {
	const { setToken } = useContext(ContextToken);
	const { setMsg } = useContext(ContextMsg);
	const { setRol } = useContext(ContextRol);
	const { setSite } = useContext(ContextSite);
	const { handleFetch, data, error, loading } = usePostLogin();
	const [form, setForm] = useState(initForm);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (data?.JWT) {
			setToken(data?.JWT);
			setRol(data?.rol);
			setSite(data?.site);
			localStorage.setItem('token', data?.JWT);
			localStorage.setItem('rol', data?.rol);
			localStorage.setItem('site', data?.site);
			setForm(initForm);
			setMsg({ msg: system.msg.msgLogin, type: false });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.JWT, initForm]);
	const handleChange = e => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = e => {
		e.preventDefault();
		handleFetch({
			url,
			form,
		});
	};
	useEffect(() => {
		if (error) {
			const errors = {};
			const initFormKeys = Object.keys(initForm);
			for (const key of initFormKeys) {
				if (error?.some(error => error[key])) {
					errors[key] = error.filter(error => error[key]);
				}
			}
			setErrors(errors);
			setMsg({ ...error[0], type: true });
		}
	}, [error, setMsg, initForm]);

	return {
		handleChange,
		form,
		setForm,
		handleSubmit,
		errors,
		loading,
	};
};
export default useLogin;
