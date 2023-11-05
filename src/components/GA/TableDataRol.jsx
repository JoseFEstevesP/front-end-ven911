import { useEffect, useState } from 'react';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';

const TableDataRol = ({ data, handleList, setNewData, handleOpenUpdate }) => {
	const [close, SetClose] = useState(null);
	const { handleDelete, data: dataDelete } = useDelete({
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.rol.primary +
			system.routeApi.rol.delete,
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
			permissions: data.permissions,
		});
		handleOpenUpdate();
		SetClose(false);
	};
	const handleDeleteUser = () => handleDelete({ uid: data.uid });

	return (
		<TableCell>
			<Cell>{data.name}</Cell>
			<Cell>{data.permissions}</Cell>
			<Cell>
				<ActionMenu close={close}>
					<ActionMenuItem>
						<Btn
							nameIcon={'delete'}
							classIcon='icon--delete'
							handleClick={handleDeleteUser}
						/>
					</ActionMenuItem>
					<ActionMenuItem>
						<Btn
							nameIcon={'edit'}
							classIcon='icon--edit'
							handleClick={handleEdit}
						/>
					</ActionMenuItem>
				</ActionMenu>
			</Cell>
		</TableCell>
	);
};
export default TableDataRol;
