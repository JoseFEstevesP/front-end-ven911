import { useEffect, useState } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';

const TableDataFurniture = ({
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
			system.routeApi.furniture.primary +
			system.routeApi.furniture.delete,
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
		SetClose(false);
	};
	const handleDeleteFurniture = () => handleDelete({ uid: data.uid });
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
					<ActionMenu close={close}>
						{validate({ per: permissions.deleteFurniture }) && (
							<ActionMenuItem>
								<Btn
									nameIcon={'delete'}
									classIcon='icon--delete'
									handleClick={handleDeleteFurniture}
								/>
							</ActionMenuItem>
						)}
						{validate({ per: permissions.updateFurniture }) && (
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
export default TableDataFurniture;
