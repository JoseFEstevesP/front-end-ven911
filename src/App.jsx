import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Head from './components/Head';
import Msg from './components/Msg';
import ProtectedRoutes from './components/ProtectedRoutes';
import SiteProvider from './context/Site.context';
import TokenProvider from './context/Token.context';
import RolProvider from './context/Rol.context';
import MsgProvider from './context/msg.context';
import Error404 from './page/Error404';
import Home from './page/Home';
import ModuleGA from './page/ModuleGA';
import Redirect from './page/Redirect';

const App = () => {
	return (
		<TokenProvider>
			<RolProvider>
				<SiteProvider>
					<MsgProvider>
						<Msg />
						<Head />
						<Routes>
							<Route path='/' element={<Home />} />
							<Route element={<ProtectedRoutes />}>
								<Route path='/redirect' element={<Redirect />} />
								<Route path='/ga/*' element={<ModuleGA />} />
								{/* coopiar la ruta del perfil y pegarga en la pagina de redirección de los modulos de cada ruta */}
								{/* <Route path='/profile' element={<Profile />} /> */}
							</Route>
							<Route path='/*' element={<Error404 />} />
						</Routes>
						<Footer />
					</MsgProvider>
				</SiteProvider>
			</RolProvider>
		</TokenProvider>
	);
};
export default App;
