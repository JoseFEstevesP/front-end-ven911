import { useContext, useEffect, useState } from 'react';
import { ContextMsg } from '../context/MsgContext';
import { system } from '../data/system';
import usePut from './usePut';

const useUpdate = ({ initForm, url }) => {
	const { setMsg } = useContext(ContextMsg);
	const { data, error, loading, handleFetch } = usePut();
	const [form, setForm] = useState(initForm);
	console.log('useUpdate -> form:', form);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (data) {
			setForm(initForm);
			setMsg({ msg: system.msg.msgUpdate, type: false });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
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
		data,
	};
};
export default useUpdate;
