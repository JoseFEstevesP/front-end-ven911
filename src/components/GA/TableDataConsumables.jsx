import { useEffect, useState } from 'react';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';

const TableDataConsumables = ({
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
			system.routeApi.consumables.primary +
			system.routeApi.consumables.delete,
	});
	useEffect(() => {
		if (dataDelete) {
			handleList({ orderProperty: order });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataDelete]);
	const handleEdit = () => {
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
		SetClose(false);
	};
	const handleDeleteUser = () => handleDelete({ uid: data.uid });
	return (
		<TableCell>
			<Cell>{data.description}</Cell>
			<Cell>{data.serial}</Cell>
			<Cell>{data.brand}</Cell>
			<Cell>{data.quantity}</Cell>
			<Cell>{data.value} BS</Cell>
			<Cell>{data.location}</Cell>
			<Cell>{data.dateOfAcquisition}</Cell>
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
export default TableDataConsumables;
