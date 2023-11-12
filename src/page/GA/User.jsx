/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import RegisterUser from '../../components/GA/RegisterUser';
import TableDataUser from '../../components/GA/TableDataUser';
import UpdateUser from '../../components/GA/UpdateUser';
import Icons from '../../components/Icons';
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
import useValidatePermissions from '../../hooks/useValidatePermissions';
import './style/page.css';
const heads = [
	system.component.form.label.name,
	system.component.form.label.surname,
	system.component.form.label.ci,
	system.component.form.label.email,
	system.component.form.label.rol,
	system.component.form.label.action,
];
const headsOfAction = [
	system.component.form.label.name,
	system.component.form.label.surname,
	system.component.form.label.ci,
	system.component.form.label.email,
	system.component.form.label.rol,
];
const dataOrder = [
	{
		uid: crypto.randomUUID(),
		label: system.component.form.label.name,
		value: 'name',
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.form.label.surname,
		value: 'surname',
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.form.label.email,
		value: 'email',
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.form.label.ci,
		value: 'ci',
	},
];
const url =
	import.meta.env.VITE_ULR_API +
	system.routeApi.user.primary +
	system.routeApi.user.list;
const User = () => {
	const { validatePermissions } = useValidatePermissions();
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
		if (validatePermissions({ per: system.permissions.read })) {
			handleList({});
			handelFetchSite({
				url:
					import.meta.env.VITE_ULR_API +
					system.routeApi.site.primary +
					system.routeApi.site.lisOfLimit,
			});
		}
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
	const handleSearchComponent = e =>
		handleSearch({ e, uidSite: siteValue, orderProperty: order });
	return (
		<>
			{validatePermissions({ per: system.permissions.create }) && (
				<Modal isOpen={isOpenRegister} close={handelCloseRegister}>
					<RegisterUser
						order={order}
						siteValue={siteValue}
						handleList={handleList}
						isOpen={isOpenRegister}
						handelClose={handelCloseRegister}
					/>
				</Modal>
			)}
			{validatePermissions({ per: system.permissions.update }) && newData && (
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
			<div className='box page'>
				<div className='page__options'>
					{validatePermissions({ per: system.permissions.create }) && (
						<Btn
							text={'Crear usuario'}
							nameIcon={'user_add'}
							className='btnStyle'
							handleClick={handleOpenRegister}
						/>
					)}
					<Link to='/ga/rol' className='btnStyle page__link'>
						Ir a Rol <Icons iconName={'rol'} />
					</Link>
					<Link to='/ga/site' className='btnStyle page__link'>
						Ir a Sede <Icons iconName={'building'} />
					</Link>
				</div>
				{validatePermissions({ per: system.permissions.read }) && (
					<div className='page__options'>
						<Select
							className='page__input'
							name={'uidSite'}
							title={system.component.form.select.site}
							value={siteValue}
							onChange={handleChangeSite}
							data={dataSite?.map(item => ({
								value: item.uid,
								label: item.name,
							}))}
							valueDefault={site}
						/>
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
				)}
				{validatePermissions({ per: system.permissions.read }) && (
					<Table
						heads={
							validatePermissions({ per: system.permissions.delete }) ||
							validatePermissions({ per: system.permissions.update })
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
export default User;
