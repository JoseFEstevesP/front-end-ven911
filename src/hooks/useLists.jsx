import useGet from './useGet';

const useLits = ({ url }) => {
	const { handleFetch, data, setData, error } = useGet();

	const handleList = ({
		page = 1,
		limit = 10,
		uidSite,
		orderProperty = 'name',
		status = '1',
		order = 'ASC',
	}) => {
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
		handleList({ page: data?.nextPage, orderProperty, status });
	};

	const previous = ({ orderProperty = 'name' }) => {
		handleList({ page: data?.previousPage, orderProperty, status });
	};

	return {
		data,
		setData,
		handleList,
		next,
		previous,
		error,
		dataNext: data?.nextPage,
		dataPrev: data?.previousPage,
	};
};

export default useLits;
