import { useCallback, useContext, useState } from 'react';
import { ContextToken } from '../Context/Token.context';
import { system } from '../data/system';
import { fetchData } from '../helpers/fetch';
const useGet = () => {
	const [error, setError] = useState({});
	const [loading, setLoading] = useState(true);
	const [controller, setController] = useState(null);
	const [data, setData] = useState(null);
	const { token } = useContext(ContextToken);
	const handelFetch = useCallback(
		({ url }) => {
			setLoading(true);
			const abortController = new AbortController();
			setController(abortController);
			fetchData()
				.get({
					url,
					options: {
						signal: abortController.signal,
						headers: {
							'Content-type': 'application/json',
							authorization: `Bearer ${token}`,
						},
					},
				})
				.then(res => setData(res))
				.catch(err => {
					if (err.name === 'AbortError') {
						console.error(system.msg.abort);
					} else {
						setError(err);
					}
				})
				.finally(() => setLoading(false));
		},
		[token],
	);

	const handleController = () => {
		if (controller) {
			controller.abort();
			setError({
				message: system.msg.abort,
			});
		}
	};
	return { data, error, loading, handleController, handelFetch };
};
export default useGet;
