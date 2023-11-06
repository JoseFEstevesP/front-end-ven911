import { useEffect, useState } from 'react';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';

const TableDataSite = ({ data, handleList, setNewData, handleOpenUpdate }) => {
	const { validatePermissions } = useValidatePermissions();
	const [close, SetClose] = useState(null);
	const { handleDelete, data: dataDelete } = useDelete({
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.site.primary +
			system.routeApi.site.delete,
	});
	useEffect(() => {
		if (dataDelete) {
			handleList({});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataDelete]);
	const handleEdit = () => {
		setNewData({
			uid: data.uid,
			name: data.name,
			direction: data.direction,
		});
		handleOpenUpdate();
		SetClose(false);
	};
	const handleDeleteUser = () => handleDelete({ uid: data.uid });
	return (
		<TableCell>
			<Cell>{data.name}</Cell>
			<Cell>{data.direction}</Cell>
			{(validatePermissions({ per: system.permissions.delete }) ||
				validatePermissions({ per: system.permissions.update })) && (
				<Cell>
					<ActionMenu close={close}>
						{validatePermissions({ per: system.permissions.delete }) && (
							<ActionMenuItem>
								<Btn
									nameIcon={'delete'}
									classIcon='icon--delete'
									handleClick={handleDeleteUser}
								/>
							</ActionMenuItem>
						)}
						{validatePermissions({ per: system.permissions.update }) && (
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
export default TableDataSite;
