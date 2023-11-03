import { useState } from 'react';

const usePermission = ({ data }) => {
	const [permissions, setPermissions] = useState(data);

	const handleChangePer = event => {
		const { value, checked } = event.target;
		setPermissions(
			permissions.map(permission => {
				if (permission.name === value) {
					permission.checked = checked;
				}
				return permission;
			}),
		);
	};
	const getPermissions = () => {
		const permissionsString = permissions
			.filter(permission => permission.checked)
			.map(permission => permission.name)
			.join(',');

		return { permissions: permissionsString };
	};
	return { permissions, handleChangePer, getPermissions };
};
export default usePermission;
