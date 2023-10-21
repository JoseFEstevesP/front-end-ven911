import { useCallback, useContext, useState } from 'react';
import { ContextToken } from '../Context/Token.context';
import { fetchData } from '../helpers/fetch';
const useUpdate = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState({});
	const { token } = useContext(ContextToken);
	const handelFetch = useCallback(
		({ url, form }) => {
			setLoading(true);
			fetchData()
				.put({
					url,
					options: {
						headers: {
							'Content-type': 'application/json',
							authorization: `Bearer ${token}`,
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
		},
		[token],
	);
	return { data, error, loading, handelFetch };
};
export default useUpdate;
