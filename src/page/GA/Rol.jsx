/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import RegisterRol from '../../components/GA/RegisterRol';
import TableDataRol from '../../components/GA/TableDataRol';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Select from '../../components/Select';
import Table from '../../components/Table';
import { system } from '../../data/system';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useOrder from '../../hooks/useOrder';
import useSearch from '../../hooks/useSearch';
import UpdateRol from '../../components/GA/UpdateRol';

const heads = ['Nombre', 'Permisos', 'Acción'];
const dataOrder = [
	{ uid: crypto.randomUUID(), label: 'Nombre', value: 'name' },
	{ uid: crypto.randomUUID(), label: 'Permisos', value: 'permissions' },
];
const url =
	import.meta.env.VITE_ULR_API +
	system.routeApi.rol.primary +
	system.routeApi.rol.list;
const Rol = () => {
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
		orderDefault: dataOrder[0].value,
	});
	const [newData, setNewData] = useState(null);
	useEffect(() => {
		handleList({});
	}, []);
	useEffect(() => {
		handleList({ orderProperty: order });
		if (searchSubmit) {
			handleSearch({ orderProperty: order });
		}
	}, [order]);
	const renderData = useCallback(() => {
		if (searchSubmit) {
			return dataSearch?.rows?.map(item => (
				<TableDataRol
					key={item.uid}
					data={item}
					handleList={handleList}
					setNewData={setNewData}
					handleOpenUpdate={handleOpenUpdate}
				/>
			));
		} else {
			return data?.rows?.map(item => (
				<TableDataRol
					key={item.uid}
					data={item}
					handleList={handleList}
					setNewData={setNewData}
					handleOpenUpdate={handleOpenUpdate}
				/>
			));
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
			<Modal isOpen={isOpenRegister} close={handelCloseRegister}>
				<RegisterRol
					order={order}
					handleList={handleList}
					handelClose={handelCloseRegister}
				/>
			</Modal>
			{newData && (
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
					<Btn
						text={'Crear Rol'}
						nameIcon={'user_add'}
						className='btnStyle'
						handleClick={handleOpenRegister}
					/>
					<Link to='/ga/user' className='btnStyle page__link'>
						Ir a usuario <Icons iconName={'user'} />
					</Link>
				</div>
				<div className='page__options'>
					<Select
						className='page__input--filter'
						name={'orderProperty'}
						title={system.component.form.select.filter}
						value={order}
						onChange={handleChangeOrder}
						data={dataOrder}
						valueDefault={dataOrder[0].value}
					/>
					<Search
						value={search}
						handleChange={handleChangeSearch}
						handleSearch={handleSearchComponent}
					/>
				</div>
				<Table heads={heads}>{renderData()}</Table>
				{renderPaginate()}
			</div>
		</>
	);
};
export default Rol;
