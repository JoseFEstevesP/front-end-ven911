import { useState } from 'react';

const useOrder = ({ orderDefault }) => {
	const [order, setOrder] = useState(orderDefault);
	const handleChange = e => {
		setOrder(e.target.value);
	};
	return { order, handleChange };
};
export default useOrder;
