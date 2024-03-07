import { useEffect } from 'react';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useDelete from '../../hooks/useDelete';
import useValidate from '../../hooks/useValidate';
import ActionMenu from '../ActionMenu';
import TableCell, { Cell } from '../TableCell';
import OptionTable from './OptionTable';

// Función para manejar la lógica de eliminación de usuario
const handleDeleteBreakdownReport = (handleDelete, data) => {
	return () => handleDelete({ uid: data.uid });
};

// Función para manejar la lógica de edición de usuario
const handleEdit = (setNewData, handleOpenUpdate, data) => {
	return () => {
		setNewData({
			uid: data.uid,
			goods: data.goods,
			problem: data.problem,
			condition: data.condition,
			breakdownDepartment: data.breakdownDepartment,
			location: data.location,
			serialOrCodeBN: data.serialOrCodeBN,
		});
		handleOpenUpdate();
	};
};

const TableDataBreakdownReport = ({
	data,
	filter,
	handleList,
	setNewData,
	handleOpenUpdate,
}) => {
	const { validate } = useValidate();
	const { handleDelete, data: dataDelete } = useDelete({
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.breakdownReport.primary +
			system.routeApi.breakdownReport.delete,
	});
	useEffect(() => {
		if (dataDelete) {
			handleList({
				uidSite: filter?.site,
				orderProperty: filter?.order,
				status: filter?.status,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dataDelete]);
	return (
		<TableCell>
			<Cell>{data.goods}</Cell>
			<Cell>{data.problem}</Cell>
			<Cell>{data.condition}</Cell>
			<Cell>{data.dateOfReport}</Cell>
			<Cell>{data.timeOfReport}</Cell>
			<Cell>{data.breakdownDepartment}</Cell>
			<Cell>{data.location}</Cell>
			<Cell>{data.serialOrCodeBN}</Cell>
			{((validate({ per: permissions.delete }) &&
				validate({ per: permissions.ga })) ||
				(validate({ per: permissions.update }) &&
					validate({ per: permissions.ga }))) && (
				<Cell>
					<ActionMenu close={null}>
						<OptionTable
							filter={filter}
							handleDelete={handleDeleteBreakdownReport(handleDelete, data)}
							handleEdit={handleEdit(setNewData, handleOpenUpdate, data)}
						/>
					</ActionMenu>
				</Cell>
			)}
		</TableCell>
	);
};
export default TableDataBreakdownReport;
