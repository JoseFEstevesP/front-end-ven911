/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import Filter from '../../components/Filter';
import RegisterVehicle from '../../components/GA/RegisterVehicle';
import TableDataVehicle from '../../components/GA/TableDataVehicle';
import UpdateVehicle from '../../components/GA/UpdateVehicle';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Table from '../../components/Table';
import { ContextSite } from '../../context/SiteContext';
import { dataOrderVehicle, dataStatus } from '../../data/dataOrder';
import { permissions } from '../../data/dataPermissions';
import { headsVehicle, system } from '../../data/system';
import useGet from '../../hooks/useGet';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useSearch from '../../hooks/useSearch';
import useValidate from '../../hooks/useValidate';
import './style/page.css';

const urlVehicle =
	import.meta.env.VITE_ULR_API + system.routeApi.vehicle.primary;
const urlSite = import.meta.env.VITE_ULR_API + system.routeApi.site.primary;

const Vehicle = () => {
	const { validate } = useValidate();
	const { site: siteDefault } = useContext(ContextSite);
	const [filter, setFilter] = useState({
		status: dataStatus[0].value,
		site: siteDefault,
		order: dataOrderVehicle[0].value,
	});
	const { handleList, data, next, previous, dataNext, dataPrev } = useLits({
		url: urlVehicle + system.routeApi.vehicle.list,
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
		url: urlVehicle + system.routeApi.vehicle.search,
	});
	const [newData, setNewData] = useState(null);
	useEffect(() => {
		if (validate({ per: permissions.readVehicle })) {
			handleList({ orderProperty: filter?.order, status: filter?.status });
			handleFetch({
				url: validate({ per: permissions.site })
					? urlSite + system.routeApi.site.lisOfLimit
					: urlSite + system.routeApi.site.item + filter?.site,
			});
		}
	}, []);
	useEffect(() => {
		if (validate({ per: permissions.readVehicle })) {
			handleList({
				uidSite: filter?.site,
				orderProperty: filter?.order,
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
	}, [filter?.site, filter?.order, filter?.status]);
	const renderData = useCallback(() => {
		if (searchSubmit) {
			return dataSearch?.rows?.map(
				item =>
					validate({ per: permissions.readVehicle }) && (
						<TableDataVehicle
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
					validate({ per: permissions.readVehicle }) && (
						<TableDataVehicle
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
								uidSite: filter.site,
								orderProperty: filter.order,
								status: filter.status,
							})
						}
						nameIcon={'arrow'}
						classIcon={!dataPrevSearch ? 'page__icon--hidden' : ''}
					/>
					<Btn
						handleClick={() =>
							nexSearch({
								uidSite: filter.site,
								orderProperty: filter.order,
								status: filter.status,
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
								uidSite: filter.site,
								orderProperty: filter.order,
								status: filter.status,
							})
						}
						nameIcon={'arrow'}
						classIcon={!dataPrev ? 'page__icon--hidden' : ''}
					/>
					<Btn
						handleClick={() =>
							next({
								uidSite: filter.site,
								orderProperty: filter.order,
								status: filter.status,
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
			uidSite: filter.site,
			orderProperty: filter?.order,
			status: filter?.status,
		});
	return (
		<>
			{validate({ per: permissions.createVehicle }) && (
				<Modal isOpen={isOpenRegister} close={handleCloseRegister}>
					<RegisterVehicle
						filter={filter}
						handleList={handleList}
						handleClose={handleCloseRegister}
					/>
				</Modal>
			)}
			{validate({ per: permissions.updateVehicle }) && newData && (
				<Modal isOpen={isOpenUpdate} close={handleCloseUpdate}>
					<UpdateVehicle
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
					{validate({ per: permissions.createVehicle }) && (
						<Btn
							text={'Registrar vehículo'}
							nameIcon={'car'}
							className='btnStyle'
							handleClick={handleOpenRegister}
						/>
					)}
					{validate({ per: permissions.pdfVehicle }) && (
						<Link className='btnStyle page__link' to='/ga/pdf/vehicle'>
							PDF <Icons iconName={'pdf'} />
						</Link>
					)}
				</div>
				{validate({ per: permissions.readVehicle }) && (
					<div className='page__options'>
						<Filter
							filter={filter}
							setFilter={setFilter}
							site={dataSite}
							order={dataOrderVehicle}
							status={dataStatus}
						/>
						<Search
							value={search}
							handleChange={handleChangeSearch}
							handleSearch={handleSearchComponent}
						/>
					</div>
				)}
				{validate({ per: permissions.readVehicle }) && (
					<Table
						heads={[
							...headsVehicle,
							(validate({ per: permissions.deleteVehicle }) ||
								validate({ per: permissions.updateVehicle })) &&
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
export default Vehicle;
