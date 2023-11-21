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
						data: 'Jose contreras Carlos r flores CI: 5.902.143',
						portfolio: '',
					},
					FM: {
						data: 'Freddy moreno C.I: 20.096.150',
						portfolio: '',
					},
				},
			},
		},
		form: {
			label: {
				action: 'Acción',
				brand: 'Marca',
				ci: 'CI',
				codeBN: 'Código BN',
				condition: 'Condición',
				dateOfAcquisition: 'Fecha de Adquisición',
				dateOfPurchase: 'Fecha de Compra',
				dateOfReport: 'Fecha del reporte',
				description: 'Descripción',
				direction: 'Dirección',
				email: 'Correo',
				goods: 'Bienes',
				location: 'Ubicación',
				model: 'Modelo',
				name: 'Nombre',
				orderNumber: 'Número de orden',
				password: 'Contraseña',
				permissions: 'Permisos',
				place: 'Placa',
				product: 'Producto',
				proposedSolution: 'Solución propuesta',
				quantity: 'Cantidad',
				remarks: 'Observaciones',
				rol: 'Rol',
				serial: 'Serial',
				serialOrCodeBN: 'Seria o Código BN',
				site: 'Sede',
				supplier: 'Proveedor',
				surname: 'Apellido',
				timeOfReport: 'Hora del reporte',
				value: 'valor BS',
				warranty: 'Garantia',
			},
			placeholder: {
				timeOfReport: 'Hora...',
				brand: 'Marca...',
				ci: 'Ingrese cedula...',
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
				proposedSolution: 'Solución propuesta...',
				quantity: 'Cantidad...',
				remarks: 'Observaciones...',
				search: 'Buscar...',
				serial: 'Serial...',
				serialOrCodeBN: 'Seria o Código BN...',
				supplier: 'Proveedor...',
				surname: 'Ingrese apellido...',
				value: 'Valor...',
				warranty: 'Garantia...',
			},
			select: {
				aria: 'Selecciona una Opción',
				rol: 'Seleccione el Rol',
				site: 'Seleccione la Sede',
				filter: 'Seleccione el Filtro',
				condition: 'Seleccione la Condición',
			},
		},
		btn: {
			submit: 'Enviar',
		},
		rol: {
			register: 'Registro Rol',
			permission: 'Permisos para el rol',
			module: 'Modulo para el rol',
			update: 'Actualizar Rol',
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
		loading: 'Cargando...',
	},
	page: {
		redirect: {
			cardModule: {
				GA: 'Gestión administrativa',
				URI_P: 'URI potencia',
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
			item: '/item/',
			list: '/list',
			lisOfLimit: '/list_of_limit',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		technology: {
			primary: '/technology',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		purchase: {
			primary: '/purchase',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		furniture: {
			primary: '/furniture',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		consumables: {
			primary: '/consumables',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		vehicle: {
			primary: '/vehicle',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
		breakdownReport: {
			primary: '/breakdownReport',
			list: '/list',
			register: '/register',
			search: '/search',
			update: '/update',
			delete: '/delete',
		},
	},
	permissions: {
		super: 'SUPER',
		profile: 'PROFILE',
		create: 'CREATE',
		update: 'UPDATE',
		read: 'READ',
		delete: 'DELETE',
		site: 'SITE',
		ocp: 'OCP',
		ga: 'GA',
		gh_aj: 'GH_AJ',
		pop_psi: 'POP_PSI',
		tci: 'TCI',
		uri_p: 'URI_P',
	},
};
