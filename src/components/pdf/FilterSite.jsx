import { dataOrder, dataOrderSite, dataStatus } from '../../data/dataOrder';
import { system } from '../../data/system';
import useFilter from '../../hooks/useFilter';
import Btn from '../Btn';
import '../GA/style/register.css';
import Input from '../Input';
import InputCalendar from '../InputCalendar';
import Select from '../Select';
const options = {
	orderProperty: 'orderProperty',
	order: 'order',
	dataStatus: 'dataStatus',
	dataQuantity: 'dataQuantity',
	startDate: 'startDate',
	endDate: 'endDate',
};
const initForm = {
	orderProperty: '',
	order: 'ASC',
	dataStatus: '1',
	dataQuantity: 17,
	startDate: '',
	endDate: '',
};
const FilterSite = ({ handelClose, handelFetch, url }) => {
	const { filterOptions, handleChange, handleSubmit } = useFilter({
		handelClose,
		initForm: {
			...initForm,
			orderProperty: dataOrderSite[0].value,
		},
		options,
		handelFetch,
	});

	const submit = e => handleSubmit({ url, e });
	return (
		<section className='register'>
			<h2 className='register__title'>{system.component.user.register}</h2>
			<form onSubmit={submit} className='register__form'>
				<Select
					className='register__input'
					name={'orderProperty'}
					label={system.component.form.label.orderProperty}
					title={system.component.form.select.filter}
					value={filterOptions.orderProperty || ''}
					onChange={handleChange}
					data={dataOrderSite}
					valueDefault={dataOrderSite[0].value}
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
export default FilterSite;
