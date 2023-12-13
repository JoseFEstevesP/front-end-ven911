import { Text, View } from '@react-pdf/renderer';
import { styles } from './pdfStyle';

const SiteRow = ({ data }) => {
	return data?.map((item, index) => (
		<View key={index} style={styles.tableRow}>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.name}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.direction}</Text>
			</View>
		</View>
	));
};
export default SiteRow;
