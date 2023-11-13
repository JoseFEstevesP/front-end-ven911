import { useEffect, useState } from 'react';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';

const TableDataVehicle = ({
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
			system.routeApi.vehicle.primary +
			system.routeApi.vehicle.delete,
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
			brand: data.brand,
			model: data.model,
			place: data.place,
			quantity: data.quantity,
			value: data.value,
			state: data.state,
			dateOfAcquisition: data.dateOfAcquisition,
			location: data.location,
			warranty: data.warranty,
			remarks: data.remarks,
			codeBN: data.codeBN,
		});
		handleOpenUpdate();
		SetClose(false);
	};
	const handleDeleteUser = () => handleDelete({ uid: data.uid });
	return (
		<TableCell>
			<Cell>{data.description}</Cell>
			<Cell>{data.brand}</Cell>
			<Cell>{data.model}</Cell>
			<Cell>{data.place}</Cell>
			<Cell>{data.quantity}</Cell>
			<Cell>{data.value} BS</Cell>
			<Cell>{data.state}</Cell>
			<Cell>{data.location}</Cell>
			<Cell>{data.dateOfAcquisition}</Cell>
			<Cell>{data.warranty}</Cell>
			<Cell>{data.remarks}</Cell>
			<Cell>{data.codeBN}</Cell>
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
export default TableDataVehicle;
