import { useCallback, useEffect, useState } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
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
	const { validate } = useValidate();
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
	const handleDeleteAssign = () => handleDelete({ uid: data.uid });
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
					<ActionMenu close={close}>
						{validate({ per: permissions.deleteAssign }) && (
							<ActionMenuItem>
								<Btn
									nameIcon={'delete'}
									classIcon='icon--delete'
									handleClick={handleDeleteAssign}
								/>
							</ActionMenuItem>
						)}
						{validate({ per: permissions.updateAssign }) && (
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
