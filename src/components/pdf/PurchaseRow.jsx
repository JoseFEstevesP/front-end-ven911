import { Text, View } from '@react-pdf/renderer';
import { styles } from './pdfStyle';

const PurchaseRow = ({ data }) => {
	return data?.map((item, index) => (
		<View key={index} style={styles.tableRow}>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.product}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.serial}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.brand}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.model}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.dateOfPurchase}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.value}BS</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.quantity}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.supplier}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.warranty}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.orderNumber}</Text>
			</View>
		</View>
	));
};
export default PurchaseRow;
