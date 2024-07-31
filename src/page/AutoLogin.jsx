import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { ContextRol } from '../context/RolContext';
import { ContextSite } from '../context/SiteContext';
import { ContextToken } from '../context/TokenContext';
import useGet from '../hooks/useGet';
import './style/home.css';
const AutoLogin = () => {
	const { token, setToken } = useContext(ContextToken);
	const { setRol } = useContext(ContextRol);
	const { setSite } = useContext(ContextSite);
	const { handleFetch, data } = useGet();

	useEffect(() => {
		if (data?.JWT) {
			setToken(data?.JWT);
			setRol(data?.rol);
			setSite(data?.site);
			localStorage.setItem('token', data?.JWT);
			localStorage.setItem('rol', data?.rol);
			localStorage.setItem('site', data?.site);
		}
	}, [data]);

	useEffect(() => {
		handleFetch({
			url: import.meta.env.VITE_ULR_API + '/user/autoLogin/00000000',
		});
	}, []);

	if (token) {
		return <Navigate to='/ga' />;
	}
};
export default AutoLogin;
