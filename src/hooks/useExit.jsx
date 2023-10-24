import { useContext } from 'react';
import { ContextRol } from '../context/Rol.context';
import { ContextToken } from '../context/Token.context';
const useExit = () => {
	const { setToken } = useContext(ContextToken);
	const { setRol } = useContext(ContextRol);
	const handelClickExit = () => {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('rol');
		setToken(null);
		setRol(null);
	};
	return { handelClickExit };
};
export default useExit;
