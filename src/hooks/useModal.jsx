import { useState } from 'react';
const useModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOpen = () => setIsOpen(true);
	const handelClose = () => setIsOpen(false);
	return [isOpen, handleOpen, handelClose];
};
export default useModal;
