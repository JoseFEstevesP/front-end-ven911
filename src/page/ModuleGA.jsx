import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import MenuSubItem from '../components/MenuISubItem';
import MenuItem from '../components/MenuItem';
import Page from '../components/Page';
import { permissions } from '../data/dataPermissions';
import useValidatePermissions from '../hooks/useValidatePermissions';
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
	const { validatePermissions } = useValidatePermissions();
	return (
		<Page title={'Gestión Administrativa'}>
			<div className='ga'>
				<Menu route={'/ga'}>
					<MenuItem text={'Inicio'} to={'/ga'} />
					{validatePermissions({ per: permissions.user }) && (
						<MenuItem text={'Usuario'} to={'/ga/user'} />
					)}
					{(validatePermissions({ per: permissions.technology }) ||
						validatePermissions({ per: permissions.consumables }) ||
						validatePermissions({ per: permissions.furniture }) ||
						validatePermissions({ per: permissions.vehicle })) && (
						<MenuSubItem text={'Bienes Nacionales'}>
							{validatePermissions({ per: permissions.technology }) && (
								<MenuItem text={'Tecnología'} to={'/ga/technology'} />
							)}
							{validatePermissions({ per: permissions.consumables }) && (
								<MenuItem text={'Consumible'} to={'/ga/consumables'} />
							)}
							{validatePermissions({ per: permissions.furniture }) && (
								<MenuItem text={'Mobiliario'} to={'/ga/furniture'} />
							)}
							{validatePermissions({ per: permissions.vehicle }) && (
								<MenuItem text={'Vehículo'} to={'/ga/vehicle'} />
							)}
						</MenuSubItem>
					)}
					{validatePermissions({ per: permissions.breakdownReport }) && (
						<MenuItem text={'Reporte averia'} to={'/ga/report'} />
					)}
					{validatePermissions({ per: permissions.purchase }) && (
						<MenuItem text={'Compras'} to={'/ga/purchase'} />
					)}
					{validatePermissions({ per: permissions.assign }) && (
						<MenuItem text={'Asignación'} to={'/ga/assign'} />
					)}
				</Menu>
				<Routes>
					<Route path='/' element={<Init />} />
					{validatePermissions({ per: permissions.user }) && (
						<Route path='/user' element={<User />} />
					)}
					{validatePermissions({ per: permissions.rol }) && (
						<Route path='/rol' element={<Rol />} />
					)}
					{validatePermissions({ per: permissions.site }) && (
						<Route path='/site' element={<Site />} />
					)}
					{validatePermissions({ per: permissions.technology }) && (
						<Route path='/technology' element={<Technology />} />
					)}
					{validatePermissions({ per: permissions.consumables }) && (
						<Route path='/consumables' element={<Consumables />} />
					)}
					{validatePermissions({ per: permissions.furniture }) && (
						<Route path='/furniture' element={<Furniture />} />
					)}
					{validatePermissions({ per: permissions.vehicle }) && (
						<Route path='/vehicle' element={<Vehicle />} />
					)}
					{validatePermissions({ per: permissions.breakdownReport }) && (
						<Route path='/report' element={<BreakdownReport />} />
					)}
					{validatePermissions({ per: permissions.purchase }) && (
						<Route path='/purchase' element={<Purchase />} />
					)}
					{validatePermissions({ per: permissions.assign }) && (
						<Route path='/assign' element={<Assign />} />
					)}
					{validatePermissions({ per: permissions.profile }) && (
						<Route path='/profile' element={<Profile />} />
					)}
					{/* {validatePermissions({ per: permissions.pdfAssign }) ||
						validatePermissions({ per: permissions.pdfBreakdownReport }) ||
						validatePermissions({ per: permissions.pdfConsumables }) ||
						validatePermissions({ per: permissions.pdfFurniture }) ||
						validatePermissions({ per: permissions.pdfPurchase }) ||
						validatePermissions({ per: permissions.pdfRol }) ||
						validatePermissions({ per: permissions.pdfSite }) ||
						validatePermissions({ per: permissions.pdfTechnology }) ||
						validatePermissions({ per: permissions.pdfUser }) ||
						(validatePermissions({ per: permissions.pdfVehicle }) && ( */}
					<Route path='/pdf/:report' element={<Pdf />} />
					{/* ))} */}
				</Routes>
			</div>
		</Page>
	);
};
export default ModuleGA;
