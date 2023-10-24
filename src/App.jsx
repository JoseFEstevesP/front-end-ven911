import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Head from './components/Head';
import Msg from './components/Msg';
import ProtectedRoutes from './components/ProtectedRoutes';
import RolProvider from './context/Rol.context';
import TokenProvider from './context/Token.context';
import MsgProvider from './context/msg.context';
import Error404 from './page/Error404';
import Home from './page/Home';
import Redirect from './page/Redirect';
import Profile from './page/profile';

const App = () => {
	return (
		<TokenProvider>
			<RolProvider>
				<MsgProvider>
					<Msg />
					<Head />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route element={<ProtectedRoutes />}>
							<Route path='/p' element={<Redirect />} />
							<Route path='/profile' element={<Profile />} />
						</Route>
						<Route path='/*' element={<Error404 />} />
					</Routes>
					<Footer />
				</MsgProvider>
			</RolProvider>
		</TokenProvider>
	);
};
export default App;
