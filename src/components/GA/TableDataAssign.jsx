import { useCallback, useEffect, useState } from 'react';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';
const inventoryData = {
	consumable: 'Consumibles',
	furniture: 'Mobiliario',
	technology: 'Tecnología',
	vehicle: 'Vehículo',
};
const TableDataAssign = ({
	data,
	order,
	handleList,
	setNewData,
	handleOpenUpdate,
}) => {
	const { validatePermissions } = useValidatePermissions();
	const [close, SetClose] = useState(null);
	const { handleDelete, data: dataDelete } = useDelete({
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.assign.primary +
			system.routeApi.assign.delete,
	});
	useEffect(() => {
		if (dataDelete) {
			handleList({ orderProperty: order });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataDelete]);
	const handleEdit = useCallback(() => {
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
		SetClose(false);
	}, [data, handleOpenUpdate, setNewData]);
	const handleDeleteUser = () => handleDelete({ uid: data.uid });
	console.log(
		'inventoryData[data?.inventory]:',
		inventoryData[data?.inventory],
	);
	console.log('data?.inventory:', data?.inventory);
	return (
		<TableCell>
			<Cell>{inventoryData[data?.inventory]}</Cell>
			<Cell>{data.article}</Cell>
			<Cell>{data.department}</Cell>
			<Cell>{data.quantity}</Cell>
			<Cell>{data.description}</Cell>
			<Cell>{data.remarks}</Cell>
			{((validatePermissions({ per: system.permissions.delete }) &&
				validatePermissions({ per: system.permissions.ga })) ||
				(validatePermissions({ per: system.permissions.update }) &&
					validatePermissions({ per: system.permissions.ga }))) && (
				<Cell>
					<ActionMenu close={close}>
						{validatePermissions({ per: system.permissions.delete }) &&
							validatePermissions({ per: system.permissions.ga }) && (
								<ActionMenuItem>
									<Btn
										nameIcon={'delete'}
										classIcon='icon--delete'
										handleClick={handleDeleteUser}
									/>
								</ActionMenuItem>
							)}
						{validatePermissions({ per: system.permissions.update }) &&
							validatePermissions({ per: system.permissions.ga }) && (
								<ActionMenuItem>
									<Btn
										nameIcon={'edit'}
										classIcon='icon--edit'
										handleClick={handleEdit}
									/>
								</ActionMenuItem>
							)}
					</ActionMenu>
				</Cell>
			)}
		</TableCell>
	);
};
export default TableDataAssign;
