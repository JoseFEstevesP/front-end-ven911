import { useEffect } from 'react';
import { system } from '../data/system';

const Page = ({ children, title }) => {
	useEffect(() => {
		document.title = `${system.title} | ${title}`;
	}, [title]);
	return <>{children}</>;
};
export default Page;
