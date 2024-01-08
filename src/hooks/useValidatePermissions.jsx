import { useContext } from 'react';
import { ContextRol } from '../context/RolContext';
import { permissions } from '../data/dataPermissions';

const useValidatePermissions = () => {
	const { rol } = useContext(ContextRol);
	const validatePermissions = ({ per }) =>
		rol.split(',').some(item => item === per || item === permissions.super);
	return { validatePermissions };
};
export default useValidatePermissions;
