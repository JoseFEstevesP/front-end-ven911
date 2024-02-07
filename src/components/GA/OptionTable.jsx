import { permissions } from '../../data/dataPermissions';
import { filterText } from '../../data/system';
import useValidate from '../../hooks/useValidate';
import ActionMenuItem from '../ActionMenuItem';
import Btn from '../Btn';

const OptionTable = ({ filter, handleDelete, handleEdit }) => {
	const { validate } = useValidate();
	return (
		<>
			{validate({ per: permissions.deleteUser }) &&
				filter?.status !== filterText.inactive && (
					<ActionMenuItem>
						<Btn
							nameIcon={'delete'}
							classIcon='icon--delete'
							handleClick={handleDelete}
						/>
					</ActionMenuItem>
				)}
			{validate({ per: permissions.updateUser }) && (
				<ActionMenuItem>
					<Btn
						nameIcon={'edit'}
						classIcon='icon--edit'
						handleClick={handleEdit}
					/>
				</ActionMenuItem>
			)}
		</>
	);
};
export default OptionTable;
