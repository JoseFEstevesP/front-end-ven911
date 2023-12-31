import { useState } from 'react';

const useFilter = ({ initForm, options, handelClose, handelFetch }) => {
	const [filterOptions, setFilterOptions] = useState(initForm);
	const handleChange = e => {
		const { name, value } = e.target;
		setFilterOptions({ ...filterOptions, [name]: value });
	};
	const handleSubmit = ({ url, e }) => {
		e.preventDefault();

		handelFetch({
			url: `${url}?${Object.entries(filterOptions)
				.filter(([key, value]) => value !== '')
				.map(([key, value]) => `${options[key] || key}=${value}`)
				.join('&')}`,
		});

		handelClose();
		setFilterOptions(initForm);
	};

	return { filterOptions, handleChange, handleSubmit };
};
export default useFilter;
