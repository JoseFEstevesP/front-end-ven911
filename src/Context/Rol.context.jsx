import { createContext, useState } from 'react';
export const ContextRol = createContext();
const RolProvider = ({ children }) => {
	const [rol, setRol] = useState(null);
	return (
		<ContextRol.Provider value={{ rol, setRol }}>
			{children}
		</ContextRol.Provider>
	);
};
export default RolProvider;
