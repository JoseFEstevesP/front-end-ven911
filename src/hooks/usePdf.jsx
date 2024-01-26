import useGet from './useGet';
const usePdf = () => {
	const { data, handleFetch } = useGet();

	return { handleFetch, dataPDF: data };
};
export default usePdf;
