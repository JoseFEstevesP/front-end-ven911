/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import RegisterSite from '../../components/GA/RegisterSite';
import TableDataSite from '../../components/GA/TableDataSite';
import UpdateSite from '../../components/GA/UpdateSite';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Select from '../../components/Select';
import Table from '../../components/Table';
import { dataOrderSite } from '../../data/dataOrder';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useOrder from '../../hooks/useOrder';
import useSearch from '../../hooks/useSearch';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import './style/page.css';

const heads = [
	system.component.form.label.name,
	system.component.form.label.direction,
	system.component.form.label.action,
];
const headsOfAction = [
	system.component.form.label.name,
	system.component.form.label.direction,
];
const url =
	import.meta.env.VITE_ULR_API +
	system.routeApi.site.primary +
	system.routeApi.site.list;
const Site = () => {
	const { validatePermissions } = useValidatePermissions();
	const { handleList, data, nex, prev, dataNext, dataPrev } = useLits({ url });
	const [isOpenRegister, handleOpenRegister, handleCloseRegister] = useModal();
	const [isOpenUpdate, handleOpenUpdate, handleCloseUpdate] = useModal();
	const {
		search,
		handleChange: handleChangeSearch,
		handleSearch,
		data: dataSearch,
		nex: nexSearch,
		dataNext: dataNextSearch,
		dataPrev: dataPrevSearch,
		prev: prevSearch,
		searchSubmit,
	} = useSearch({
		url:
			import.meta.env.VITE_ULR_API +
			system.routeApi.site.primary +
			system.routeApi.site.search,
	});
	const { order, handleChange: handleChangeOrder } = useOrder({
		orderDefault: dataOrderSite[0].value,
	});
	const [newData, setNewData] = useState(null);
	useEffect(() => {
		if (validatePermissions({ per: permissions.readSite })) {
			handleList({});
		}
	}, []);
	useEffect(() => {
		if (validatePermissions({ per: permissions.readSite })) {
			handleList({ orderProperty: order });
		}
		if (searchSubmit) {
			handleSearch({ orderProperty: order });
		}
	}, [order]);
	const renderData = useCallback(() => {
		if (searchSubmit) {
			return dataSearch?.rows?.map(
				item =>
					validatePermissions({ per: permissions.readSite }) && (
						<TableDataSite
							key={item.uid}
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
					validatePermissions({ per: permissions.readSite }) && (
						<TableDataSite
							key={item.uid}
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
						handleClick={() => prevSearch({ orderProperty: order })}
						nameIcon={'arrow'}
						classIcon={!dataPrevSearch ? 'page__icon--hidden' : ''}
					/>
					<Btn
						handleClick={() => nexSearch({ orderProperty: order })}
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
						handleClick={() => prev({ orderProperty: order })}
						nameIcon={'arrow'}
						classIcon={!dataPrev ? 'page__icon--hidden' : ''}
					/>
					<Btn
						handleClick={() => nex({ orderProperty: order })}
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
		nex,
		nexSearch,
		prev,
		prevSearch,
		search,
	]);
	const handleSearchComponent = e => handleSearch({ e, orderProperty: order });
	return (
		<>
			{validatePermissions({ per: permissions.createSite }) && (
				<Modal isOpen={isOpenRegister} close={handleCloseRegister}>
					<RegisterSite
						order={order}
						handleList={handleList}
						handleClose={handleCloseRegister}
					/>
				</Modal>
			)}
			{validatePermissions({ per: permissions.updateSite }) && newData && (
				<Modal isOpen={isOpenUpdate} close={handleCloseUpdate}>
					<UpdateSite
						order={order}
						newData={newData}
						handleList={handleList}
						handleClose={handleCloseUpdate}
					/>
				</Modal>
			)}
			<div className='box page'>
				<div className='page__options'>
					{validatePermissions({ per: permissions.createSite }) && (
						<Btn
							text={'Registrar Sede'}
							nameIcon={'building'}
							className='btnStyle'
							handleClick={handleOpenRegister}
						/>
					)}
					{validatePermissions({ per: permissions.user }) && (
						<Link to='/ga/user' className='btnStyle page__link'>
							Ir a usuarios <Icons iconName={'user'} />
						</Link>
					)}
					{validatePermissions({ per: permissions.pdfSite }) && (
						<Link className='btnStyle page__link' to='/ga/pdf/site'>
							PDF <Icons iconName={'pdf'} />
						</Link>
					)}
				</div>
				{validatePermissions({ per: permissions.readSite }) && (
					<div className='page__options'>
						<Select
							className='page__input--filter'
							name={'orderProperty'}
							title={system.component.form.select.filter}
							value={order}
							onChange={handleChangeOrder}
							data={dataOrderSite}
							valueDefault={dataOrderSite[0].value}
						/>
						<Search
							value={search}
							handleChange={handleChangeSearch}
							handleSearch={handleSearchComponent}
						/>
					</div>
				)}
				{validatePermissions({ per: permissions.readSite }) && (
					<Table
						heads={
							validatePermissions({ per: permissions.deleteSite }) ||
							validatePermissions({ per: permissions.updateSite })
								? heads
								: headsOfAction
						}
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
