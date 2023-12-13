import { useContext } from 'react';
import { ContextRol } from '../context/RolContext';
import { ContextToken } from '../context/TokenContext';
const useExit = () => {
	const { setToken } = useContext(ContextToken);
	const { setRol } = useContext(ContextRol);
	const handelClickExit = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('rol');
		setToken(null);
		setRol(null);
	};
	return { handelClickExit };
};
export default useExit;
