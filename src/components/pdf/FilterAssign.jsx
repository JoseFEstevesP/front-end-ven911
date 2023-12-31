import { useContext, useEffect } from 'react';
import { ContextSite } from '../../context/SiteContext';
import { dataOrder, dataOrderAssign, dataStatus } from '../../data/dataOrder';
import { system } from '../../data/system';
import useFilter from '../../hooks/useFilter';
import useGet from '../../hooks/useGet';
import useValidatePermissions from '../../hooks/useValidatePermissions';
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
};
const initForm = {
	uidSite: '',
	orderProperty: '',
	order: 'ASC',
	dataStatus: '1',
	dataQuantity: 17,
	startDate: '',
	endDate: '',
};
const FilterAssign = ({ isOpen, handelClose, handelFetch, url }) => {
	const { validatePermissions } = useValidatePermissions();
	const { handelFetch: handelFetchSite, data: dataSite } = useGet();
	const { site } = useContext(ContextSite);

	const { filterOptions, handleChange, handleSubmit } = useFilter({
		handelClose,
		initForm: {
			...initForm,
			uidSite: site,
			orderProperty: dataOrderAssign[0].value,
		},
		options,
		handelFetch,
	});

	useEffect(() => {
		if (isOpen) {
			handelFetchSite({
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
				{validatePermissions({ per: system.permissions.site }) && (
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
					data={dataOrderAssign}
					valueDefault={dataOrderAssign[0].value}
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
				<Btn
					className='btnStyle register__btn'
					text={system.component.btn.submit}
					type='submit'
				/>
			</form>
		</section>
	);
};
export default FilterAssign;
