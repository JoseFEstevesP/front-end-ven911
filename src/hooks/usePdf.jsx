import useGet from './useGet';
const usePdf = () => {
	const { data, handelFetch } = useGet();

	return { handelFetch, dataPDF: data };
};
export default usePdf;
