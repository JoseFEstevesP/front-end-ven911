import { useEffect, useState } from 'react';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import ActionMenu from '../ActionMenu';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';
import TableCell, { Cell } from '../TableCell';

const TableDataBreakdownReport = ({
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
			system.routeApi.breakdownReport.primary +
			system.routeApi.breakdownReport.delete,
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
			goods: data.goods,
			problem: data.problem,
			symptoms: data.symptoms,
			proposedSolution: data.proposedSolution,
			condition: data.condition,
			breakdownDepartment: data.breakdownDepartment,
			location: data.location,
			serialOrCodeBN: data.serialOrCodeBN,
		});
		handleOpenUpdate();
		SetClose(false);
	};
	const handleDeleteUser = () => handleDelete({ uid: data.uid });
	return (
		<TableCell>
			<Cell>{data.goods}</Cell>
			<Cell>{data.problem}</Cell>
			<Cell>{data.symptoms}</Cell>
			<Cell>{data.proposedSolution}</Cell>
			<Cell>{data.condition}</Cell>
			<Cell>{data.dateOfReport}</Cell>
			<Cell>{data.timeOfReport}</Cell>
			<Cell>{data.breakdownDepartment}</Cell>
			<Cell>{data.location}</Cell>
			<Cell>{data.serialOrCodeBN}</Cell>
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
export default TableDataBreakdownReport;
