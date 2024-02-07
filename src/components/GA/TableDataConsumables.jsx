import { useEffect } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import TableCell, { Cell } from '../TableCell';
import OptionTable from './OptionTable';

// Función para manejar la lógica de eliminación de usuario
const handleDeleteConsumables = (handleDelete, data) => {
	return () => handleDelete({ uid: data.uid });
};

// Función para manejar la lógica de edición de usuario
const handleEdit = (setNewData, handleOpenUpdate, data) => {
	return () => {
		setNewData({
			uid: data.uid,
			description: data.description,
			serial: data.serial,
			brand: data.brand,
			quantity: data.quantity,
			value: data.value,
			location: data.location,
			dateOfAcquisition: data.dateOfAcquisition,
			remarks: data.remarks,
		});
		handleOpenUpdate();
	};
};

const TableDataConsumables = ({
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
			system.routeApi.consumables.primary +
			system.routeApi.consumables.delete,
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
			<Cell>{data.description}</Cell>
			<Cell>{data.serial}</Cell>
			<Cell>{data.brand}</Cell>
			<Cell>{data.quantity}</Cell>
			<Cell>{data.assign}</Cell>
			<Cell>{data.value} BS</Cell>
			<Cell>{data.location}</Cell>
			<Cell>{data.dateOfAcquisition}</Cell>
			<Cell>{data.remarks}</Cell>
			{(validate({ per: permissions.deleteConsumables }) ||
				validate({ per: permissions.updateConsumables })) && (
				<Cell>
					<ActionMenu close={null}>
						<OptionTable
							filter={filter}
							handleDelete={handleDeleteConsumables(handleDelete, data)}
							handleEdit={handleEdit(setNewData, handleOpenUpdate, data)}
						/>
					</ActionMenu>
				</Cell>
			)}
		</TableCell>
	);
};
export default TableDataConsumables;
