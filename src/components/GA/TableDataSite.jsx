import { useEffect } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import TableCell, { Cell } from '../TableCell';
import OptionTable from './OptionTable';

// Función para manejar la lógica de eliminación de rol
const handleDeleteSite = (handleDelete, data) => {
	return () => handleDelete({ uid: data.uid });
};

// Función para manejar la lógica de edición de rol
const handleEdit = (setNewData, handleOpenUpdate, data) => {
	return () => {
		setNewData({
			uid: data.uid,
			name: data.name,
			direction: data.direction,
		});
		handleOpenUpdate();
	};
};
const TableDataSite = ({
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
			system.routeApi.site.primary +
			system.routeApi.site.delete,
	});
	useEffect(() => {
		if (dataDelete) {
			handleList({ orderProperty: filter?.order, status: filter?.status });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataDelete]);

	return (
		<TableCell>
			<Cell>{data.name}</Cell>
			<Cell>{data.direction}</Cell>
			{(validate({ per: permissions.deleteSite }) ||
				validate({ per: permissions.updateSite })) && (
				<Cell>
					<ActionMenu close={null}>
						<OptionTable
							filter={filter}
							handleDelete={handleDeleteSite(handleDelete, data)}
							handleEdit={handleEdit(setNewData, handleOpenUpdate, data)}
						/>
					</ActionMenu>
				</Cell>
			)}
		</TableCell>
	);
};
export default TableDataSite;
