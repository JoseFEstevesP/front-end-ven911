import { Text, View } from '@react-pdf/renderer';
import { styles } from './pdfStyle';

const UserRow = ({ data }) => {
	return data?.map((item, index) => (
		<View key={index} style={styles.tableRow}>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.name}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.surname}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.ci}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.email}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.rol.name}</Text>
			</View>
		</View>
	));
};
export default UserRow;
