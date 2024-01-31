import { useContext } from 'react';
import { ContextRol } from '../context/RolContext';
import { permissions } from '../data/dataPermissions';

const useValidate = () => {
	const { rol } = useContext(ContextRol);
	const validate = ({ per }) =>
		rol.split(',').some(item => item === per || item === permissions.super);
	return { validate };
};
export default useValidate;
