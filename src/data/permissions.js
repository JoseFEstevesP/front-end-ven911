import { permissions } from './dataPermissions';
import { system } from './system';
export const perSystem = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.super,
		value: permissions.super,
	},
];
export const perUser = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.user,
		value: permissions.user,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.create,
		value: permissions.createUser,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.update,
		value: permissions.updateUser,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.read,
		value: permissions.readUser,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.delete,
		value: permissions.deleteUser,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.profile,
		value: permissions.profile,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.profileUpdate,
		value: permissions.profileUpdate,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pdf,
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
		label: system.component.rol.permissionLabel.rol,
		value: permissions.rol,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.create,
		value: permissions.createRol,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.update,
		value: permissions.updateRol,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.read,
		value: permissions.readRol,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.delete,
		value: permissions.deleteRol,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pdf,
		value: permissions.pdfRol,
	},
];
export const perSite = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.site,
		value: permissions.site,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.create,
		value: permissions.createSite,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.update,
		value: permissions.updateSite,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.read,
		value: permissions.readSite,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.delete,
		value: permissions.deleteSite,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pdf,
		value: permissions.pdfSite,
	},
];
export const perTechnology = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.technology,
		value: permissions.technology,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.create,
		value: permissions.createTechnology,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.update,
		value: permissions.updateTechnology,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.read,
		value: permissions.readTechnology,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.delete,
		value: permissions.deleteTechnology,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pdf,
		value: permissions.pdfTechnology,
	},
];
export const perConsumables = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.consumables,
		value: permissions.consumables,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.create,
		value: permissions.createConsumables,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.update,
		value: permissions.updateConsumables,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.read,
		value: permissions.readConsumables,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.delete,
		value: permissions.deleteConsumables,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pdf,
		value: permissions.pdfConsumables,
	},
];
export const perFurniture = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.furniture,
		value: permissions.furniture,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.create,
		value: permissions.createFurniture,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.update,
		value: permissions.updateFurniture,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.read,
		value: permissions.readFurniture,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.delete,
		value: permissions.deleteFurniture,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pdf,
		value: permissions.pdfFurniture,
	},
];
export const perVehicle = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.vehicle,
		value: permissions.vehicle,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.create,
		value: permissions.createVehicle,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.update,
		value: permissions.updateVehicle,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.read,
		value: permissions.readVehicle,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.delete,
		value: permissions.deleteVehicle,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pdf,
		value: permissions.pdfVehicle,
	},
];
export const perBreakdownReport = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.breakdownReport,
		value: permissions.breakdownReport,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.create,
		value: permissions.createBreakdownReport,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.update,
		value: permissions.updateBreakdownReport,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.read,
		value: permissions.readBreakdownReport,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.delete,
		value: permissions.deleteBreakdownReport,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pdf,
		value: permissions.pdfBreakdownReport,
	},
];
export const perPurchase = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.purchase,
		value: permissions.purchase,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.create,
		value: permissions.createPurchase,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.update,
		value: permissions.updatePurchase,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.read,
		value: permissions.readPurchase,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.delete,
		value: permissions.deletePurchase,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pdf,
		value: permissions.pdfPurchase,
	},
];
export const perAssign = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.assign,
		value: permissions.assign,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.create,
		value: permissions.createAssign,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.update,
		value: permissions.updateAssign,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.read,
		value: permissions.readAssign,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.delete,
		value: permissions.deleteAssign,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pdf,
		value: permissions.pdfAssign,
	},
];
export const perModule = [
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.ocp,
		value: permissions.ocp,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.ga,
		value: permissions.ga,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.gh_aj,
		value: permissions.gh_aj,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.pop_psi,
		value: permissions.pop_psi,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.tci,
		value: permissions.tci,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.uri,
		value: permissions.uri,
	},
	{
		uid: crypto.randomUUID(),
		label: system.component.rol.permissionLabel.power,
		value: permissions.power,
	},
];
