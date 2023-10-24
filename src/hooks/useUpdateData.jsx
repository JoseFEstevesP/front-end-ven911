import { useContext, useEffect, useState } from 'react';
import { ContextMsg } from '../Context/msg.context';
import { system } from '../data/system';
import useUpdate from './useUpdate';

const useUpdateData = ({ initForm, url }) => {
	const { setMsg } = useContext(ContextMsg);
	const { data, error, loading, handelFetch } = useUpdate();
	const [form, setForm] = useState(initForm);
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (data) {
			setForm(initForm);
			setMsg({ msg: system.msg.msgUpdate, type: false });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, initForm]);
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
export default useUpdateData;