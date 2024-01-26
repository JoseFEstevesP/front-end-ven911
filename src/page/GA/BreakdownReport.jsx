/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../components/Btn';
import RegisterBreakdownReport from '../../components/GA/RegisterBreakdownReport';
import TableDataBreakdownReport from '../../components/GA/TableDataBreakdownReport';
import UpdateBreakdownReport from '../../components/GA/UpdateBreakdownReport';
import Icons from '../../components/Icons';
import Modal from '../../components/Modal';
import Search from '../../components/Search';
import Select from '../../components/Select';
import Table from '../../components/Table';
import { ContextSite } from '../../context/SiteContext';
import { dataOrderBreakdownReport } from '../../data/dataOrder';
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
	system.component.form.label.goods,
	system.component.form.label.problem,
	system.component.form.label.symptoms,
	system.component.form.label.condition,
	system.component.form.label.dateOfReport,
	system.component.form.label.timeOfReport,
	system.component.form.label.breakdownDepartment,
	system.component.form.label.location,
	system.component.form.label.serialOrCodeBN,
	system.component.form.label.action,
];
const headsOfAction = [
	system.component.form.label.goods,
	system.component.form.label.problem,
	system.component.form.label.symptoms,
	system.component.form.label.condition,
	system.component.form.label.dateOfReport,
	system.component.form.label.timeOfReport,
	system.component.form.label.breakdownDepartment,
	system.component.form.label.location,
	system.component.form.label.serialOrCodeBN,
];
const url =
	import.meta.env.VITE_ULR_API +
	system.routeApi.breakdownReport.primary +
	system.routeApi.breakdownReport.list;
const BreakdownReport = () => {
	const { validatePermissions } = useValidatePermissions();
	const { site } = useContext(ContextSite);
	const { handleList, data, nex, prev, dataNext, dataPrev } = useLits({ url });
	const [isOpenRegister, handleOpenRegister, handleCloseRegister] = useModal();
	const [isOpenUpdate, handleOpenUpdate, handleCloseUpdate] = useModal();
	const {
		data: dataSite,
		siteValue,
		handleFetch: handleFetchSite,
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
			system.routeApi.breakdownReport.primary +
			system.routeApi.breakdownReport.search,
	});
	const { order, handleChange: handleChangeOrder } = useOrder({
		orderDefault: dataOrderBreakdownReport[0].value,
	});
	const [newData, setNewData] = useState(null);
	useEffect(() => {
		if (validatePermissions({ per: permissions.readBreakdownReport })) {
			handleList({ orderProperty: order });
			handleFetchSite({
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
		if (validatePermissions({ per: permissions.readBreakdownReport })) {
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
					validatePermissions({ per: permissions.readBreakdownReport }) && (
						<TableDataBreakdownReport
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
					validatePermissions({ per: permissions.readBreakdownReport }) && (
						<TableDataBreakdownReport
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
			{validatePermissions({ per: permissions.createBreakdownReport }) && (
				<Modal isOpen={isOpenRegister} close={handleCloseRegister}>
					<RegisterBreakdownReport
						order={order}
						siteValue={siteValue}
						handleList={handleList}
						handleClose={handleCloseRegister}
					/>
				</Modal>
			)}
			{validatePermissions({ per: permissions.updateBreakdownReport }) &&
				newData && (
					<Modal isOpen={isOpenUpdate} close={handleCloseUpdate}>
						<UpdateBreakdownReport
							order={order}
							siteValue={siteValue}
							newData={newData}
							handleList={handleList}
							isOpen={isOpenUpdate}
							handleClose={handleCloseUpdate}
						/>
					</Modal>
				)}
			<div className='box page'>
				<div className='page__options'>
					{validatePermissions({ per: permissions.createBreakdownReport }) && (
						<Btn
							text={'Reporte Averia'}
							nameIcon={'gears'}
							className='btnStyle'
							handleClick={handleOpenRegister}
						/>
					)}
					{validatePermissions({ per: permissions.pdfBreakdownReport }) && (
						<Link className='btnStyle page__link' to='/ga/pdf/breakdownReport'>
							PDF <Icons iconName={'pdf'} />
						</Link>
					)}
				</div>
				{validatePermissions({ per: permissions.readBreakdownReport }) && (
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
							data={dataOrderBreakdownReport}
							valueDefault={dataOrderBreakdownReport[0].value}
						/>
						<Search
							value={search}
							handleChange={handleChangeSearch}
							handleSearch={handleSearchComponent}
						/>
					</div>
				)}
				{validatePermissions({ per: permissions.readBreakdownReport }) && (
					<Table
						heads={
							validatePermissions({ per: permissions.deleteBreakdownReport }) &&
							validatePermissions({ per: permissions.updateBreakdownReport })
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
export default BreakdownReport;
