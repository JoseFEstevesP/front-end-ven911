import useGet from './useGet';

const useLits = ({ url }) => {
	// Utiliza el hook useGet para manejar las solicitudes GET
	const { handleFetch, data, setData, error } = useGet();

	// Función para manejar la lista
	const handleList = ({
		page = 1,
		limit = 10,
		uidSite,
		orderProperty = 'name',
		status = '1',
		order = 'ASC',
	}) => {
		// Crea los parámetros de búsqueda
		const params = new URLSearchParams({
			page,
			limit,
			uidSite,
			orderProperty,
			order,
			status,
		});

		// Crea la URL con los parámetros de búsqueda
		const urlWithParams = `${url}?${params}`;

		// Realiza la solicitud GET con los parámetros de búsqueda
		handleFetch({ url: urlWithParams });
	};

	// Función para manejar la búsqueda de la siguiente página
	const next = ({ orderProperty, uidSite, status }) => {
		handleList({ page: data?.nextPage, orderProperty, uidSite, status });
	};

	// Función para manejar la búsqueda de la página anterior
	const previous = ({ orderProperty, uidSite, status }) => {
		handleList({ page: data?.previousPage, orderProperty, uidSite, status });
	};

	// Devuelve los datos, la función para manejar la lista, la función para manejar la siguiente página, la función para manejar la página anterior, el error y los números de página anterior y siguiente
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
