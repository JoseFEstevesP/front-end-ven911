import { useEffect, useState } from 'react';
import useGet from './useGet';

const useSearch = ({ url }) => {
	const { handleFetch, data, error } = useGet();
	const [search, setSearch] = useState('');
	const [searchSubmit, setSearchSubmit] = useState(false);
	const handleChange = e => {
		setSearch(e.target.value);
	};
	useEffect(() => {
		if (search === '') {
			setSearchSubmit(false);
		}
	}, [search]);
	const handleSearch = ({
		e,
		page = 1,
		limit = 10,
		uidSite,
		orderProperty = 'name',
		status = '1',
		order = 'ASC',
	}) => {
		e && e.preventDefault();
		setSearchSubmit(true);
		const params = new URLSearchParams({
			page,
			limit,
			uidSite,
			orderProperty,
			order,
			status,
		});
		const urlWithParams = `${url}?${params}`;
		handleFetch({ url: urlWithParams });
	};

	const next = ({ orderProperty = 'name' }) => {
		handleSearch({ page: data?.nextPage, orderProperty, status });
	};

	const previous = ({ orderProperty = 'name' }) => {
		handleSearch({ page: data?.previousPage, orderProperty, status });
	};

	return {
		data,
		handleSearch,
		next,
		previous,
		error,
		dataNext: data?.nextPage,
		dataPrev: data?.previousPage,
		search,
		handleChange,
		searchSubmit,
	};
};
export default useSearch;
