import { useCallback } from 'react';
import { permissions } from '../data/dataPermissions';
import { system } from '../data/system';
import useValidate from '../hooks/useValidate';
import Select from './Select';

const Filter = ({ filter, setFilter, site, order, status }) => {
	const { validate } = useValidate();

	const handleFilter = useCallback(
		e => {
			const { name, value } = e.target;
			setFilter({ ...filter, [name]: value });
		},
		[filter, setFilter],
	);

	return (
		<>
			{/* Select para filtrar por sitio */}
			{filter?.site && (
				<Select
					className='page__input'
					name={'uidSite'}
					title={system.component.form.select.site}
					value={filter?.site}
					onChange={handleFilter}
					data={
						validate({ per: permissions.siteAssignation })
							? site?.map(item => ({
									value: item.uid,
									label: item.name,
							  }))
							: [{ value: site?.uid, label: site?.name }]
					}
					valueDefault={filter?.site}
					disabled={validate({ per: permissions.siteAssignation })}
				/>
			)}
			{/* Select para filtrar por orden */}
			<Select
				className='page__input--filter'
				name={'order'}
				title={system.component.form.select.filter}
				value={filter?.order}
				onChange={handleFilter}
				data={order}
				valueDefault={order[0].value}
			/>
			{/* Select para filtrar por estado */}
			<Select
				className='page__input--filter'
				name={'status'}
				title={system.component.form.select.status}
				value={filter?.status}
				onChange={handleFilter}
				data={status}
				valueDefault={status[0].value}
			/>
		</>
	);
};
export default Filter;
