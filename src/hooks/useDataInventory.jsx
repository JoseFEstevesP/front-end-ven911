import useGet from './useGet';

const useDataInventory = ({ url }) => {
	const { data, handleFetch } = useGet();
	const handleDataInventory = ({ inventory }) => {
		handleFetch({ url: `${url}/${inventory}` });
	};
	return { data, handleDataInventory };
};
export default useDataInventory;
