import { useState } from 'react';
import useGet from './useGet';

const useSite = ({ site }) => {
	const { handleFetch, data } = useGet();
	const [siteValue, setSiteValue] = useState(site);
	const handleChange = e => {
		setSiteValue(e.target.value);
	};
	return { handleFetch, data, siteValue, handleChange };
};
export default useSite;
