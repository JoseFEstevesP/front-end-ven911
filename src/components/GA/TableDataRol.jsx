import { useEffect } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import TableCell, { Cell } from '../TableCell';
import OptionTable from './OptionTable';
// Función para manejar la lógica de eliminación de rol
const handleDeleteRol = (handleDelete, data) => {
	return () => handleDelete({ uid: data.uid });
};

// Función para manejar la lógica de edición de rol
const handleEdit = (setNewData, handleOpenUpdate, data) => {
	return () => {
		setNewData({
			uid: data.uid,
			name: data.name,
			permissions: data.permissions,
		});
		handleOpenUpdate();
	};
};

const TableDataRol = ({
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
			system.routeApi.rol.primary +
			system.routeApi.rol.delete,
	});
	useEffect(() => {
		if (dataDelete) {
			handleList({ orderProperty: filter?.order, status: filter?.status });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataDelete, filter?.order, filter?.status]);
	return (
		<TableCell>
			<Cell>{data.name}</Cell>
			<Cell>{data.permissions}</Cell>
			{(validate({ per: permissions.deleteRol }) ||
				validate({ per: permissions.updateRol })) && (
				<Cell>
					<ActionMenu close={null}>
						<OptionTable
							filter={filter}
							handleDelete={handleDeleteRol(handleDelete, data)}
							handleEdit={handleEdit(setNewData, handleOpenUpdate, data)}
						/>
					</ActionMenu>
				</Cell>
			)}
		</TableCell>
	);
};
export default TableDataRol;
