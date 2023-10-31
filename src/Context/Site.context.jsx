import { createContext, useState } from 'react';
export const ContextSite = createContext();
const SiteProvider = ({ children }) => {
	const [site, setSite] = useState(sessionStorage.getItem('site') || null);
	return (
		<ContextSite.Provider value={{ site, setSite }}>
			{children}
		</ContextSite.Provider>
	);
};
export default SiteProvider;
