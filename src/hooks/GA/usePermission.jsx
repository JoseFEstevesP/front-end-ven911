import { useEffect, useState } from 'react';

const usePermission = ({ onChange }) => {
	const [data, setData] = useState([]);

	const handleClick = value => {
		if (!data.includes(value)) {
			setData([...data, value]);
		} else {
			setData(olValue => olValue.filter(item => item !== value));
		}
	};
	useEffect(() => {
		const event = {
			target: {
				name: 'permissions',
				value: data.toString(),
			},
		};
		onChange(event);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);
	return { handleClick, setData };
};
export default usePermission;
