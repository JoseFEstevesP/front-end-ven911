import { createContext, useState } from 'react';
export const ContextToken = createContext();
const TokenProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	return (
		<ContextToken.Provider value={{ token, setToken }}>
			{children}
		</ContextToken.Provider>
	);
};
export default TokenProvider;
