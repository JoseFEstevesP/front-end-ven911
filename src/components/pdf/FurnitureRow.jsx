import { Text, View } from '@react-pdf/renderer';
import { styles } from './pdfStyle';

const FurnitureRow = ({ data }) => {
	return data?.map((item, index) => (
		<View key={index} style={styles.tableRow}>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.description}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.serial}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.quantity}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.assign}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.condition}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.dateOfAcquisition}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.codeBN}</Text>
			</View>
		</View>
	));
};
export default FurnitureRow;
