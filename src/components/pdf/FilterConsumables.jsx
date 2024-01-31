import { useContext, useEffect } from 'react';
import { ContextSite } from '../../context/SiteContext';
import {
	dataOrder,
	dataOrderConsumables,
	dataStatus,
} from '../../data/dataOrder';
import { permissions } from '../../data/dataPermissions';
import { system } from '../../data/system';
import useFilter from '../../hooks/useFilter';
import useGet from '../../hooks/useGet';
import useValidate from '../../hooks/useValidate';
import Btn from '../Btn';
import '../GA/style/register.css';
import Input from '../Input';
import InputCalendar from '../InputCalendar';
import Select from '../Select';
const options = {
	uidSite: 'uidSite',
	orderProperty: 'orderProperty',
	order: 'order',
	dataStatus: 'dataStatus',
	dataQuantity: 'dataQuantity',
	startDate: 'startDate',
	endDate: 'endDate',
	search: 'search',
};
const initForm = {
	uidSite: '',
	orderProperty: '',
	order: 'ASC',
	dataStatus: '1',
	dataQuantity: 17,
	startDate: '',
	endDate: '',
	search: '',
};
const FilterConsumables = ({ isOpen, handleClose, handleFetch, url }) => {
	const { validate } = useValidate();
	const { handleFetch: handleFetchSite, data: dataSite } = useGet();
	const { site } = useContext(ContextSite);

	const { filterOptions, handleChange, handleSubmit } = useFilter({
		handleClose,
		initForm: {
			...initForm,
			uidSite: site,
			orderProperty: dataOrderConsumables[0].value,
		},
		options,
		handleFetch,
	});

	useEffect(() => {
		if (isOpen) {
			handleFetchSite({
				url:
					import.meta.env.VITE_ULR_API +
					system.routeApi.site.primary +
					system.routeApi.site.lisOfLimit,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen]);

	const submit = e => handleSubmit({ url, e });
	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.user.register}</h2>
			<form onSubmit={submit} className='register__form'>
				{validate({ per: permissions.site }) && (
					<Select
						className='register__input'
						label={system.component.form.label.site}
						name={'uidSite'}
						title={system.component.form.select.site}
						value={filterOptions.uidSite || ''}
						valueDefault={site}
						onChange={handleChange}
						data={dataSite?.map(item => ({
							value: item.uid,
							label: item.name,
						}))}
					/>
				)}
				<Select
					className='register__input'
					name={'orderProperty'}
					label={system.component.form.label.orderProperty}
					title={system.component.form.select.filter}
					value={filterOptions.orderProperty || ''}
					onChange={handleChange}
					data={dataOrderConsumables}
					valueDefault={dataOrderConsumables[0].value}
				/>
				<Select
					className='register__input'
					name={'order'}
					label={system.component.form.label.order}
					title={system.component.form.select.order}
					value={filterOptions.order || ''}
					onChange={handleChange}
					data={dataOrder}
					valueDefault={dataOrder[0].value}
				/>
				<Select
					className='register__input'
					name={'status'}
					label={system.component.form.label.status}
					title={system.component.form.select.status}
					value={filterOptions.status || ''}
					onChange={handleChange}
					data={dataStatus}
					valueDefault={dataStatus[0].value}
				/>
				<Input
					className='register__input'
					iconName={'number'}
					name={'dataQuantity'}
					label={system.component.form.label.dataQuantity}
					placeholder={system.component.form.placeholder.dataQuantity}
					type='number'
					onChange={handleChange}
					value={filterOptions.dataQuantity}
				/>
				<InputCalendar
					className='register__input'
					name={'startDate'}
					label={system.component.form.label.startDate}
					onChange={handleChange}
					value={filterOptions.startDate}
				/>
				<InputCalendar
					className='register__input'
					name={'endDate'}
					label={system.component.form.label.endDate}
					onChange={handleChange}
					value={filterOptions.endDate}
				/>
				<Input
					className='register__input'
					iconName={'search'}
					name={'search'}
					type='search'
					label={system.component.form.label.search}
					placeholder={system.component.form.placeholder.search}
					value={filterOptions.search}
					onChange={handleChange}
				/>
				<Btn
					className='btnStyle register__btn'
					text={system.component.btn.submit}
					type='submit'
				/>
			</form>
		</section>
	);
};
export default FilterConsumables;
