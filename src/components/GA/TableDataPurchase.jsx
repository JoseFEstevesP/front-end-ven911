import { useEffect, useState } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';

const TableDataPurchase = ({
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
			system.routeApi.purchase.primary +
			system.routeApi.purchase.delete,
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
		SetClose(false);
	};
	const handleDeletePurchase = () => handleDelete({ uid: data.uid });
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
			{(validatePermissions({ per: permissions.deletePurchase }) ||
				validatePermissions({ per: permissions.updatePurchase })) && (
				<Cell>
					<ActionMenu close={close}>
						{validatePermissions({ per: permissions.deletePurchase }) && (
							<ActionMenuItem>
								<Btn
									nameIcon={'delete'}
									classIcon='icon--delete'
									handleClick={handleDeletePurchase}
								/>
							</ActionMenuItem>
						)}
						{validatePermissions({ per: permissions.updatePurchase }) && (
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
export default TableDataPurchase;
