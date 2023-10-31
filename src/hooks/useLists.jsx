import useGet from './useGet';

const useLits = ({ url }) => {
	const { handelFetch, data, setData, error } = useGet();
	const handleList = ({
		page = 1,
		limit = 10,
		uidSite,
		orderProperty = 'name',
		order = 'ASC',
	}) => {
		handelFetch({
			url: `${url}${page ? `?page=${page}` : ''}${
				limit ? `&limit=${limit}` : ''
			}${
				uidSite ? `&uidSite=${uidSite}` : ''
			}&orderProperty=${orderProperty}&order=${order}`,
		});
	};
	const nex = () => {
		handleList({ page: data?.nextPage });
	};
	const prev = () => {
		handleList({ page: data?.previousPage });
	};
	return {
		data,
		setData,
		handleList,
		nex,
		prev,
		error,
		dataNext: data?.nextPage,
		dataPrev: data?.previousPage,
	};
};
export default useLits;
