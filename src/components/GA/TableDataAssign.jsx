import { useEffect } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import TableCell, { Cell } from '../TableCell';
import OptionTable from './OptionTable';

// Función para manejar la lógica de eliminación de usuario
const handleDeleteAssign = (handleDelete, data) => {
	return () => handleDelete({ uid: data.uid });
};

// Función para manejar la lógica de edición de usuario
const handleEdit = (setNewData, handleOpenUpdate, data) => {
	return () => {
		setNewData({
			uid: data.uid,
			inventory: data.inventory,
			article: data.article,
			articleUid: data.articleUid,
			department: data.department,
			quantity: data.quantity,
			description: data.description,
			remarks: data.remarks,
		});
		handleOpenUpdate();
	};
};

const inventoryData = {
	consumable: 'Consumibles',
	furniture: 'Mobiliario',
	technology: 'Tecnología',
	vehicle: 'Vehículo',
};
const TableDataAssign = ({
	data,
	filter,
	handleList,
	setNewData,
	handleOpenUpdate,
}) => {
	const { validate } = useValidate();
	const { handleDelete, data: dataDelete } = useDelete({
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.assign.primary +
			system.routeApi.assign.delete,
	});
	useEffect(() => {
		if (dataDelete) {
			handleList({
				uidSite: filter?.site,
				orderProperty: filter?.order,
				status: filter?.status,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataDelete]);
	return (
		<TableCell>
			<Cell>{inventoryData[data?.inventory]}</Cell>
			<Cell>{data.article}</Cell>
			<Cell>{data.serialOrCodeBN}</Cell>
			<Cell>{data.department}</Cell>
			<Cell>{data.quantity}</Cell>
			<Cell>{data.description}</Cell>
			<Cell>{data.remarks}</Cell>
			{(validate({ per: permissions.deleteAssign }) ||
				validate({ per: permissions.updateAssign })) && (
				<Cell>
					<ActionMenu close={null}>
						<OptionTable
							filter={filter}
							handleDelete={handleDeleteAssign(handleDelete, data)}
							handleEdit={handleEdit(setNewData, handleOpenUpdate, data)}
						/>
					</ActionMenu>
				</Cell>
			)}
		</TableCell>
	);
};
export default TableDataAssign;
