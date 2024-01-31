import Btn from '../components/Btn';
import CardModule from '../components/CardModule';
import Page from '../components/Page';
import Theme from '../components/Theme';
import { permissions } from '../data/dataPermissions';
import { system } from '../data/system';
import useExit from '../hooks/useExit';
import useValidate from '../hooks/useValidate';
import './style/redirect.css';

const Redirect = () => {
	const { handleClickExit } = useExit();
	const handleExit = () => handleClickExit();
	const { validate } = useValidate();
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
					{validate({ per: permissions.ocp }) && (
						<CardModule
							iconName='OCP'
							title={system.page.redirect.cardModule.OCP}
							to={`/ocp`}
						/>
					)}
					{validate({ per: permissions.ga }) && (
						<CardModule
							iconName='GA'
							title={system.page.redirect.cardModule.GA}
							to={`/ga`}
						/>
					)}
					{validate({ per: permissions.gh_aj }) && (
						<CardModule
							iconName='GH_AJ'
							title={system.page.redirect.cardModule.GHAJ}
							to={`/ghaj`}
						/>
					)}
					{validate({ per: permissions.pop_psi }) && (
						<CardModule
							iconName='POP_PSI'
							title={system.page.redirect.cardModule.POP_PSI}
							to={`/poppsi`}
						/>
					)}
					{validate({ per: permissions.tci }) && (
						<CardModule
							iconName='TCI'
							title={system.page.redirect.cardModule.TCI}
							to={`/tci`}
						/>
					)}
					{validate({ per: permissions.uri }) && (
						<CardModule
							iconName='URI'
							title={system.page.redirect.cardModule.URI}
							to={`/uri`}
						/>
					)}
					{validate({ per: permissions.power }) && (
						<CardModule
							iconName='POWER'
							title={system.page.redirect.cardModule.POWER}
							to={`/power`}
						/>
					)}
				</div>
			</div>
		</Page>
	);
};
export default Redirect;
