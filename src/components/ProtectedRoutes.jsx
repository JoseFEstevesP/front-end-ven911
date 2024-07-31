import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ContextToken } from '../context/TokenContext';

const ProtectedRoutes = () => {
	const { token } = useContext(ContextToken);
	if (token) return <Navigate to='/redirect' />;
	return <Outlet />;
};
export default ProtectedRoutes;
