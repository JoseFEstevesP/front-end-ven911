/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import RegisterVehicle from '../../components/GA/RegisterVehicle';
import TableDataVehicle from '../../components/GA/TableDataVehicle';
import UpdateVehicle from '../../components/GA/UpdateVehicle';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Select from '../../components/Select';
import Table from '../../components/Table';
import { ContextSite } from '../../context/SiteContext';
import { system } from '../../data/system';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useOrder from '../../hooks/useOrder';
import useSearch from '../../hooks/useSearch';
import useSite from '../../hooks/useSite';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import './style/page.css';
import { dataOrderVehicle } from '../../data/dataOrder';

const heads = [
	system.component.form.label.description,
	system.component.form.label.brand,
	system.component.form.label.model,
	system.component.form.label.place,
	system.component.form.label.quantity,
	system.component.form.label.assign,
	system.component.form.label.value,
	system.component.form.label.condition,
	system.component.form.label.location,
	system.component.form.label.dateOfAcquisition,
	system.component.form.label.warranty,
	system.component.form.label.remarks,
	system.component.form.label.codeBN,
	system.component.form.label.action,
];
const headsOfAction = [
	system.component.form.label.description,
	system.component.form.label.brand,
	system.component.form.label.model,
	system.component.form.label.place,
	system.component.form.label.quantity,
	system.component.form.label.assign,
	system.component.form.label.value,
	system.component.form.label.condition,
	system.component.form.label.location,
	system.component.form.label.dateOfAcquisition,
	system.component.form.label.warranty,
	system.component.form.label.remarks,
	system.component.form.label.codeBN,
];
const url =
	import.meta.env.VITE_ULR_API +
	system.routeApi.vehicle.primary +
	system.routeApi.vehicle.list;
const Vehicle = () => {
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
			system.routeApi.vehicle.primary +
			system.routeApi.vehicle.search,
	});
	const { order, handleChange: handleChangeOrder } = useOrder({
		orderDefault: dataOrderVehicle[0].value,
	});
	const [newData, setNewData] = useState(null);
	useEffect(() => {
		if (
			validatePermissions({ per: system.permissions.read }) &&
			validatePermissions({ per: system.permissions.ga })
		) {
			handleList({ orderProperty: order });
			handelFetchSite({
				url: validatePermissions({ per: system.permissions.site })
					? import.meta.env.VITE_ULR_API +
					  system.routeApi.site.primary +
					  system.routeApi.site.lisOfLimit
					: import.meta.env.VITE_ULR_API +
					  system.routeApi.site.primary +
					  system.routeApi.site.item +
					  site,
			});
		}
	}, []);
	useEffect(() => {
		handleList({ uidSite: siteValue, orderProperty: order });
		if (searchSubmit) {
			handleSearch({ uidSite: siteValue, orderProperty: order });
		}
	}, [siteValue, order]);
	const renderData = useCallback(() => {
		if (searchSubmit) {
			return dataSearch?.rows?.map(item => (
				<TableDataVehicle
					key={item.uid}
					order={order}
					data={item}
					handleList={handleList}
					setNewData={setNewData}
					handleOpenUpdate={handleOpenUpdate}
				/>
			));
		} else {
			return data?.rows?.map(item => (
				<TableDataVehicle
					key={item.uid}
					order={order}
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
			{validatePermissions({ per: system.permissions.create }) &&
				validatePermissions({ per: system.permissions.ga }) && (
					<Modal isOpen={isOpenRegister} close={handelCloseRegister}>
						<RegisterVehicle
							order={order}
							siteValue={siteValue}
							handleList={handleList}
							handelClose={handelCloseRegister}
						/>
					</Modal>
				)}
			{validatePermissions({ per: system.permissions.update }) &&
				validatePermissions({ per: system.permissions.ga }) &&
				newData && (
					<Modal isOpen={isOpenUpdate} close={handelCloseUpdate}>
						<UpdateVehicle
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
					{validatePermissions({ per: system.permissions.create }) &&
						validatePermissions({ per: system.permissions.ga }) && (
							<Btn
								text={'Registrar vehículo'}
								nameIcon={'car'}
								className='btnStyle'
								handleClick={handleOpenRegister}
							/>
						)}
					<Link
						className='btnStyle page__link'
						target='_blank'
						to='/pdf/vehicle'
					>
						PDF <Icons iconName={'pdf'} />
					</Link>
				</div>
				{validatePermissions({ per: system.permissions.read }) &&
					validatePermissions({ per: system.permissions.ga }) && (
						<div className='page__options'>
							<Select
								className='page__input'
								name={'uidSite'}
								title={system.component.form.select.site}
								value={siteValue}
								onChange={handleChangeSite}
								data={
									validatePermissions({ per: system.permissions.site })
										? dataSite?.map(item => ({
												value: item.uid,
												label: item.name,
										  }))
										: [{ value: dataSite?.uid, label: dataSite?.name }]
								}
								valueDefault={site}
								disabled={validatePermissions({ per: system.permissions.site })}
							/>
							<Select
								className='page__input--filter'
								name={'orderProperty'}
								title={system.component.form.select.filter}
								value={order}
								onChange={handleChangeOrder}
								data={dataOrderVehicle}
								valueDefault={dataOrderVehicle[0].value}
							/>
							<Search
								value={search}
								handleChange={handleChangeSearch}
								handleSearch={handleSearchComponent}
							/>
						</div>
					)}
				{validatePermissions({ per: system.permissions.read }) &&
					validatePermissions({ per: system.permissions.ga }) && (
						<Table
							heads={
								(validatePermissions({ per: system.permissions.delete }) &&
									validatePermissions({ per: system.permissions.ga })) ||
								(validatePermissions({ per: system.permissions.update }) &&
									validatePermissions({ per: system.permissions.ga }))
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
export default Vehicle;
