import { useState } from 'react';
import useGet from './useGet';

const useSite = ({ site }) => {
	const { handelFetch, data } = useGet();
	const [siteValue, setSiteValue] = useState(site);
	const handleChange = e => {
		setSiteValue(e.target.value);
	};
	return { handelFetch, data, siteValue, handleChange };
};
export default useSite;
