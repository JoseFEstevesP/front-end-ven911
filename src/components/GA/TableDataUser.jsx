import { useEffect, useState } from 'react';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';
import { permissions } from '../../data/dataPermissions';

const TableDataUser = ({ data, handleList, setNewData, handleOpenUpdate }) => {
	const { validatePermissions } = useValidatePermissions();
	const [close, SetClose] = useState(null);
	const { handleDelete, data: dataDelete } = useDelete({
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.user.primary +
			system.routeApi.user.delete,
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
			ci: data.ci,
			name: data.name,
			surname: data.surname,
			email: data.email,
			uidRol: data.uidRol,
			uidSite: data.uidSite,
		});
		handleOpenUpdate();
		SetClose(false);
	};
	const handleDeleteUser = () => handleDelete({ uid: data.uid });
	return (
		<TableCell>
			<Cell>{data.name}</Cell>
			<Cell>{data.surname}</Cell>
			<Cell>{data.ci}</Cell>
			<Cell>{data.email}</Cell>
			<Cell>{data.nameRol}</Cell>
			{(validatePermissions({ per: permissions.deleteUser }) ||
				validatePermissions({ per: permissions.updateUser })) && (
				<Cell>
					<ActionMenu close={close}>
						{validatePermissions({ per: permissions.deleteUser }) && (
							<ActionMenuItem>
								<Btn
									nameIcon={'delete'}
									classIcon='icon--delete'
									handleClick={handleDeleteUser}
								/>
							</ActionMenuItem>
						)}
						{validatePermissions({ per: permissions.updateUser }) && (
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
export default TableDataUser;
