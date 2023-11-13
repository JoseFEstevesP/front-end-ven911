import { useContext } from 'react';
import { ContextRol } from '../context/RolContext';
import { system } from '../data/system';

const useValidatePermissions = () => {
	const { rol } = useContext(ContextRol);
	const validatePermissions = ({ per }) =>
		rol
			.split(',')
			.some(item => item === per || item === system.permissions.super);
	return { validatePermissions };
};
export default useValidatePermissions;
