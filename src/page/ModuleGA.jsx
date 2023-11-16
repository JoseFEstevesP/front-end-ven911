import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import MenuSubItem from '../components/MenuISubItem';
import MenuItem from '../components/MenuItem';
import Page from '../components/Page';
import BreakdownReport from './GA/BreakdownReport';
import Consumables from './GA/Consumables';
import Furniture from './GA/Furniture';
import Init from './GA/Init';
import Rol from './GA/Rol';
import Site from './GA/Site';
import Technology from './GA/Technology';
import User from './GA/User';
import Vehicle from './GA/Vehicle';
import Profile from './profile';
import Purchase from './GA/Purchase';

const ModuleGA = () => {
	return (
		<Page title={'Gestión Administrativa'}>
			<div className='ga'>
				<Menu route={'/ga'}>
					<MenuItem text={'Inicio'} to={'/ga'} />
					<MenuItem text={'Usuario'} to={'/ga/user'} />
					<MenuSubItem text={'Inventarios'}>
						<MenuItem text={'Tecnología'} to={'/ga/technology'} />
						<MenuItem text={'Consumible'} to={'/ga/consumables'} />
						<MenuItem text={'Mobiliario'} to={'/ga/furniture'} />
						<MenuItem text={'Vehículo'} to={'/ga/vehicle'} />
					</MenuSubItem>
					<MenuItem text={'Compras'} to={'/ga/purchase'} />
				</Menu>
				<Routes>
					<Route path='/' element={<Init />} />
					<Route path='/user' element={<User />} />
					<Route path='/rol' element={<Rol />} />
					<Route path='/site' element={<Site />} />
					<Route path='/technology' element={<Technology />} />
					<Route path='/consumables' element={<Consumables />} />
					<Route path='/furniture' element={<Furniture />} />
					<Route path='/vehicle' element={<Vehicle />} />
					<Route path='/report' element={<BreakdownReport />} />
					<Route path='/purchase' element={<Purchase />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</div>
		</Page>
	);
};
export default ModuleGA;
