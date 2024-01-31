import { useEffect, useState } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';

const TableDataSite = ({ data, handleList, setNewData, handleOpenUpdate }) => {
	const { validate } = useValidate();
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
	const handleDeleteSite = () => handleDelete({ uid: data.uid });
	return (
		<TableCell>
			<Cell>{data.name}</Cell>
			<Cell>{data.direction}</Cell>
			{(validate({ per: permissions.deleteSite }) ||
				validate({ per: permissions.updateSite })) && (
				<Cell>
					<ActionMenu close={close}>
						{validate({ per: permissions.deleteSite }) && (
							<ActionMenuItem>
								<Btn
									nameIcon={'delete'}
									classIcon='icon--delete'
									handleClick={handleDeleteSite}
								/>
							</ActionMenuItem>
						)}
						{validate({ per: permissions.updateSite }) && (
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
