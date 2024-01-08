import { permissions } from './dataPermissions';
export const perSystem = [
	{
		uid: crypto.randomUUID(),
		label: 'Super usuario',
		value: permissions.super,
	},
	// {
	// 	uid: crypto.randomUUID(),
	// 	label: 'PDF Items',
	// 	value: 'PDF_ITEM',
	// },
];
export const perUser = [
	{
		uid: crypto.randomUUID(),
		label: 'Usuario',
		value: permissions.user,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Crear',
		value: permissions.createUser,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: permissions.updateUser,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Leer',
		value: permissions.readUser,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: permissions.deleteUser,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Perfil',
		value: permissions.profile,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar Perfil',
		value: permissions.profileUpdate,
	},
	{
		uid: crypto.randomUUID(),
		label: 'PDF',
		value: permissions.pdfUser,
	},
	// {
	// 	uid: crypto.randomUUID(),
	// 	label: 'Eliminar Perfil',
	// 	value: permissions.profileDelete,
	// },
];
export const perRol = [
	{
		uid: crypto.randomUUID(),
		label: 'Rol',
		value: permissions.rol,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Crear',
		value: permissions.createRol,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: permissions.updateRol,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Leer',
		value: permissions.readRol,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: permissions.deleteRol,
	},
	{
		uid: crypto.randomUUID(),
		label: 'PDF',
		value: permissions.pdfRol,
	},
];
export const perSite = [
	{
		uid: crypto.randomUUID(),
		label: 'Sede',
		value: permissions.site,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Crear',
		value: permissions.createSite,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: permissions.updateSite,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Leer',
		value: permissions.readSite,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: permissions.deleteSite,
	},
	{
		uid: crypto.randomUUID(),
		label: 'PDF',
		value: permissions.pdfSite,
	},
];
export const perTechnology = [
	{
		uid: crypto.randomUUID(),
		label: 'Tecnología',
		value: permissions.technology,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Crear',
		value: permissions.createTechnology,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: permissions.updateTechnology,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Leer',
		value: permissions.readTechnology,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: permissions.deleteTechnology,
	},
	{
		uid: crypto.randomUUID(),
		label: 'PDF',
		value: permissions.pdfTechnology,
	},
];
export const perConsumables = [
	{
		uid: crypto.randomUUID(),
		label: 'Consumible',
		value: permissions.consumables,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Crear',
		value: permissions.createConsumables,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: permissions.updateConsumables,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Leer',
		value: permissions.readConsumables,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: permissions.deleteConsumables,
	},
	{
		uid: crypto.randomUUID(),
		label: 'PDF',
		value: permissions.pdfConsumables,
	},
];
export const perFurniture = [
	{
		uid: crypto.randomUUID(),
		label: 'Mobiliario',
		value: permissions.furniture,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Crear',
		value: permissions.createFurniture,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: permissions.updateFurniture,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Leer',
		value: permissions.readFurniture,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: permissions.deleteFurniture,
	},
	{
		uid: crypto.randomUUID(),
		label: 'PDF',
		value: permissions.pdfFurniture,
	},
];
export const perVehicle = [
	{
		uid: crypto.randomUUID(),
		label: 'Vehículos',
		value: permissions.vehicle,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Crear',
		value: permissions.createVehicle,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: permissions.updateVehicle,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Leer',
		value: permissions.readVehicle,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: permissions.deleteVehicle,
	},
	{
		uid: crypto.randomUUID(),
		label: 'PDF',
		value: permissions.pdfVehicle,
	},
];
export const perBreakdownReport = [
	{
		uid: crypto.randomUUID(),
		label: 'Reporte de aberias',
		value: permissions.breakdownReport,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Crear',
		value: permissions.createBreakdownReport,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: permissions.updateBreakdownReport,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Leer',
		value: permissions.readBreakdownReport,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: permissions.deleteBreakdownReport,
	},
	{
		uid: crypto.randomUUID(),
		label: 'PDF',
		value: permissions.pdfBreakdownReport,
	},
];
export const perPurchase = [
	{
		uid: crypto.randomUUID(),
		label: 'Compras',
		value: permissions.purchase,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Crear',
		value: permissions.createPurchase,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: permissions.updatePurchase,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Leer',
		value: permissions.readPurchase,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: permissions.deletePurchase,
	},
	{
		uid: crypto.randomUUID(),
		label: 'PDF',
		value: permissions.pdfPurchase,
	},
];
export const perAssign = [
	{
		uid: crypto.randomUUID(),
		label: 'Asignación',
		value: permissions.assign,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Crear',
		value: permissions.createAssign,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Actualizar',
		value: permissions.updateAssign,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Leer',
		value: permissions.readAssign,
	},
	{
		uid: crypto.randomUUID(),
		label: 'Eliminar',
		value: permissions.deleteAssign,
	},
	{
		uid: crypto.randomUUID(),
		label: 'PDF',
		value: permissions.pdfAssign,
	},
];
export const perModule = [
	{
		uid: crypto.randomUUID(),
		label: 'Operaciones cuadrantes de paz',
		value: 'OCP',
	},
	{
		uid: crypto.randomUUID(),
		label: 'Gestión Administrativa',
		value: 'GA',
	},
	{
		uid: crypto.randomUUID(),
		label: 'Gestión humana y asesoría jurídica',
		value: 'GH_AJ',
	},
	{
		uid: crypto.randomUUID(),
		label: 'POP-PSI',
		value: 'POP_PSI',
	},
	{
		uid: crypto.randomUUID(),
		label: 'Tecnología comunicación e información',
		value: 'TCI',
	},
	{
		uid: crypto.randomUUID(),
		label: 'URI potencia',
		value: 'URI_P',
	},
];
