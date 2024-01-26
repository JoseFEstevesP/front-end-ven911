import useGet from './useGet';

const useLits = ({ url }) => {
	const { handleFetch, data, setData, error } = useGet();
	const handleList = ({
		page = 1,
		limit = 10,
		uidSite,
		orderProperty = 'name',
		order = 'ASC',
	}) => {
		handleFetch({
			url: `${url}${page ? `?page=${page}` : ''}${
				limit ? `&limit=${limit}` : ''
			}${
				uidSite ? `&uidSite=${uidSite}` : ''
			}&orderProperty=${orderProperty}&order=${order}`,
		});
	};
	const nex = ({ orderProperty = 'name' }) => {
		handleList({ page: data?.nextPage, orderProperty });
	};
	const prev = ({ orderProperty }) => {
		handleList({ page: data?.previousPage, orderProperty });
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
