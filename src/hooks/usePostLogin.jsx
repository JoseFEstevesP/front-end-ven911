import { useCallback, useState } from 'react';
import { fetchData } from '../helpers/fetch';
const usePostLogin = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const handleFetch = useCallback(({ url, form }) => {
		setLoading(true);
		fetchData()
			.post({
				url,
				options: {
					headers: {
						'Content-type': 'application/json',
					},
					body: form,
				},
			})
			.then(res => {
				if (res.errors) {
					return setError(res.errors);
				}
				if (res) {
					return setData(res);
				}
			})
			.catch(err => console.error(err))
			.finally(() => setLoading(false));
	}, []);
	return { data, error, loading, handleFetch };
};
export default usePostLogin;
