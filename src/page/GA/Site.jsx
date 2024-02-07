/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import Filter from '../../components/Filter';
import RegisterSite from '../../components/GA/RegisterSite';
import TableDataSite from '../../components/GA/TableDataSite';
import UpdateSite from '../../components/GA/UpdateSite';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Table from '../../components/Table';
import { dataOrderSite, dataStatus } from '../../data/dataOrder';
import { permissions } from '../../data/dataPermissions';
import { headsSite, system } from '../../data/system';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useSearch from '../../hooks/useSearch';
import useValidate from '../../hooks/useValidate';
import './style/page.css';

const urlSite = import.meta.env.VITE_ULR_API + system.routeApi.site.primary;
const Site = () => {
	const { validate } = useValidate();
	const [filter, setFilter] = useState({
		status: dataStatus[0].value,
		order: dataOrderSite[0].value,
	});
	const { handleList, data, next, previous, dataNext, dataPrev } = useLits({
		url: urlSite + system.routeApi.site.list,
	});
	const [isOpenRegister, handleOpenRegister, handleCloseRegister] = useModal();
	const [isOpenUpdate, handleOpenUpdate, handleCloseUpdate] = useModal();
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
		url: urlSite + system.routeApi.site.search,
	});

	const [newData, setNewData] = useState(null);
	useEffect(() => {
		if (validate({ per: permissions.readSite })) {
			handleList({ orderProperty: filter?.order, status: filter?.status });
		}
	}, []);
	useEffect(() => {
		if (validate({ per: permissions.readSite })) {
			handleList({ orderProperty: filter?.order, status: filter?.status });
		}
		if (searchSubmit) {
			handleSearch({ orderProperty: filter?.order, status: filter?.status });
		}
	}, [filter?.order, filter?.status]);
	const renderData = useCallback(() => {
		if (searchSubmit) {
			return dataSearch?.rows?.map(
				item =>
					validate({ per: permissions.readSite }) && (
						<TableDataSite
							key={item.uid}
							data={item}
							handleList={handleList}
							setNewData={setNewData}
							handleOpenUpdate={handleOpenUpdate}
							filter={filter}
						/>
					),
			);
		} else {
			return data?.rows?.map(
				item =>
					validate({ per: permissions.readSite }) && (
						<TableDataSite
							key={item.uid}
							data={item}
							handleList={handleList}
							setNewData={setNewData}
							handleOpenUpdate={handleOpenUpdate}
							filter={filter}
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
							previous({ orderProperty: filter?.order, status: filter?.status })
						}
						nameIcon={'arrow'}
						classIcon={!dataPrev ? 'page__icon--hidden' : ''}
					/>
					<Btn
						handleClick={() =>
							next({ orderProperty: filter?.order, status: filter?.status })
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
		handleSearch({ e, orderProperty: filter?.order, status: filter?.status });
	return (
		<>
			{validate({ per: permissions.createSite }) && (
				<Modal isOpen={isOpenRegister} close={handleCloseRegister}>
					<RegisterSite
						filter={filter}
						handleList={handleList}
						handleClose={handleCloseRegister}
					/>
				</Modal>
			)}
			{validate({ per: permissions.updateSite }) && newData && (
				<Modal isOpen={isOpenUpdate} close={handleCloseUpdate}>
					<UpdateSite
						filter={filter}
						newData={newData}
						handleList={handleList}
						handleClose={handleCloseUpdate}
					/>
				</Modal>
			)}
			<div className='box page'>
				<div className='page__options'>
					{validate({ per: permissions.createSite }) && (
						<Btn
							text={'Registrar Sede'}
							nameIcon={'building'}
							className='btnStyle'
							handleClick={handleOpenRegister}
						/>
					)}
					{validate({ per: permissions.user }) && (
						<Link to='/ga/user' className='btnStyle page__link'>
							Ir a usuarios <Icons iconName={'user'} />
						</Link>
					)}
					{validate({ per: permissions.pdfSite }) && (
						<Link className='btnStyle page__link' to='/ga/pdf/site'>
							PDF <Icons iconName={'pdf'} />
						</Link>
					)}
				</div>
				{validate({ per: permissions.readSite }) && (
					<div className='page__options'>
						<Filter
							filter={filter}
							setFilter={setFilter}
							order={dataOrderSite}
							status={dataStatus}
						/>
						<Search
							value={search}
							handleChange={handleChangeSearch}
							handleSearch={handleSearchComponent}
						/>
					</div>
				)}
				{validate({ per: permissions.readSite }) && (
					<Table
						heads={[
							...headsSite,
							(validate({ per: permissions.deleteSite }) ||
								validate({ per: permissions.updateSite })) &&
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
export default Site;
