import { useContext } from 'react';
import Btn from '../components/Btn';
import CardModule from '../components/CardModule';
import Page from '../components/Page';
import Theme from '../components/Theme';
import { ContextRol } from '../context/Rol.context';
import { system } from '../data/system';
import useExit from '../hooks/useExit';
import './style/redirect.css';

const Redirect = () => {
	const { handelClickExit } = useExit();
	const handleExit = () => handelClickExit();
	const { rol } = useContext(ContextRol);
	const validatePermissions = ({ per }) =>
		rol
			.split(',')
			.some(item => item === per || item === system.permissions.super);

	return (
		<Page title='Redirección'>
			<div className='redirect'>
				<h2 className='redirect__title'>{system.titleLarge}</h2>
				<div className='redirect__options'>
					<Theme />
					<Btn
						nameIcon='exit'
						className='box redirect__btnExit'
						handleClick={handleExit}
					/>
				</div>

				<div className='redirect__modules'>
					{validatePermissions({ per: system.permissions.ocp }) && (
						<CardModule
							iconName='OCP'
							title={system.page.redirect.cardModule.OCP}
							to={`/ocp`}
						/>
					)}
					{validatePermissions({ per: system.permissions.ga }) && (
						<CardModule
							iconName='GA'
							title={system.page.redirect.cardModule.GA}
							to={`/ga`}
						/>
					)}
					{validatePermissions({ per: system.permissions.gh_aj }) && (
						<CardModule
							iconName='GH_AJ'
							title={system.page.redirect.cardModule.GHAJ}
							to={`/ghaj`}
						/>
					)}
					{validatePermissions({ per: system.permissions.pop_psi }) && (
						<CardModule
							iconName='POP_PSI'
							title={system.page.redirect.cardModule.POP_PSI}
							to={`/poppsi`}
						/>
					)}
					{validatePermissions({ per: system.permissions.tci }) && (
						<CardModule
							iconName='TCI'
							title={system.page.redirect.cardModule.TCI}
							to={`/tci`}
						/>
					)}
					{validatePermissions({ per: system.permissions.uri_p }) && (
						<CardModule
							iconName='URI_P'
							title={system.page.redirect.cardModule.URI_P}
							to={`/urip`}
						/>
					)}
				</div>
			</div>
		</Page>
	);
};
export default Redirect;
