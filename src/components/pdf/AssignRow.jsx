import { Text, View } from '@react-pdf/renderer';
import { styles } from './pdfStyle';

const AssignRow = ({ data }) => {
	return data?.map((item, index) => (
		<View key={index} style={styles.tableRow}>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.inventory}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.article}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.serialOrCodeBN}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.department}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.quantity}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.description}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.remarks}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.user.ci}</Text>
			</View>
		</View>
	));
};
export default AssignRow;
