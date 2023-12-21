import { Text, View } from '@react-pdf/renderer';
import { styles } from './pdfStyle';

const BreakdownReportRow = ({ data }) => {
	return data?.map((item, index) => (
		<View key={index} style={styles.tableRow}>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.goods}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.problem}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.symptoms}</Text>
			</View>
			<View style={styles.tableCol}>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.condition}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.dateOfReport}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.timeOfReport}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.breakdownDepartment}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.location}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.serialOrCodeBN}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item.user.ci}</Text>
			</View>
		</View>
	));
};
export default BreakdownReportRow;
