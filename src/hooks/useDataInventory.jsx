import useGet from './useGet';

const useDataInventory = ({ url }) => {
	const { data, handelFetch } = useGet();
	const handelDataInventory = ({ inventory }) => {
		handelFetch({ url: `${url}/${inventory}` });
	};
	return { data, handelDataInventory };
};
export default useDataInventory;
