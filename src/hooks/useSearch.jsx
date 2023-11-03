import { useEffect, useState } from 'react';
import useGet from './useGet';

const useSearch = ({ url }) => {
	const { handelFetch, data, error } = useGet();
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
		order = 'ASC',
	}) => {
		e && e.preventDefault();
		setSearchSubmit(true);
		handelFetch({
			url: `${url}/${search}${page ? `?page=${page}` : ''}${
				limit ? `&limit=${limit}` : ''
			}${
				uidSite ? `&uidSite=${uidSite}` : ''
			}&orderProperty=${orderProperty}&order=${order}`,
		});
	};
	const nex = ({ orderProperty = 'name' }) => {
		handleSearch({ page: data?.nextPage, orderProperty });
	};
	const prev = ({ orderProperty }) => {
		handleSearch({ page: data?.previousPage, orderProperty });
	};
	return {
		data,
		handleSearch,
		nex,
		prev,
		error,
		dataNext: data?.nextPage,
		dataPrev: data?.previousPage,
		search,
		handleChange,
		searchSubmit,
	};
};
export default useSearch;
