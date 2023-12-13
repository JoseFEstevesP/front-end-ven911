import { Text, View } from '@react-pdf/renderer';
import { styles } from './pdfStyle';

const RolRow = ({ data }) => {
	return data?.map((item, index) => (
		<View key={index} style={styles.tableRow}>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.name}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.permissions}</Text>
			</View>
		</View>
	));
};
export default RolRow;
