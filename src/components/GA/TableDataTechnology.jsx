import { useEffect, useState } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';

const TableDataTechnology = ({
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
			system.routeApi.technology.primary +
			system.routeApi.technology.delete,
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
	const handleDeleteTechnology = () => handleDelete({ uid: data.uid });
	return (
		<TableCell>
			<Cell>{data.description}</Cell>
			<Cell>{data.brand}</Cell>
			<Cell>{data.model}</Cell>
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
			{(validate({ per: permissions.deleteTechnology }) ||
				validate({ per: permissions.updateTechnology })) && (
				<Cell>
					<ActionMenu close={close}>
						{validate({ per: permissions.deleteTechnology }) && (
							<ActionMenuItem>
								<Btn
									nameIcon={'delete'}
									classIcon='icon--delete'
									handleClick={handleDeleteTechnology}
								/>
							</ActionMenuItem>
						)}
						{validate({ per: permissions.updateTechnology }) && (
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
export default TableDataTechnology;
