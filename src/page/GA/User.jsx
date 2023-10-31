/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import Btn from '../../components/Btn';
import RegisterUser from '../../components/GA/RegisterUser';
import TableDataUser from '../../components/GA/TableDataUser';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Select from '../../components/Select';
import Table from '../../components/Table';
import { ContextSite } from '../../context/Site.context';
import { system } from '../../data/system';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useOrder from '../../hooks/useOrder';
import useSearch from '../../hooks/useSearch';
import useSite from '../../hooks/useSite';
import './style/user.css';
import UpdateUser from '../../components/GA/UpdateUser';

const heads = ['Nombre', 'Apellido', 'CI', 'Correo', 'Rol', 'Acción'];
const dataOrder = [
	{ uid: crypto.randomUUID(), label: 'Nombre', value: 'name' },
	{ uid: crypto.randomUUID(), label: 'Apellido', value: 'surname' },
	{ uid: crypto.randomUUID(), label: 'Correo', value: 'email' },
	{ uid: crypto.randomUUID(), label: 'CI', value: 'ci' },
];
const url =
	import.meta.env.VITE_ULR_API +
	system.routeApi.user.primary +
	system.routeApi.user.list;
const User = () => {
	const { site } = useContext(ContextSite);
	const { handleList, data, nex, prev, dataNext, dataPrev } = useLits({ url });
	const [isOpenRegister, handleOpenRegister, handelCloseRegister] = useModal();
	const [isOpenUpdate, handleOpenUpdate, handelCloseUpdate] = useModal();
	const {
		data: dataSite,
		siteValue,
		handelFetch: handelFetchSite,
		handleChange: handleChangeSite,
	} = useSite({ site });
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
			system.routeApi.user.primary +
			system.routeApi.user.search,
	});
	const { order, handleChange: handleChangeOrder } = useOrder({
		orderDefault: dataOrder[0].value,
	});
	const [newData, setNewData] = useState(null);
	useEffect(() => {
		handleList({});
		handelFetchSite({
			url:
				import.meta.env.VITE_ULR_API +
				system.routeApi.site.primary +
				system.routeApi.site.lisOfLimit,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	useEffect(() => {
		handleList({ uidSite: siteValue, orderProperty: order });
		if (searchSubmit) {
			handleSearch({ uidSite: siteValue, orderProperty: order });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [siteValue, order]);
	const renderData = useCallback(() => {
		if (searchSubmit) {
			return dataSearch?.rows?.map(item => (
				<TableDataUser
					key={item.uid}
					data={item}
					handleList={handleList}
					setNewData={setNewData}
					handleOpenUpdate={handleOpenUpdate}
				/>
			));
		} else {
			return data?.rows?.map(item => (
				<TableDataUser
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
				<div className='user__paginate'>
					<Btn
						handleClick={prevSearch}
						nameIcon={'arrow'}
						classIcon={!dataPrevSearch ? 'user__icon--hidden' : ''}
					/>
					<Btn
						handleClick={nexSearch}
						nameIcon={'arrow'}
						classIcon={`${
							!dataNextSearch ? 'user__icon--hidden' : ''
						} user__icon--nex`}
					/>
				</div>
			);
		} else {
			return (
				<div className='user__paginate'>
					<Btn
						handleClick={prev}
						nameIcon={'arrow'}
						classIcon={!dataPrev ? 'user__icon--hidden' : ''}
					/>
					<Btn
						handleClick={nex}
						nameIcon={'arrow'}
						classIcon={`${
							!dataNext ? 'user__icon--hidden' : ''
						} user__icon--nex`}
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
	const handleSearchComponent = e =>
		handleSearch({ e, uidSite: siteValue, orderProperty: order });
	return (
		<>
			<Modal isOpen={isOpenRegister} close={handelCloseRegister}>
				<RegisterUser
					order={order}
					siteValue={siteValue}
					handleList={handleList}
					isOpen={isOpenRegister}
					handelClose={handelCloseRegister}
				/>
			</Modal>
			{newData && (
				<Modal isOpen={isOpenUpdate} close={handelCloseUpdate}>
					<UpdateUser
						order={order}
						siteValue={siteValue}
						newData={newData}
						handleList={handleList}
						isOpen={isOpenUpdate}
						handelClose={handelCloseUpdate}
					/>
				</Modal>
			)}
			<div className='box user'>
				<div className='user__contentBtn'>
					<Btn
						text={'Crear usuario'}
						nameIcon={'user_add'}
						className='btnStyle'
						handleClick={handleOpenRegister}
					/>
				</div>
				<div className='user__options'>
					<Select
						className='user__input'
						name={'uidSite'}
						title={'Seleccione la sede'}
						value={siteValue}
						onChange={handleChangeSite}
					>
						{dataSite?.map(item => (
							<option key={item.uid} value={item.uid}>
								{item.name}
							</option>
						))}
					</Select>
					<Search
						value={search}
						handleChange={handleChangeSearch}
						handleSearch={handleSearchComponent}
					/>
				</div>
				<div className='user__filter'>
					<Select
						className='user__input--filter'
						name={'orderProperty'}
						title={'Filtro'}
						value={order}
						onChange={handleChangeOrder}
					>
						{dataOrder?.map(item => (
							<option key={item.uid} value={item.value}>
								{item.label}
							</option>
						))}
					</Select>
				</div>
				<Table heads={heads}>{renderData()}</Table>
				{renderPaginate()}
			</div>
		</>
	);
};
export default User;
