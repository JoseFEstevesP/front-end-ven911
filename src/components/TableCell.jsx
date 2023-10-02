const TableCell = ({ children }) => {
	return (
		<>
			<tr className='table__tr'>{children}</tr>
		</>
	);
};

export const Cell = ({ text, className = '' }) => {
	return (
		<>
			<td className={`table__td ${className}`}>{text}</td>
		</>
	);
};

export default TableCell;
