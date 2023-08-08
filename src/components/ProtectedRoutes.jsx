import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { ContextToken } from '../Context/Token.context';

const ProtectedRoutes = () => {
	const { token } = useContext(ContextToken);
	if (!token) return <Navigate to='/' />;
	return <Outlet />;
};
export default ProtectedRoutes;
