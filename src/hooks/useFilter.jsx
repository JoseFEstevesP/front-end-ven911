import { useState } from 'react';

const useFilter = ({ initForm, options, handleClose, handleFetch }) => {
	const [filterOptions, setFilterOptions] = useState(initForm);
	const handleChange = e => {
		const { name, value } = e.target;
		setFilterOptions({ ...filterOptions, [name]: value });
	};
	const handleSubmit = ({ url, e }) => {
		e.preventDefault();
		handleFetch({
			url: `${url}?${Object.entries(filterOptions)
				.filter(([key, value]) => value !== '')
				.map(([key, value]) => `${options[key] || key}=${value}`)
				.join('&')}`,
		});

		handleClose();
		setFilterOptions(initForm);
	};

	return { filterOptions, handleChange, handleSubmit };
};
export default useFilter;
