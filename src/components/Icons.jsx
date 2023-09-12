import { useEffect, useState } from 'react';
import './style/icons.css';
const Icons = ({ className, iconName, type = 'system', size }) => {
	const [fileIcon, setFileIcon] = useState(null);
	useEffect(() => {
		import(`./../assets/icons/${type}.svg`)
			.then(res => setFileIcon(res.default))
			.catch(err =>
				console.error(`No se pudo cargar el icono de ${type}. Error: ${err}`),
			);
	}, [type]);
	return (
		<svg role='img' className={`${className} icon`} style={{ '--size': size }}>
			<use href={`${fileIcon}#${iconName}`}></use>
		</svg>
	);
};
export default Icons;
