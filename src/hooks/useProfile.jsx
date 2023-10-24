import { useEffect, useState } from 'react';
import useGet from './useGet';

const useProfile = () => {
	const { handelFetch, data } = useGet();
	const [dataDefault, setDataDefault] = useState(null);
	useEffect(() => {
		handelFetch({ url: `${import.meta.env.VITE_ULR_API}/user/profile` });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (data) {
			setDataDefault(data);
		}
	}, [data]);
	return { dataDefault };
};
export default useProfile;
