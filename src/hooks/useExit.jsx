import { useContext } from 'react';
import { ContextRol } from '../context/RolContext';
import { ContextToken } from '../context/TokenContext';
const useExit = () => {
	const { setToken } = useContext(ContextToken);
	const { setRol } = useContext(ContextRol);
	const handleClickExit = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('rol');
		setToken(null);
		setRol(null);
	};
	return { handleClickExit };
};
export default useExit;
