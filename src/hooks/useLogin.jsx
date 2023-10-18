import { useContext, useEffect, useState } from 'react';
import { ContextRol } from '../Context/Rol.context';
import { ContextToken } from '../Context/Token.context';
import { ContextMsg } from '../Context/msg.context';
import { system } from '../data/system';
import usePostLogin from './usePostLogin';

const useLogin = ({ initForm, url }) => {
	const { setToken } = useContext(ContextToken);
	const { setMsg } = useContext(ContextMsg);
	const { setRol } = useContext(ContextRol);
	const { handelFetch, data, error, loading } = usePostLogin();
	const [form, setForm] = useState(initForm);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (data?.JWT) {
			setToken(data?.JWT);
			setRol(data?.rol);
			sessionStorage.setItem('token', data?.JWT);
			sessionStorage.setItem('rol', data?.rol);
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
		handelFetch({
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
