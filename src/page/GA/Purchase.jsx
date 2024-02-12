/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import Filter from '../../components/Filter';
import RegisterPurchase from '../../components/GA/RegisterPurchase';
import TableDataPurchase from '../../components/GA/TableDataPurchase';
import UpdatePurchase from '../../components/GA/UpdatePurchase';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Table from '../../components/Table';
import { ContextSite } from '../../context/SiteContext';
import { dataOrderPurchase, dataStatus } from '../../data/dataOrder';
import { permissions } from '../../data/dataPermissions';
import { headsPurchase, system } from '../../data/system';
import useGet from '../../hooks/useGet';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useSearch from '../../hooks/useSearch';
import useValidate from '../../hooks/useValidate';
import './style/page.css';

const urlPurchase =
	import.meta.env.VITE_ULR_API + system.routeApi.purchase.primary;
const urlSite = import.meta.env.VITE_ULR_API + system.routeApi.site.primary;

const Purchase = () => {
	const { validate } = useValidate();
	const { site: siteDefault } = useContext(ContextSite);
	const [filter, setFilter] = useState({
		status: dataStatus[0].value,
		site: siteDefault,
		order: dataOrderPurchase[0].value,
	});
	const { handleList, data, next, previous, dataNext, dataPrev } = useLits({
		url: urlPurchase + system.routeApi.purchase.list,
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
		url: urlPurchase + system.routeApi.purchase.search,
	});
	const [newData, setNewData] = useState(null);
	useEffect(() => {
		if (validate({ per: permissions.readPurchase })) {
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
		if (validate({ per: permissions.readPurchase })) {
			handleList({
				uidSite: filter.site,
				orderProperty: filter.order,
				status: filter?.status,
			});
		}
		if (validate({ per: permissions.purchase }) && searchSubmit) {
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
					validate({ per: permissions.readPurchase }) && (
						<TableDataPurchase
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
					validate({ per: permissions.readPurchase }) && (
						<TableDataPurchase
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
			{validate({ per: permissions.createPurchase }) && (
				<Modal isOpen={isOpenRegister} close={handleCloseRegister}>
					<RegisterPurchase
						filter={filter}
						handleList={handleList}
						handleClose={handleCloseRegister}
					/>
				</Modal>
			)}
			{validate({ per: permissions.updatePurchase }) && newData && (
				<Modal isOpen={isOpenUpdate} close={handleCloseUpdate}>
					<UpdatePurchase
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
					{validate({ per: permissions.createPurchase }) && (
						<Btn
							text={'Registrar Compra'}
							nameIcon={'box'}
							className='btnStyle'
							handleClick={handleOpenRegister}
						/>
					)}
					{validate({ per: permissions.pdfPurchase }) && (
						<Link className='btnStyle page__link' to='/ga/pdf/purchase'>
							PDF <Icons iconName={'pdf'} />
						</Link>
					)}
				</div>
				{validate({ per: permissions.readPurchase }) && (
					<div className='page__options'>
						<Filter
							filter={filter}
							setFilter={setFilter}
							site={dataSite}
							order={dataOrderPurchase}
							status={dataStatus}
						/>
						<Search
							value={search}
							handleChange={handleChangeSearch}
							handleSearch={handleSearchComponent}
						/>
					</div>
				)}
				{validate({ per: permissions.readPurchase }) && (
					<Table
						heads={[
							...headsPurchase,
							(validate({ per: permissions.deletePurchase }) ||
								validate({ per: permissions.updatePurchase })) &&
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
export default Purchase;
