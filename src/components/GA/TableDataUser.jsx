import { useEffect } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import TableCell, { Cell } from '../TableCell';
import OptionTable from './OptionTable';

// Función para manejar la lógica de eliminación de usuario
const handleDeleteUser = (handleDelete, data) => {
	return () => handleDelete({ uid: data.uid });
};

// Función para manejar la lógica de edición de usuario
const handleEdit = (setNewData, handleOpenUpdate, data) => {
	return () => {
		setNewData({
			uid: data.uid,
			ci: data.ci,
			name: data.name,
			surname: data.surname,
			email: data.email,
			uidRol: data.uidRol,
			uidSite: data.uidSite,
		});
		handleOpenUpdate();
	};
};

const TableDataUser = ({
	data,
	handleList,
	setNewData,
	handleOpenUpdate,
	filter,
}) => {
	const { validate } = useValidate();
	const { handleDelete, data: dataDelete } = useDelete({
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.user.primary +
			system.routeApi.user.delete,
	});

	// Efecto para manejar la actualización de la lista después de eliminar un usuario
	useEffect(() => {
		if (dataDelete) {
			handleList({
				uidSite: filter?.site,
				orderProperty: filter?.order,
				status: filter?.status,
			});
		}
	}, [dataDelete, handleList, filter]);

	return (
		<TableCell>
			<Cell>{data.name}</Cell>
			<Cell>{data.surname}</Cell>
			<Cell>{data.ci}</Cell>
			<Cell>{data.email}</Cell>
			<Cell>{data.rol.name}</Cell>
			{(validate({ per: permissions.deleteUser }) ||
				validate({ per: permissions.updateUser })) && (
				<Cell>
					<ActionMenu close={null}>
						<OptionTable
							filter={filter}
							handleDelete={handleDeleteUser(handleDelete, data)}
							handleEdit={handleEdit(setNewData, handleOpenUpdate, data)}
						/>
					</ActionMenu>
				</Cell>
			)}
		</TableCell>
	);
};

export default TableDataUser;
