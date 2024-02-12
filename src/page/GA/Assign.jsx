/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import Filter from '../../components/Filter';
import RegisterAssign from '../../components/GA/RegisterAssign';
import TableDataAssign from '../../components/GA/TableDataAssign';
import UpdateAssign from '../../components/GA/UpdateAssign';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Table from '../../components/Table';
import { ContextSite } from '../../context/SiteContext';
import { dataOrderAssign, dataStatus } from '../../data/dataOrder';
import { permissions } from '../../data/dataPermissions';
import { headsAssign, system } from '../../data/system';
import useGet from '../../hooks/useGet';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useSearch from '../../hooks/useSearch';
import useValidate from '../../hooks/useValidate';
import './style/page.css';

const urlAssign = import.meta.env.VITE_ULR_API + system.routeApi.assign.primary;
const urlSite = import.meta.env.VITE_ULR_API + system.routeApi.site.primary;

const Assign = () => {
	const { validate } = useValidate();
	const { site: siteDefault } = useContext(ContextSite);
	const [filter, setFilter] = useState({
		status: dataStatus[0].value,
		site: siteDefault,
		order: dataOrderAssign[0].value,
	});
	const { handleList, data, next, previous, dataNext, dataPrev } = useLits({
		url: urlAssign + system.routeApi.assign.list,
	});
	const [isOpenRegister, handleOpenRegister, handleCloseRegister] = useModal();
	const [isOpenUpdate, handleOpenUpdate, handleCloseUpdate] = useModal();
	const { handleFetch, data: dataSite } = useGet();

	const {
		search,
		handleChange: handleChangeSearch,
		handleSearch,
		data: dataSearch,
		next: nexSearch,
		dataNext: dataNextSearch,
		dataPrev: dataPrevSearch,
		previous: prevSearch,
		searchSubmit,
	} = useSearch({
		url: urlAssign + system.routeApi.assign.search,
	});

	const [newData, setNewData] = useState(null);
	useEffect(() => {
		if (validate({ per: permissions.readAssign })) {
			handleList({
				uidSite: filter?.site,
				orderProperty: filter?.order,
				status: filter?.status,
			});
			handleFetch({
				url: validate({ per: permissions.siteAssignation })
					? urlSite + system.routeApi.site.lisOfLimit
					: urlSite + system.routeApi.site.item + filter?.site,
			});
		}
	}, []);
	useEffect(() => {
		if (validate({ per: permissions.readAssign })) {
			handleList({
				uidSite: filter.site,
				orderProperty: filter.order,
				status: filter?.status,
			});
		}
		if (searchSubmit) {
			handleSearch({
				uidSite: filter?.site,
				orderProperty: filter?.order,
				status: filter?.status,
			});
		}
	}, [filter?.order, filter?.site, filter?.status, searchSubmit]);
	const renderData = useCallback(() => {
		if (searchSubmit) {
			return dataSearch?.rows?.map(
				item =>
					validate({ per: permissions.readAssign }) && (
						<TableDataAssign
							key={item.uid}
							filter={filter}
							data={item}
							handleList={handleList}
							setNewData={setNewData}
							handleOpenUpdate={handleOpenUpdate}
						/>
					),
			);
		} else {
			return data?.rows?.map(
				item =>
					validate({ per: permissions.readAssign }) && (
						<TableDataAssign
							key={item.uid}
							filter={filter}
							data={item}
							handleList={handleList}
							setNewData={setNewData}
							handleOpenUpdate={handleOpenUpdate}
						/>
					),
			);
		}
	}, [data?.rows, dataSearch?.rows, searchSubmit]);
	const renderPaginate = useCallback(() => {
		if (search) {
			return (
				<div className='page__paginate'>
					<Btn
						handleClick={() =>
							prevSearch({
								uidSite: filter?.site,
								orderProperty: filter?.order,
								status: filter?.status,
							})
						}
						nameIcon={'arrow'}
						classIcon={!dataPrevSearch ? 'page__icon--hidden' : ''}
					/>
					<Btn
						handleClick={() =>
							nexSearch({
								uidSite: filter?.site,
								orderProperty: filter?.order,
								status: filter?.status,
							})
						}
						nameIcon={'arrow'}
						classIcon={`${
							!dataNextSearch ? 'page__icon--hidden' : ''
						} page__icon--nex`}
					/>
				</div>
			);
		} else {
			return (
				<div className='page__paginate'>
					<Btn
						handleClick={() =>
							previous({
								uidSite: filter?.site,
								orderProperty: filter?.order,
								status: filter?.status,
							})
						}
						nameIcon={'arrow'}
						classIcon={!dataPrev ? 'page__icon--hidden' : ''}
					/>
					<Btn
						handleClick={() =>
							next({
								uidSite: filter?.site,
								orderProperty: filter?.order,
								status: filter?.status,
							})
						}
						nameIcon={'arrow'}
						classIcon={`${
							!dataNext ? 'page__icon--hidden' : ''
						} page__icon--nex`}
					/>
				</div>
			);
		}
	}, [
		dataNext,
		dataNextSearch,
		dataPrev,
		dataPrevSearch,
		next,
		nexSearch,
		previous,
		prevSearch,
		search,
	]);
	const handleSearchComponent = e =>
		handleSearch({
			e,
			uidSite: filter?.site,
			orderProperty: filter?.order,
			status: filter?.status,
		});
	return (
		<>
			{validate({ per: permissions.createAssign }) && (
				<Modal isOpen={isOpenRegister} close={handleCloseRegister}>
					<RegisterAssign
						filter={filter}
						handleList={handleList}
						handleClose={handleCloseRegister}
					/>
				</Modal>
			)}
			{validate({ per: permissions.updateAssign }) && newData && (
				<Modal isOpen={isOpenUpdate} close={handleCloseUpdate}>
					<UpdateAssign
						filter={filter}
						newData={newData}
						handleList={handleList}
						isOpen={isOpenUpdate}
						handleClose={handleCloseUpdate}
					/>
				</Modal>
			)}
			<div className='box page'>
				<div className='page__options'>
					{validate({ per: permissions.createAssign }) && (
						<Btn
							text={'Asignar'}
							nameIcon={'assignment'}
							className='btnStyle'
							handleClick={handleOpenRegister}
						/>
					)}
					{validate({ per: permissions.pdfAssign }) && (
						<Link className='btnStyle page__link' to='/ga/pdf/assign'>
							PDF <Icons iconName={'pdf'} />
						</Link>
					)}
				</div>
				{validate({ per: permissions.readAssign }) && (
					<div className='page__options'>
						<Filter
							filter={filter}
							setFilter={setFilter}
							site={dataSite}
							order={dataOrderAssign}
							status={dataStatus}
						/>
						<Search
							value={search}
							handleChange={handleChangeSearch}
							handleSearch={handleSearchComponent}
						/>
					</div>
				)}
				{validate({ per: permissions.readAssign }) && (
					<Table
						heads={[
							...headsAssign,
							(validate({ per: permissions.deleteUser }) ||
								validate({ per: permissions.updateUser })) &&
								system.component.form.label.action,
						].filter(Boolean)}
					>
						{renderData()}
					</Table>
				)}
				{renderPaginate()}
			</div>
		</>
	);
};
export default Assign;
