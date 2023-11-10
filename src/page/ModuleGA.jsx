import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import MenuSubItem from '../components/MenuISubItem';
import MenuItem from '../components/MenuItem';
import Page from '../components/Page';
import Init from './GA/Init';
import Rol from './GA/Rol';
import Site from './GA/Site';
import Technology from './GA/Technology';
import User from './GA/User';
import Profile from './profile';
import Consumables from './GA/Consumables';

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
					</MenuSubItem>
				</Menu>
				<Routes>
					<Route path='/' element={<Init />} />
					<Route path='/user' element={<User />} />
					<Route path='/rol' element={<Rol />} />
					<Route path='/site' element={<Site />} />
					<Route path='/technology' element={<Technology />} />
					<Route path='/consumables' element={<Consumables />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</div>
		</Page>
	);
};
export default ModuleGA;
