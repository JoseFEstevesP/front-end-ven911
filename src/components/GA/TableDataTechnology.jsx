import { useEffect } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import TableCell, { Cell } from '../TableCell';
import OptionTable from './OptionTable';

// Función para manejar la lógica de eliminación de usuario
const handleDeleteTechnology = (handleDelete, data) => {
	return () => handleDelete({ uid: data.uid });
};

// Función para manejar la lógica de edición de usuario
const handleEdit = (setNewData, handleOpenUpdate, data) => {
	return () => {
		setNewData({
			uid: data.uid,
			description: data.description,
			brand: data.brand,
			model: data.model,
			serial: data.serial,
			quantity: data.quantity,
			condition: data.condition,
			dateOfAcquisition: data.dateOfAcquisition,
			codeBN: data.codeBN,
		});
		handleOpenUpdate();
	};
};

const TableDataTechnology = ({
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
			system.routeApi.technology.primary +
			system.routeApi.technology.delete,
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
			<Cell>{data.brand}</Cell>
			<Cell>{data.model}</Cell>
			<Cell>{data.serial}</Cell>
			<Cell>{data.quantity}</Cell>
			<Cell>{data.assign}</Cell>
			<Cell>{data.condition}</Cell>
			<Cell>{data.dateOfAcquisition}</Cell>
			<Cell>{data.codeBN}</Cell>
			{(validate({ per: permissions.deleteTechnology }) ||
				validate({ per: permissions.updateTechnology })) && (
				<Cell>
					<ActionMenu close={null}>
						<OptionTable
							filter={filter}
							handleDelete={handleDeleteTechnology(handleDelete, data)}
							handleEdit={handleEdit(setNewData, handleOpenUpdate, data)}
						/>
					</ActionMenu>
				</Cell>
			)}
		</TableCell>
	);
};
export default TableDataTechnology;
