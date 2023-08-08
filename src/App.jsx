import { Route, Routes } from 'react-router-dom';
import TokenProvider from './Context/Token.context';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './page/Home';

const App = () => {
	return (
		<TokenProvider>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route element={<ProtectedRoutes />}>{/* otras rutas */}</Route>
			</Routes>
		</TokenProvider>
	);
};
export default App;
