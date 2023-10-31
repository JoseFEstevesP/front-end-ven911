import { system } from '../data/system';
import Input from './Input';

const Search = ({ handleSearch, value, handleChange }) => {
	return (
		<form className='search' onSubmit={handleSearch}>
			<Input
				className='user__input'
				iconName={'search'}
				name={'search'}
				type='search'
				placeholder={system.component.form.placeholder.search}
				value={value}
				onChange={handleChange}
			/>
		</form>
	);
};
export default Search;
