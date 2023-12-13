import {
	Document,
	Image,
	PDFViewer,
	Page,
	Text,
	View,
} from '@react-pdf/renderer';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AssignRow from '../components/pdf/AssignRow';
import BreakdownReportRow from '../components/pdf/BreakdownReportRow';
import ConsumableRow from '../components/pdf/ConsumableRow';
import FurnitureRow from '../components/pdf/FurnitureRow';
import PurchaseRow from '../components/pdf/PurchaseRow';
import RolRow from '../components/pdf/RolRow';
import SiteRow from '../components/pdf/SiteRow';
import TechnologyRow from '../components/pdf/TechnologyRow';
import UserRow from '../components/pdf/UserRow';
import VehicleRow from '../components/pdf/VehicleRow';
import { styles } from '../components/pdf/pdfStyle';
import { system } from '../data/system';
import usePdf from '../hooks/usePdf';
import head from './../assets/img/logo.png';

const header = {
	user: [
		system.component.form.label.name,
		system.component.form.label.surname,
		system.component.form.label.ci,
		system.component.form.label.email,
		system.component.form.label.rol,
	],
	rol: [
		system.component.form.label.name,
		system.component.form.label.permissions,
	],
	site: [
		system.component.form.label.name,
		system.component.form.label.direction,
	],
	technology: [
		system.component.form.label.description,
		system.component.form.label.brand,
		system.component.form.label.model,
		system.component.form.label.serial,
		system.component.form.label.quantity,
		system.component.form.label.assign,
		system.component.form.label.value,
		system.component.form.label.condition,
		system.component.form.label.location,
		system.component.form.label.dateOfAcquisition,
		system.component.form.label.warranty,
		system.component.form.label.remarks,
		system.component.form.label.codeBN,
		system.component.form.label.user,
	],
	vehicle: [
		system.component.form.label.description,
		system.component.form.label.brand,
		system.component.form.label.model,
		system.component.form.label.place,
		system.component.form.label.quantity,
		system.component.form.label.assign,
		system.component.form.label.value,
		system.component.form.label.condition,
		system.component.form.label.location,
		system.component.form.label.dateOfAcquisition,
		system.component.form.label.warranty,
		system.component.form.label.remarks,
		system.component.form.label.codeBN,
		system.component.form.label.user,
	],
	purchase: [
		system.component.form.label.product,
		system.component.form.label.serial,
		system.component.form.label.brand,
		system.component.form.label.model,
		system.component.form.label.dateOfPurchase,
		system.component.form.label.value,
		system.component.form.label.quantity,
		system.component.form.label.supplier,
		system.component.form.label.warranty,
		system.component.form.label.orderNumber,
		system.component.form.label.location,
		system.component.form.label.user,
	],
	furniture: [
		system.component.form.label.description,
		system.component.form.label.serial,
		system.component.form.label.quantity,
		system.component.form.label.assign,
		system.component.form.label.value,
		system.component.form.label.condition,
		system.component.form.label.location,
		system.component.form.label.dateOfAcquisition,
		system.component.form.label.warranty,
		system.component.form.label.remarks,
		system.component.form.label.codeBN,
		system.component.form.label.user,
	],
	consumables: [
		system.component.form.label.description,
		system.component.form.label.serial,
		system.component.form.label.brand,
		system.component.form.label.quantity,
		system.component.form.label.assign,
		system.component.form.label.value,
		system.component.form.label.location,
		system.component.form.label.dateOfAcquisition,
		system.component.form.label.remarks,
		system.component.form.label.user,
	],
	breakdownReport: [
		system.component.form.label.goods,
		system.component.form.label.problem,
		system.component.form.label.symptoms,
		system.component.form.label.proposedSolution,
		system.component.form.label.condition,
		system.component.form.label.dateOfReport,
		system.component.form.label.timeOfReport,
		system.component.form.label.breakdownDepartment,
		system.component.form.label.location,
		system.component.form.label.serialOrCodeBN,
		system.component.form.label.user,
	],
	assign: [
		system.component.form.label.inventory,
		system.component.form.label.article,
		system.component.form.label.department,
		system.component.form.label.quantity,
		system.component.form.label.description,
		system.component.form.label.remarks,
		system.component.form.label.user,
	],
};
const row = ({ itemData, report }) => {
	const rowItem = {
		user: <UserRow data={itemData} />,
		rol: <RolRow data={itemData} />,
		site: <SiteRow data={itemData} />,
		technology: <TechnologyRow data={itemData} />,
		vehicle: <VehicleRow data={itemData} />,
		purchase: <PurchaseRow data={itemData} />,
		furniture: <FurnitureRow data={itemData} />,
		consumables: <ConsumableRow data={itemData} />,
		breakdownReport: <BreakdownReportRow data={itemData} />,
		assign: <AssignRow data={itemData} />,
	};
	return rowItem[report];
};
const Pdf = () => {
	const [loader, setLoader] = useState(true);
	const [loaderPDF, setLoaderPDF] = useState(false);
	const { handelFetch, dataPDF: data } = usePdf();
	const { report } = useParams();
	useEffect(() => {
		handelFetch({
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi[report].primary +
				system.routeApi[report].report,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (data) {
			setLoader(false);
			setLoaderPDF(true);
		}
	}, [data]);
	const handleLoadPDF = () => {
		setLoaderPDF(false);
	};
	return (
		<>
			{loader && <h1>Cargando data...</h1>}
			{loaderPDF && <h1>Cargando pdf...</h1>}
			<PDFViewer style={{ width: '100%', height: '99vh' }}>
				{!loader && (
					<Document onRender={handleLoadPDF}>
						{data?.rows?.map((itemData, index) => (
							<Page orientation='landscape' key={index} style={styles.body}>
								<Image style={styles.head} src={head} />
								<Text style={styles.text}>
									República bolivariana de Venezuela ministerio del poder
									popular para Relaciones interiores, justicia y paz Centro de
									comando, control y telecomunicaciones VEN 9-1-1
								</Text>
								<View style={styles.contentInfo}>
									<View style={styles.info}>
										<View>
											<Text style={styles.font}>Reporte: {data.report}</Text>
											<Text style={styles.font}>Sede: {data.siteName}</Text>
										</View>
										<View>
											<Text style={styles.font}>Fecha: {data.date}</Text>
											<Text style={styles.font}>Hora: {data.time}</Text>
										</View>
									</View>
									<Text style={styles.font}>
										Autor del reporte: {data.author}
									</Text>
								</View>
								<View style={styles.table}>
									<View style={styles.tableHeadRow}>
										{header[report]?.map((item, index) => (
											<View key={index} style={styles.tableCol}>
												<Text style={styles.tableCell}>{item}</Text>
											</View>
										))}
									</View>
									{row({ itemData, report })}
								</View>
								<Text
									style={styles.paginate}
									render={({ pageNumber, totalPages }) =>
										`${pageNumber} / ${totalPages}`
									}
									fixed
								/>
							</Page>
						))}
					</Document>
				)}
			</PDFViewer>
		</>
	);
};
export default Pdf;
