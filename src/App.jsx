import { Route, Routes } from 'react-router-dom';
import RolProvider from './Context/Rol.context';
import TokenProvider from './Context/Token.context';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './page/Home';

const App = () => {
	return (
		<TokenProvider>
			<RolProvider>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route element={<ProtectedRoutes />}>{/* otras rutas */}</Route>
				</Routes>
			</RolProvider>
		</TokenProvider>
	);
};
export default App;
