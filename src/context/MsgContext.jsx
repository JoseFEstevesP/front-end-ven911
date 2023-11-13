import { createContext, useState } from 'react';
export const ContextMsg = createContext();
const MsgProvider = ({ children }) => {
	const [msg, setMsg] = useState(null);
	return (
		<ContextMsg.Provider value={{ msg, setMsg }}>
			{children}
		</ContextMsg.Provider>
	);
};
export default MsgProvider;
