import { useEffect } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import TableCell, { Cell } from '../TableCell';
import OptionTable from './OptionTable';

// Función para manejar la lógica de eliminación de usuario
const handleDeletePurchase = (handleDelete, data) => {
	return () => handleDelete({ uid: data.uid });
};

// Función para manejar la lógica de edición de usuario
const handleEdit = (setNewData, handleOpenUpdate, data) => {
	return () => {
		setNewData({
			uid: data.uid,
			product: data.product,
			serial: data.serial,
			brand: data.brand,
			model: data.model,
			dateOfPurchase: data.dateOfPurchase,
			value: data.value,
			quantity: data.quantity,
			supplier: data.supplier,
			warranty: data.warranty,
			orderNumber: data.orderNumber,
			location: data.location,
		});
		handleOpenUpdate();
	};
};

const TableDataPurchase = ({
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
			system.routeApi.purchase.primary +
			system.routeApi.purchase.delete,
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
			<Cell>{data.product}</Cell>
			<Cell>{data.serial}</Cell>
			<Cell>{data.brand}</Cell>
			<Cell>{data.model}</Cell>
			<Cell>{data.dateOfPurchase}</Cell>
			<Cell>{data.orderNumber}</Cell>
			<Cell>{data.value} BS</Cell>
			<Cell>{data.quantity}</Cell>
			<Cell>{data.supplier}</Cell>
			<Cell>{data.warranty}</Cell>
			<Cell>{data.location}</Cell>
			{(validate({ per: permissions.deletePurchase }) ||
				validate({ per: permissions.updatePurchase })) && (
				<Cell>
					<ActionMenu close={null}>
						<OptionTable
							filter={filter}
							handleDelete={handleDeletePurchase(handleDelete, data)}
							handleEdit={handleEdit(setNewData, handleOpenUpdate, data)}
						/>
					</ActionMenu>
				</Cell>
			)}
		</TableCell>
	);
};
export default TableDataPurchase;
