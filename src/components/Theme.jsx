import { useCallback, useEffect, useState } from 'react';
import Btn from './Btn';
import './style/theme.css';
const Theme = ({ className = 'theme__btn', classIcon }) => {
	const themeDefault = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
	const themeDefaultLocal =
		localStorage.getItem('theme') === null
			? themeDefault
			: localStorage.getItem('theme');
	const [currentTheme, setCurrentTheme] = useState(themeDefaultLocal);
	useEffect(() => {
		localStorage.setItem('theme', currentTheme);
		setCurrentTheme(localStorage.getItem('theme'));
		document.documentElement.setAttribute('data-theme', currentTheme);
	}, [currentTheme]);
	const handleClick = useCallback(
		() => setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light'),
		[currentTheme],
	);
	const iconName = {
		dark: 'sun',
		light: 'moon',
	};
	return (
		<Btn
			handleClick={handleClick}
			nameIcon={iconName[currentTheme]}
			className={className}
			classIcon={classIcon}
		/>
	);
};
export default Theme;
