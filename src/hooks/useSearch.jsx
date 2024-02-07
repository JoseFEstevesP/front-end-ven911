import { useState } from 'react';
import useGet from './useGet';

const useSearch = ({ url }) => {
	// Utiliza el hook useGet para manejar las solicitudes GET
	const { handleFetch, data, error } = useGet();

	// Estado para almacenar el valor de búsqueda
	const [search, setSearch] = useState('');

	// Estado para controlar si se ha enviado la búsqueda
	const [searchSubmit, setSearchSubmit] = useState(false);

	// Función para manejar el cambio en el valor de búsqueda
	const handleChange = e => {
		setSearch(e.target.value);
	};

	// Efecto para controlar si se ha enviado la búsqueda
	// useEffect(() => {
	// 	console.log('useEffect -> search:', search);
	// 	console.log('useEffect -> typeof search:', typeof search);
	// 	console.log("useEffect -> search === '':", search === '');
	// 	if (search === '') {
	// 		setSearchSubmit(false);
	// 	}
	// }, [search]);

	// Función para manejar la búsqueda
	const handleSearch = ({
		e,
		page = 1,
		limit = 10,
		uidSite,
		orderProperty = 'name',
		status = '1',
		order = 'ASC',
	}) => {
		e && e.preventDefault();
		setSearchSubmit(true);

		// Crea los parámetros de búsqueda
		const params = new URLSearchParams({
			page,
			limit,
			uidSite,
			orderProperty,
			order,
			status,
		});

		// Crea la URL con los parámetros de búsqueda y el valor de búsqueda actual
		const urlWithParams = `${url}/${search}?${params}`;

		if (search === '') {
			setSearchSubmit(false);
		}

		// Realiza la solicitud GET con los parámetros de búsqueda y el valor de búsqueda actual
		if (search !== '') {
			console.log("useSearch -> search !== '':", search !== '');
			handleFetch({ url: urlWithParams });
		}
	};

	// Función para manejar la búsqueda de la siguiente página
	const next = ({ orderProperty, uidSite, status }) => {
		return handleSearch({
			page: data?.nextPage,
			uidSite,
			orderProperty,
			status,
		});
	};

	// Función para manejar la búsqueda de la página anterior
	const previous = ({ orderProperty, uidSite, status }) => {
		handleSearch({ page: data?.previousPage, uidSite, orderProperty, status });
	};

	// Devuelve los datos, la función para manejar la búsqueda, la función para manejar la siguiente página, la función para manejar la página anterior, el error y los números de página anterior y siguiente
	return {
		data,
		handleSearch,
		next,
		previous,
		error,
		dataNext: data?.nextPage,
		dataPrev: data?.previousPage,
		search,
		handleChange,
		searchSubmit,
	};
};

export default useSearch;
