/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import RegisterAssign from '../../components/GA/RegisterAssign';
import TableDataAssign from '../../components/GA/TableDataAssign';
import UpdateAssign from '../../components/GA/UpdateAssign';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Select from '../../components/Select';
import Table from '../../components/Table';
import { ContextSite } from '../../context/SiteContext';
import { dataOrderAssign } from '../../data/dataOrder';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useLits from '../../hooks/useLists';
import useModal from '../../hooks/useModal';
import useOrder from '../../hooks/useOrder';
import useSearch from '../../hooks/useSearch';
import useSite from '../../hooks/useSite';
import useValidatePermissions from '../../hooks/useValidatePermissions';
import './style/page.css';

const heads = [
	system.component.form.label.inventory,
	system.component.form.label.article,
	system.component.form.label.serialOrCodeBN,
	system.component.form.label.department,
	system.component.form.label.quantity,
	system.component.form.label.description,
	system.component.form.label.remarks,
	system.component.form.label.action,
];
const headsOfAction = [
	system.component.form.label.inventory,
	system.component.form.label.article,
	system.component.form.label.serialOrCodeBN,
	system.component.form.label.department,
	system.component.form.label.quantity,
	system.component.form.label.description,
	system.component.form.label.remarks,
];
const url =
	import.meta.env.VITE_ULR_API +
	system.routeApi.assign.primary +
	system.routeApi.assign.list;
const Assign = () => {
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
			system.routeApi.assign.primary +
			system.routeApi.assign.search,
	});
	const { order, handleChange: handleChangeOrder } = useOrder({
		orderDefault: dataOrderAssign[0].value,
	});
	const [newData, setNewData] = useState(null);
	useEffect(() => {
		if (validatePermissions({ per: permissions.readAssign })) {
			handleList({ orderProperty: order });
			handelFetchSite({
				url: validatePermissions({ per: permissions.site })
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
		if (validatePermissions({ per: permissions.readAssign })) {
			handleList({ uidSite: siteValue, orderProperty: order });
		}
		if (searchSubmit) {
			handleSearch({ uidSite: siteValue, orderProperty: order });
		}
	}, [siteValue, order]);
	const renderData = useCallback(() => {
		if (searchSubmit) {
			return dataSearch?.rows?.map(
				item =>
					validatePermissions({ per: permissions.readAssign }) && (
						<TableDataAssign
							key={item.uid}
							order={order}
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
					validatePermissions({ per: permissions.readAssign }) && (
						<TableDataAssign
							key={item.uid}
							order={order}
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
	const handleSearchComponent = e =>
		handleSearch({ e, uidSite: siteValue, orderProperty: order });
	return (
		<>
			{validatePermissions({ per: permissions.createAssign }) && (
				<Modal isOpen={isOpenRegister} close={handelCloseRegister}>
					<RegisterAssign
						order={order}
						siteValue={siteValue}
						handleList={handleList}
						handelClose={handelCloseRegister}
					/>
				</Modal>
			)}
			{validatePermissions({ per: permissions.updateAssign }) && newData && (
				<Modal isOpen={isOpenUpdate} close={handelCloseUpdate}>
					<UpdateAssign
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
					{validatePermissions({ per: permissions.createAssign }) && (
						<Btn
							text={'Asignar'}
							nameIcon={'assignment'}
							className='btnStyle'
							handleClick={handleOpenRegister}
						/>
					)}
					{validatePermissions({ per: permissions.pdfAssign }) && (
						<Link
							className='btnStyle page__link'
							target='_blank'
							to='/ga/pdf/assign'
						>
							PDF <Icons iconName={'pdf'} />
						</Link>
					)}
				</div>
				{validatePermissions({ per: permissions.readAssign }) && (
					<div className='page__options'>
						<Select
							className='page__input'
							name={'uidSite'}
							title={system.component.form.select.site}
							value={siteValue}
							onChange={handleChangeSite}
							data={
								validatePermissions({ per: permissions.site })
									? dataSite?.map(item => ({
											value: item.uid,
											label: item.name,
									  }))
									: [{ value: dataSite?.uid, label: dataSite?.name }]
							}
							valueDefault={site}
							disabled={validatePermissions({ per: permissions.site })}
						/>
						<Select
							className='page__input--filter'
							name={'orderProperty'}
							title={system.component.form.select.filter}
							value={order}
							onChange={handleChangeOrder}
							data={dataOrderAssign}
							valueDefault={dataOrderAssign[0].value}
						/>
						<Search
							value={search}
							handleChange={handleChangeSearch}
							handleSearch={handleSearchComponent}
						/>
					</div>
				)}
				{validatePermissions({ per: permissions.readAssign }) && (
					<Table
						heads={
							validatePermissions({ per: permissions.deleteAssign }) ||
							validatePermissions({ per: permissions.updateAssign })
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
export default Assign;
