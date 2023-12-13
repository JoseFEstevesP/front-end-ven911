import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
	table: {
		display: 'table',
		width: '100%',
		borderStyle: 'solid',
		borderWidth: '1px',
		borderRightWidth: 0,
		borderBottomWidth: 0,
	},
	tableRow: {
		width: '100%',
		margin: 'auto',
		flexDirection: 'row',
	},
	tableHeadRow: {
		width: '100%',
		margin: 'auto',
		flexDirection: 'row',
		backgroundColor: '#49ab84',
	},
	tableCol: {
		width: '100%',
		borderStyle: 'solid',
		borderWidth: '1px',
		borderLeftWidth: 0,
		borderTopWidth: 0,
	},
	tableCell: {
		margin: 'auto',
		padding: '4px',
		fontSize: '10px',
		tableLayout: 'fixed',
	},
	body: {
		width: '100%',
		overflow: 'scroll',
		padding: '8px',
		pageBreakAfter: 'always',
	},
	text: {
		width: '60%',
		textAlign: 'center',
		fontSize: '12px',
		margin: '16px auto',
	},
	contentInfo: { marginBottom: '16px' },
	info: {
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
	},
	font: { fontSize: '12px' },
	paginate: {
		position: 'absolute',
		fontSize: 12,
		bottom: 16,
		left: 0,
		right: 0,
		textAlign: 'center',
		color: 'grey',
	},
	head: {
		width: '70%',
		margin: '0 auto',
	},
});
