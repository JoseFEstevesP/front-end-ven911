import { useState } from 'react';

const useFilter = ({ initForm, handleClose, handleFetch }) => {
	const [filterOptions, setFilterOptions] = useState(initForm);
	const handleChange = e => {
		const { name, value } = e.target;
		setFilterOptions({ ...filterOptions, [name]: value });
	};
	const handleSubmit = ({ url, e }) => {
		e.preventDefault();
		// Crea los parámetros de búsqueda
		const params = new URLSearchParams({
			dataQuantity: filterOptions?.dataQuantity,
			orderProperty: filterOptions?.orderProperty,
			order: filterOptions?.order,
			status: filterOptions?.dataStatus,
			...(filterOptions?.uidSite && { uidSite: filterOptions.uidSite }),
			...(filterOptions?.startDate && { startDate: filterOptions.startDate }),
			...(filterOptions?.endDate && { endDate: filterOptions.endDate }),
			...(filterOptions?.search && { search: filterOptions.search }),
		});

		// Crea la URL con los parámetros de búsqueda
		const urlWithParams = `${url}?${params}`;

		handleFetch({
			url: urlWithParams,
		});

		handleClose();
		setFilterOptions(initForm);
	};

	return { filterOptions, handleChange, handleSubmit };
};
export default useFilter;
