import { Text, View } from '@react-pdf/renderer';
import { styles } from './pdfStyle';

const TechnologyRow = ({ data = [] }) => {
	return data?.map((item, index) => (
		<View key={index} style={styles.tableRow}>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item?.description}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item?.brand}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item?.model}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item?.serial}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item?.quantity}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item?.assign}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item?.condition}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item?.dateOfAcquisition}</Text>
			</View>
			<View style={styles.tableCol}>
				<Text style={styles.tableCell}>{item?.codeBN}</Text>
			</View>
		</View>
	));
};
export default TechnologyRow;
