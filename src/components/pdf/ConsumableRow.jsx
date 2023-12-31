import { Text, View } from '@react-pdf/renderer';
import { styles } from './pdfStyle';

const ConsumableRow = ({ data }) => {
	return data?.map((item, index) => (
		<View key={index} style={styles.tableRow}>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.description}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.serial}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.brand}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.quantity}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.assign}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.value}BS</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.location}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.dateOfAcquisition}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.remarks}</Text>
			</View>
		</View>
	));
};
export default ConsumableRow;
