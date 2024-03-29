import { useCallback, useContext, useState } from 'react';
import { ContextToken } from '../context/TokenContext';
import { system } from '../data/system';
import { fetchData } from '../helpers/fetch';
const useGet = () => {
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);
	const [controller, setController] = useState(null);
	const [data, setData] = useState(null);
	const { token } = useContext(ContextToken);
	const handleFetch = useCallback(
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
	return { data, setData, error, loading, handleController, handleFetch };
};
export default useGet;
