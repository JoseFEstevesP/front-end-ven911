import './style/table.css';
const Table = ({ heads, children }) => {
	return (
		<>
			<table className='table'>
				<thead className='table__head'>
					<tr>
						{heads.map(head => (
							<th key={crypto.randomUUID()} className='table__th'>
								{head}
							</th>
						))}
					</tr>
				</thead>
				<tbody className='table__body'>{children}</tbody>
			</table>
		</>
	);
};
export default Table;
