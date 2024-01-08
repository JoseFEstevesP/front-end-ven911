import { useEffect, useState } from 'react';
import { permissions } from '../../data/dataPermissions';
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
	const handleDeleteConsumables = () => handleDelete({ uid: data.uid });
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
			{(validatePermissions({ per: permissions.deleteConsumables }) ||
				validatePermissions({ per: permissions.updateConsumables })) && (
				<Cell>
					<ActionMenu close={close}>
						{validatePermissions({ per: permissions.deleteConsumables }) && (
							<ActionMenuItem>
								<Btn
									nameIcon={'delete'}
									classIcon='icon--delete'
									handleClick={handleDeleteConsumables}
								/>
							</ActionMenuItem>
						)}
						{validatePermissions({ per: permissions.updateConsumables }) && (
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
