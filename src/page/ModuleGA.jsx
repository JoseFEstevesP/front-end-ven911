import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import MenuSubItem from '../components/MenuISubItem';
import MenuItem from '../components/MenuItem';
import Page from '../components/Page';
import { permissions } from '../data/dataPermissions';
import useValidate from '../hooks/useValidate';
import Assign from './GA/Assign';
import BreakdownReport from './GA/BreakdownReport';
import Consumables from './GA/Consumables';
import Furniture from './GA/Furniture';
import Init from './GA/Init';
import Purchase from './GA/Purchase';
import Rol from './GA/Rol';
import Site from './GA/Site';
import Technology from './GA/Technology';
import User from './GA/User';
import Vehicle from './GA/Vehicle';
import Pdf from './Pdf';
import Profile from './profile';

const ModuleGA = () => {
	const { validate } = useValidate();
	return (
		<Page title={'Gestión Administrativa'}>
			<div className='ga'>
				<Menu route={'/ga'}>
					<MenuItem text={'Inicio'} to={'/ga'} />
					{validate({ per: permissions.user }) && (
						<MenuItem text={'Usuario'} to={'/ga/user'} />
					)}
					{!validate({ per: permissions.user }) &&
						validate({ per: permissions.rol }) && (
							<MenuItem text={'Rol'} to={'/ga/rol'} />
						)}
					{!validate({ per: permissions.user }) &&
						validate({ per: permissions.site }) && (
							<MenuItem text={'Site'} to={'/ga/site'} />
						)}
					{(validate({ per: permissions.technology }) ||
						validate({ per: permissions.consumables }) ||
						validate({ per: permissions.furniture }) ||
						validate({ per: permissions.vehicle })) && (
						<MenuSubItem text={'Bienes Nacionales'}>
							{validate({ per: permissions.technology }) && (
								<MenuItem text={'Tecnología'} to={'/ga/technology'} />
							)}
							{validate({ per: permissions.consumables }) && (
								<MenuItem text={'Consumible'} to={'/ga/consumables'} />
							)}
							{validate({ per: permissions.furniture }) && (
								<MenuItem text={'Mobiliario'} to={'/ga/furniture'} />
							)}
							{validate({ per: permissions.vehicle }) && (
								<MenuItem text={'Vehículo'} to={'/ga/vehicle'} />
							)}
						</MenuSubItem>
					)}
					{validate({ per: permissions.breakdownReport }) && (
						<MenuItem text={'Reporte averia'} to={'/ga/report'} />
					)}
					{validate({ per: permissions.purchase }) && (
						<MenuItem text={'Compras'} to={'/ga/purchase'} />
					)}
					{validate({ per: permissions.assign }) && (
						<MenuItem text={'Asignación'} to={'/ga/assign'} />
					)}
				</Menu>
				<Routes>
					<Route path='/' element={<Init />} />
					{validate({ per: permissions.user }) && (
						<Route path='/user' element={<User />} />
					)}
					{validate({ per: permissions.rol }) && (
						<Route path='/rol' element={<Rol />} />
					)}
					{validate({ per: permissions.site }) && (
						<Route path='/site' element={<Site />} />
					)}
					{validate({ per: permissions.technology }) && (
						<Route path='/technology' element={<Technology />} />
					)}
					{validate({ per: permissions.consumables }) && (
						<Route path='/consumables' element={<Consumables />} />
					)}
					{validate({ per: permissions.furniture }) && (
						<Route path='/furniture' element={<Furniture />} />
					)}
					{validate({ per: permissions.vehicle }) && (
						<Route path='/vehicle' element={<Vehicle />} />
					)}
					{validate({ per: permissions.breakdownReport }) && (
						<Route path='/report' element={<BreakdownReport />} />
					)}
					{validate({ per: permissions.purchase }) && (
						<Route path='/purchase' element={<Purchase />} />
					)}
					{validate({ per: permissions.assign }) && (
						<Route path='/assign' element={<Assign />} />
					)}
					{validate({ per: permissions.profile }) && (
						<Route path='/profile' element={<Profile />} />
					)}
					{/* {validate({ per: permissions.pdfAssign }) ||
						validate({ per: permissions.pdfBreakdownReport }) ||
						validate({ per: permissions.pdfConsumables }) ||
						validate({ per: permissions.pdfFurniture }) ||
						validate({ per: permissions.pdfPurchase }) ||
						validate({ per: permissions.pdfRol }) ||
						validate({ per: permissions.pdfSite }) ||
						validate({ per: permissions.pdfTechnology }) ||
						validate({ per: permissions.pdfUser }) ||
						(validate({ per: permissions.pdfVehicle }) && ( */}
					<Route path='/pdf/:report' element={<Pdf />} />
					{/* ))} */}
				</Routes>
			</div>
		</Page>
	);
};
export default ModuleGA;
