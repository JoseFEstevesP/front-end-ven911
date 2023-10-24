import Login from '../components/Login';
import Page from '../components/Page';
import { system } from '../data/system';
import './style/home.css';
const Home = () => {
	return (
		<Page title='Inicio'>
			<div className='home'>
				<Login
					title={system.component.menu.title}
					to={'/redirect'}
					url={
						import.meta.env.VITE_ULR_API +
						system.routeApi.user.primary +
						system.routeApi.user.login
					}
				/>
			</div>
		</Page>
	);
};
export default Home;
