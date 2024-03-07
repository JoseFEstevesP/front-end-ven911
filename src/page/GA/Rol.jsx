import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import Filter from '../../components/Filter';
import RegisterRol from '../../components/GA/RegisterRol';
import TableDataRol from '../../components/GA/TableDataRol';
import UpdateRol from '../../components/GA/UpdateRol';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Table from '../../components/Table';
import { dataOrderRol, dataStatus } from '../../data/dataOrder';
import { permissions } from '../../data/dataPermissions';
import { headsRol, system } from '../../data/system';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useSearch from '../../hooks/useSearch';
import useValidate from '../../hooks/useValidate';

const urlRol = import.meta.env.VITE_ULR_API + system.routeApi.rol.primary;

const Rol = () => {
	const { validate } = useValidate();
	const [filter, setFilter] = useState({
		status: dataStatus[0].value,
		order: dataOrderRol[0].value,
	});
	const { handleList, data, next, previous, dataNext, dataPrev } = useLits({
		url: urlRol + system.routeApi.rol.list,
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
		url: urlRol + system.routeApi.rol.search,
	});
	const [newData, setNewData] = useState(null);
	useEffect(() => {
		if (validate({ per: permissions.readRol })) {
			handleList({ orderProperty: filter?.order, status: filter?.status });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		if (validate({ per: permissions.readRol })) {
			handleList({ orderProperty: filter?.order, status: filter?.status });
		}
		if (validate({ per: permissions.rol }) && searchSubmit) {
			handleSearch({ orderProperty: filter?.order, status: filter?.status });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filter?.order, filter?.status, searchSubmit]);
	const renderData = useCallback(() => {
		if (searchSubmit) {
			return (
				validate({ per: permissions.readRol }) &&
				dataSearch?.rows?.map(item => (
					<TableDataRol
						key={crypto.randomUUID()}
						data={item}
						handleList={handleList}
						setNewData={setNewData}
						handleOpenUpdate={handleOpenUpdate}
						filter={filter}
					/>
				))
			);
		} else {
			return (
				validate({ per: permissions.readRol }) &&
				data?.rows?.map(item => (
					<TableDataRol
						key={crypto.randomUUID()}
						data={item}
						handleList={handleList}
						setNewData={setNewData}
						handleOpenUpdate={handleOpenUpdate}
						filter={filter}
					/>
				))
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data?.rows, dataSearch?.rows, filter, searchSubmit]);
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
		search,
		dataPrevSearch,
		dataNextSearch,
		prevSearch,
		filter?.order,
		filter?.status,
		nexSearch,
		dataPrev,
		dataNext,
		previous,
		next,
	]);
	const handleSearchComponent = e =>
		handleSearch({ e, orderProperty: filter?.order, status: filter?.status });
	return (
		<>
			{validate({ per: permissions.createRol }) && (
				<Modal isOpen={isOpenRegister} close={handleCloseRegister}>
					<RegisterRol
						filter={filter}
						handleList={handleList}
						handleClose={handleCloseRegister}
					/>
				</Modal>
			)}
			{validate({ per: permissions.updateRol }) && newData && (
				<Modal isOpen={isOpenUpdate} close={handleCloseUpdate}>
					<UpdateRol
						filter={filter}
						newData={newData}
						handleList={handleList}
						handleClose={handleCloseUpdate}
					/>
				</Modal>
			)}
			<div className='box page'>
				<div className='page__options'>
					{validate({ per: permissions.createRol }) && (
						<Btn
							text={'Crear Rol'}
							nameIcon={'rol'}
							className='btnStyle'
							handleClick={handleOpenRegister}
						/>
					)}
					{validate({ per: permissions.user }) && (
						<Link to='/ga/user' className='btnStyle page__link'>
							Ir a usuario <Icons iconName={'user'} />
						</Link>
					)}
					{validate({ per: permissions.pdfRol }) && (
						<Link className='btnStyle page__link' to='/ga/pdf/rol'>
							PDF <Icons iconName={'pdf'} />
						</Link>
					)}
				</div>
				{validate({ per: permissions.readRol }) && (
					<div className='page__options'>
						<Filter
							filter={filter}
							setFilter={setFilter}
							order={dataOrderRol}
							status={dataStatus}
						/>
						<Search
							value={search}
							handleChange={handleChangeSearch}
							handleSearch={handleSearchComponent}
						/>
					</div>
				)}
				{validate({ per: permissions.readRol }) && (
					<Table
						heads={[
							...headsRol,
							(validate({ per: permissions.deleteRol }) ||
								validate({ per: permissions.updateRol })) &&
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
export default Rol;
