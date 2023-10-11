import { Route, Routes } from 'react-router-dom';
import RolProvider from './Context/Rol.context';
import TokenProvider from './Context/Token.context';
import MsgProvider from './Context/msg.context';
import Msg from './components/Msg';
import ProtectedRoutes from './components/ProtectedRoutes';
import Home from './page/Home';
import Redirect from './page/Redirect';

const App = () => {
	return (
		<TokenProvider>
			<RolProvider>
				<MsgProvider>
					<Msg />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route element={<ProtectedRoutes />}>
							<Route path='/p' element={<Redirect />} />
						</Route>
					</Routes>
				</MsgProvider>
			</RolProvider>
		</TokenProvider>
	);
};
export default App;
