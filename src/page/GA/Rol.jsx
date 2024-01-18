/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import RegisterRol from '../../components/GA/RegisterRol';
import TableDataRol from '../../components/GA/TableDataRol';
import UpdateRol from '../../components/GA/UpdateRol';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Select from '../../components/Select';
import Table from '../../components/Table';
import { dataOrderRol } from '../../data/dataOrder';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useOrder from '../../hooks/useOrder';
import useSearch from '../../hooks/useSearch';
import useValidatePermissions from '../../hooks/useValidatePermissions';

const heads = [
	system.component.form.label.name,
	system.component.form.label.permissions,
	system.component.form.label.action,
];
const headsOfAction = [
	system.component.form.label.name,
	system.component.form.label.permissions,
];
const url =
	import.meta.env.VITE_ULR_API +
	system.routeApi.rol.primary +
	system.routeApi.rol.list;
const Rol = () => {
	const { validatePermissions } = useValidatePermissions();
	const { handleList, data, nex, prev, dataNext, dataPrev } = useLits({ url });
	const [isOpenRegister, handleOpenRegister, handelCloseRegister] = useModal();
	const [isOpenUpdate, handleOpenUpdate, handelCloseUpdate] = useModal();
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
			system.routeApi.rol.primary +
			system.routeApi.rol.search,
	});
	const { order, handleChange: handleChangeOrder } = useOrder({
		orderDefault: dataOrderRol[0].value,
	});
	const [newData, setNewData] = useState(null);
	useEffect(() => {
		if (validatePermissions({ per: permissions.readRol })) {
			handleList({});
		}
	}, []);
	useEffect(() => {
		if (validatePermissions({ per: permissions.readRol })) {
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
					validatePermissions({ per: permissions.readRol }) && (
						<TableDataRol
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
					validatePermissions({ per: permissions.readRol }) && (
						<TableDataRol
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
			{validatePermissions({ per: permissions.createRol }) && (
				<Modal isOpen={isOpenRegister} close={handelCloseRegister}>
					<RegisterRol
						order={order}
						handleList={handleList}
						handelClose={handelCloseRegister}
					/>
				</Modal>
			)}
			{validatePermissions({ per: permissions.updateRol }) && newData && (
				<Modal isOpen={isOpenUpdate} close={handelCloseUpdate}>
					<UpdateRol
						order={order}
						newData={newData}
						handleList={handleList}
						handelClose={handelCloseUpdate}
					/>
				</Modal>
			)}
			<div className='box page'>
				<div className='page__options'>
					{validatePermissions({ per: permissions.createRol }) && (
						<Btn
							text={'Crear Rol'}
							nameIcon={'user_add'}
							className='btnStyle'
							handleClick={handleOpenRegister}
						/>
					)}
					{validatePermissions({ per: permissions.user }) && (
						<Link to='/ga/user' className='btnStyle page__link'>
							Ir a usuario <Icons iconName={'user'} />
						</Link>
					)}
					{validatePermissions({ per: permissions.pdfRol }) && (
						<Link className='btnStyle page__link' to='/ga/pdf/rol'>
							PDF <Icons iconName={'pdf'} />
						</Link>
					)}
				</div>
				{validatePermissions({ per: permissions.readRol }) && (
					<div className='page__options'>
						<Select
							className='page__input--filter'
							name={'orderProperty'}
							title={system.component.form.select.filter}
							value={order}
							onChange={handleChangeOrder}
							data={dataOrderRol}
							valueDefault={dataOrderRol[0].value}
						/>
						<Search
							value={search}
							handleChange={handleChangeSearch}
							handleSearch={handleSearchComponent}
						/>
					</div>
				)}
				{validatePermissions({ per: permissions.readRol }) && (
					<Table
						heads={
							validatePermissions({ per: permissions.deleteRol }) ||
							validatePermissions({ per: permissions.updateRol })
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
export default Rol;
