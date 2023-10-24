import { useContext, useEffect } from 'react';
import { ContextMsg } from '../context/msg.context';
import { system } from '../data/system';
import useDel from './useDel';

const useDelete = ({ url }) => {
	const { setMsg } = useContext(ContextMsg);
	const { data, error, handelFetch } = useDel();

	useEffect(() => {
		if (data) {
			setMsg({ msg: system.msg.msgDele, type: false });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	const handleDelete = ({ uid }) => {
		handelFetch({
			url,
			form: { uid },
		});
	};
	useEffect(() => {
		if (error) {
			setMsg({ ...error[0], type: true });
		}
	}, [error, setMsg]);

	return {
		handleDelete,
	};
};
export default useDelete;
