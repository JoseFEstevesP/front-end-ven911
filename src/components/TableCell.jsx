const TableCell = ({ children }) => {
	return (
		<>
			<tr className='table__tr'>{children}</tr>
		</>
	);
};

export const Cell = ({ className = '', children }) => {
	return (
		<>
			<td className={`table__td ${className}`}>{children}</td>
		</>
	);
};

export default TableCell;
