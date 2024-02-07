import { useEffect } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import TableCell, { Cell } from '../TableCell';
import OptionTable from './OptionTable';

// Función para manejar la lógica de eliminación de usuario
const handleDeleteFurniture = (handleDelete, data) => {
	return () => handleDelete({ uid: data.uid });
};

// Función para manejar la lógica de edición de usuario
const handleEdit = (setNewData, handleOpenUpdate, data) => {
	return () => {
		setNewData({
			uid: data.uid,
			description: data.description,
			serial: data.serial,
			quantity: data.quantity,
			value: data.value,
			condition: data.condition,
			dateOfAcquisition: data.dateOfAcquisition,
			location: data.location,
			warranty: data.warranty,
			remarks: data.remarks,
			codeBN: data.codeBN,
		});
		handleOpenUpdate();
	};
};

const TableDataFurniture = ({
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
			system.routeApi.furniture.primary +
			system.routeApi.furniture.delete,
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
			<Cell>{data.quantity}</Cell>
			<Cell>{data.assign}</Cell>
			<Cell>{data.value} BS</Cell>
			<Cell>{data.condition}</Cell>
			<Cell>{data.location}</Cell>
			<Cell>{data.dateOfAcquisition}</Cell>
			<Cell>{data.warranty}</Cell>
			<Cell>{data.remarks}</Cell>
			<Cell>{data.codeBN}</Cell>
			{(validate({ per: permissions.deleteFurniture }) ||
				validate({ per: permissions.updateFurniture })) && (
				<Cell>
					<ActionMenu close={null}>
						<OptionTable
							filter={filter}
							handleDelete={handleDeleteFurniture(handleDelete, data)}
							handleEdit={handleEdit(setNewData, handleOpenUpdate, data)}
						/>
					</ActionMenu>
				</Cell>
			)}
		</TableCell>
	);
};
export default TableDataFurniture;
