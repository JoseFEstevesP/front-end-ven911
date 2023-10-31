import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Page from '../components/Page';
import Init from './GA/Init';
import User from './GA/User';
import Profile from './profile';

const ModuleGA = () => {
	return (
		<Page title={'Gestión Administrativa'}>
			<div className='ga'>
				<Menu route={'/ga'}>
					<MenuItem text={'Inicio'} to={'/ga'} />
					<MenuItem text={'Usuario'} to={'/ga/user'} />
				</Menu>
				<Routes>
					<Route path='/' element={<Init />} />
					<Route path='/user' element={<User />} />
					<Route path='/profile' element={<Profile />} />
				</Routes>
			</div>
		</Page>
	);
};
export default ModuleGA;
