/* cSpell:disable */
export const system = {
	title: 'S.U.C.I Ven9-1-1',
	titleLarge: 'Sistema Unificado para el Control Interno del Ven9-1-1',
	component: {
		doubleInput: {
			select: {
				dia: 'Dia',
				mes: 'Mes',
				año: 'Año',
			},
		},
		footer: {
			credit: {
				title: 'Créditos',
				creditIcon: {
					title: 'Iconos de los módulos',
					presentationIcon: {
						title: 'Presentación iconos creados por monkik - Flaticon',
						url: 'https://www.flaticon.es/iconos-gratis/presentacion',
					},
					boydIcon: {
						title: 'Byod iconos creados por Flat Icons - Flaticon',
						url: 'https://www.flaticon.es/iconos-gratis/byod',
					},
					personalIcon: {
						title: 'Personal iconos creados por Futuer - Flaticon',
						url: 'https://www.flaticon.es/iconos-gratis/personal',
					},
					pazIcon: {
						title: 'Paz iconos creados por Freepik - Flaticon',
						url: 'https://www.flaticon.es/iconos-gratis/paz',
					},
					ambulanceIcon: {
						title: 'Ambulancia iconos creados por Freepik - Flaticon',
						url: 'https://www.flaticon.es/iconos-gratis/ambulancia',
					},
					budgetIcon: {
						title: 'Presupuesto iconos creados por ultimatearm - Flaticon',
						url: 'https://www.flaticon.es/iconos-gratis/presupuesto',
					},
				},
			},
			creator: {
				title: 'Creadores',
				creators: {
					JE: {
						data: 'José Esteves CI: 27793193',
						portfolio: 'https://josefestevesp.github.io/',
					},
					CLC: {
						data: 'Carlos j, la concha. CI:16.034.267',
						portfolio: '',
					},
					CF: {
						data: 'Carlos r flores CI: 5.902.143',
						portfolio: '',
					},
					FM: {
						data: 'Freddy moreno C.I: 20.096.150',
						portfolio: '',
					},
					BM: {
						data: 'Bethzaida Muñoz C.I: 7.954.799',
						portfolio: '',
					},
				},
			},
		},
		form: {
			label: {
				user: 'Usuario',
				search: 'Buscar',
				active: 'Activo',
				inactive: 'Inactivo',
				asc: 'Ascendente',
				dsc: 'Descendente',
				action: 'Acción',
				article: 'Articulo',
				assign: 'Asignado',
				brand: 'Marca',
				breakdownDepartment: 'Departamento de avería',
				ci: 'CI',
				dataQuantity: 'Cantidad',
				codeBN: 'Código BN',
				condition: 'Condición',
				dateOfAcquisition: 'Fecha de Adquisición',
				dateOfPurchase: 'Fecha de Compra',
				dateOfReport: 'Fecha del reporte',
				department: 'Departamento',
				description: 'Descripción',
				direction: 'Dirección',
				email: 'Correo',
				goods: 'Bienes',
				inventory: 'Inventario',
				location: 'Ubicación',
				model: 'Modelo',
				name: 'Nombre',
				orderNumber: 'Número de orden',
				orderProperty: 'Ordenar por propiedad',
				order: 'Orden',
				status: 'Estatus',
				password: 'Contraseña',
				permissions: 'Permisos',
				place: 'Placa',
				problem: 'Problema',
				product: 'Producto',
				quantity: 'Cantidad',
				remarks: 'Observaciones',
				rol: 'Rol',
				serial: 'Serial',
				serialOrCodeBN: 'Seria o Código BN',
				site: 'Sede',
				supplier: 'Proveedor',
				surname: 'Apellido',
				symptoms: 'Sintomas',
				timeOfReport: 'Hora del reporte',
				value: 'valor BS',
				warranty: 'Garantia',
				startDate: 'Fecha inicio',
				endDate: 'Fecha final',
			},
			placeholder: {
				department: 'Departamento...',
				timeOfReport: 'Hora...',
				brand: 'Marca...',
				ci: 'Ingrese cedula...',
				dataQuantity: 'Cantidad de datos...',
				codeBN: 'Código BN...',
				condition: 'Condición...',
				date: 'DD/MM/AA',
				dateOfPurchase: 'Fecha de Compra...',
				description: 'Descripción...',
				direction: 'Dirección...',
				email: 'Ingrese correo...',
				goods: 'Bienen...',
				location: 'Ubicación...',
				model: 'Modelo...',
				name: 'Ingrese nombre...',
				orderNumber: 'Número de orden...',
				password: 'Ingrese contaseña...',
				place: 'Placa...',
				product: 'Producto...',
				quantity: 'Cantidad...',
				remarks: 'Observaciones...',
				search: 'Buscar...',
				serial: 'Serial...',
				serialOrCodeBN: 'Seria o Código BN...',
				supplier: 'Proveedor...',
				surname: 'Ingrese apellido...',
				value: 'Valor...',
				warranty: 'Garantia...',
				symptoms: 'Sintomas...',
				problem: 'Problema...',
			},
			select: {
				inventory: 'Seleccione inventario',
				aria: 'Selecciona una Opción',
				rol: 'Seleccione el Rol',
				site: 'Seleccione la Sede',
				filter: 'Seleccione el Filtro',
				order: 'Seleccione el Orden',
				status: 'Seleccione el Estatus',
				condition: 'Seleccione la Condición',
				breakdownDepartment: 'Seleccione el Dpto. avería',
				article: 'Seleccione el articulo',
			},
		},
		btn: {
			submit: 'Enviar',
		},
		rol: {
			register: 'Registro Rol',
			permission: 'Permisos para el rol',
			permissionAll: 'Permisos Globales',
			permissionUser: 'Permisos tabla Usuario',
			permissionRol: 'Permisos tabla Rol',
			permissionSite: 'Permisos tabla Sede',
			permissionTechnology: 'Permisos tabla Tecnología',
			permissionConsumables: 'Permisos tabla Consumible',
			permissionFurniture: 'Permisos tabla Mobiliario',
			permissionVehicle: 'Permisos tabla Vehículos',
			permissionBreakdownReport: 'Permisos tabla Reporte de aberias',
			permissionPurchase: 'Permisos tabla Compras',
			permissionAssign: 'Permisos tabla Asignación',
			module: 'Modulo para el rol',
			update: 'Actualizar Rol',
			permissionLabel: {
				super: 'Super usuario',
				user: 'Usuario',
				rol: 'Rol',
				site: 'Sede',
				profile: 'Perfil',
				profileUpdate: 'Actualizar Perfil',
				create: 'Crear',
				update: 'Actualizar',
				read: 'Leer',
				delete: 'Eliminar',
				pdf: 'PDF',
				technology: 'Tecnología',
				consumables: 'Consumible',
				furniture: 'Mobiliario',
				vehicle: 'Vehículos',
				breakdownReport: 'Reporte de aberias',
				purchase: 'Compras',
				assign: 'Asignación',
				ocp: 'Operaciones cuadrantes de paz',
				ga: 'Gestión Administrativa',
				gh_aj: 'Gestión humana y asesoría jurídica',
				pop_psi: 'POP-PSI',
				tci: 'Tecnología comunicación e información',
				uri: 'URI',
				power: 'potencia',
			},
		},
		site: { register: 'Registro Sede', update: 'Actualizar Sede' },
		purchase: { register: 'Registro de compras', update: 'Actualizar compra' },
		user: { register: 'Registro usuario', update: 'Actualizar usuario' },
		vehicle: { register: 'Registro vehículo', update: 'Actualizar vehículo' },
		furniture: {
			register: 'Registro mobiliario',
			update: 'Actualizar mobiliario',
		},
		technology: {
			register: 'Registro tecnologia',
			update: 'Actualizar tecnologia',
		},
		breakdownReport: {
			register: 'Reporte de avería',
			update: 'Reporte de avería',
		},
		consumables: {
			register: 'Registro consumible',
			update: 'Actualizar consumible',
		},
		assign: {
			register: 'Registro de asignación',
			update: 'Actualizar de asignación',
		},
		loading: 'Cargando...',
	},
	page: {
		redirect: {
			cardModule: {
				GA: 'Gestión administrativa',
				URI: 'URI',
				POWER: 'Potencia',
				GHAJ: 'Gestión humana y asesoría jurídica',
				OCP: 'Operaciones cuadrantes de paz',
				TCI: 'Tecnología comunicación e información',
				POP_PSI: 'POP-PSI',
				btn: 'Entrar',
			},
		},
		profile: {
			title: 'Perfil',
			form: {
				oldPassword: 'Contraseña anterior',
				newPassword: 'Contraseña nueva',
			},
			data: 'Actualizar Datos',
			pass: 'Actualizar Contraseña',
			email: 'Actualizar Correo',
		},
	},
	msg: {
		abort: 'La solicitud fue cancelada debido a un cambio inesperado',
		msgLogin: 'Usuario conectado con éxito',
		msgRegister: 'Registro con éxito',
		msgUpdate: 'Actualizado con éxito',
		msgDele: 'Eliminación con éxito',
	},
	routeApi: {
		user: {
			primary: '/user',
			register: '/register',
			report: '/report',
			search: '/search',
			list: '/list',
			login: '/login',
			profile: '/profile',
			update: '/update',
			updateData: '/update-data',
			updateEmail: '/update-email',
			updatePassword: '/update-password',
			delete: '/delete',
		},
		rol: {
			report: '/report',
			primary: '/rol',
			list: '/list',
			lisOfLimit: '/list_of_limit',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		site: {
			primary: '/site',
			report: '/report',
			item: '/item/',
			list: '/list',
			lisOfLimit: '/list_of_limit',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		assign: {
			primary: '/assign',
			report: '/report',
			item: '/item/',
			list: '/list',
			lisOfLimit: '/list_of_limit',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
			listInventory: '/listInventory',
		},
		technology: {
			primary: '/technology',
			report: '/report',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		purchase: {
			primary: '/purchase',
			report: '/report',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		furniture: {
			primary: '/furniture',
			report: '/report',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		consumables: {
			primary: '/consumables',
			report: '/report',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		vehicle: {
			primary: '/vehicle',
			report: '/report',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		breakdownReport: {
			primary: '/breakdownReport',
			report: '/report',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
	},
	permissions: {
		createAssign: 'CREATE_ASSIGN',
		createBreakdownReport: 'CREATE_BREAKDOWNREPORT',
		createConsumables: 'CREATE_CONSUMABLES',
		createFurniture: 'CREATE_FURNITURE',
		createPurchase: 'CREATE_PURCHASE',
		createRol: 'CREATE_ROL',
		createSite: 'CREATE_SITE',
		createTechnology: 'CREATE_TECHNOLOGY',
		createUser: 'CREATE_USER',
		createVehicle: 'CREATE_VEHICLE',
		deleteAssign: 'DELETE_ASSIGN',
		deleteBreakdownReport: 'DELETE_BREAKDOWNREPORT',
		deleteConsumables: 'DELETE_CONSUMABLES',
		deleteFurniture: 'DELETE_FURNITURE',
		deletePurchase: 'DELETE_PURCHASE',
		deleteRol: 'DELETE_ROL',
		deleteSite: 'DELETE_SITE',
		deleteTechnology: 'DELETE_TECHNOLOGY',
		deleteUser: 'DELETE_USER',
		deleteVehicle: 'DELETE_VEHICLE',
		ga: 'GA',
		gh_aj: 'GH_AJ',
		ocp: 'OCP',
		pdf: 'PDF',
		pdfItem: 'PDF_ITEM',
		pop_psi: 'POP_PSI',
		power: 'POWER',
		profile: 'PROFILE',
		profileDelete: 'PROFILE_DELETE',
		profileUpdate: 'PROFILE_UPDATE',
		readAssign: 'READ_ASSIGN',
		readBreakdownReport: 'READ_BREAKDOWNREPORT',
		readConsumables: 'READ_CONSUMABLES',
		readFurniture: 'READ_FURNITURE',
		readPurchase: 'READ_PURCHASE',
		readRol: 'READ_ROL',
		readSite: 'READ_SITE',
		readTechnology: 'READ_TECHNOLOGY',
		readUser: 'READ_USER',
		readVehicle: 'READ_VEHICLE',
		site: 'SITE',
		super: 'SUPER',
		tci: 'TCI',
		updateAssign: 'UPDATE_ASSIGN',
		updateBreakdownReport: 'UPDATE_BREAKDOWNREPORT',
		updateConsumables: 'UPDATE_CONSUMABLES',
		updateFurniture: 'UPDATE_FURNITURE',
		updatePurchase: 'UPDATE_PURCHASE',
		updateRol: 'UPDATE_ROL',
		updateSite: 'UPDATE_SITE',
		updateTechnology: 'UPDATE_TECHNOLOGY',
		updateUser: 'UPDATE_USER',
		updateVehicle: 'UPDATE_VEHICLE',
		uri: 'URI',
		pdfAssign: 'PDF_ASSIGN',
		pdfBreakdownReport: 'PDF_BREAKDOWNREPORT',
		pdfConsumables: 'PDF_CONSUMABLES',
		pdfFurniture: 'PDF_FURNITURE',
		pdfPurchase: 'PDF_PURCHASE',
		pdfRol: 'PDF_ROL',
		pdfSite: 'PDF_SITE',
		pdfTechnology: 'PDF_TECHNOLOGY',
		pdfUser: 'PDF_USER',
		pdfVehicle: 'PDF_VEHICLE',
	},
};

export const filterText = {
	active: '1',
	inactive: '0',
};
