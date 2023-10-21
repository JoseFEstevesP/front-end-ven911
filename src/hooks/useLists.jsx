import useGet from './useGet';

const useLits = ({ url }) => {
	const { handelFetch, data, error } = useGet();
	const handleList = ({ page = 1, limit = 10, uidSite }) => {
		handelFetch({
			url: `${url}${page ? `?page=${page}` : ''}${
				limit ? `&limit=${limit}` : ''
			}${uidSite ? `&uidSite=${uidSite}` : ''}`,
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
		handleList,
		nex,
		prev,
		error,
	};
};
export default useLits;
