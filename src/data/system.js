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
				title: 'Croadores',
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
				ci: 'CI',
				email: 'Correo',
				password: 'Contraseña',
				place: 'Placa',
				name: 'Nombre',
				surname: 'Apellido',
				permissions: 'Permisos',
				rol: 'Rol',
				site: 'Sede',
				direction: 'Dirección',
				description: 'Descripción',
				brand: 'Marca',
				model: 'Modelo',
				quantity: 'Cantidad',
				value: 'valor BS',
				state: 'Estado',
				dateOfAcquisition: 'Fecha de Adquisición',
				location: 'Ubicación',
				warranty: 'Garantia',
				remarks: 'Observaciones',
				codeBN: 'Código BN',
				serial: 'Serial',
				action: 'Acción',
			},
			placeholder: {
				ci: 'Ingrese cedula...',
				email: 'Ingrese correo...',
				place: 'Placa...',
				password: 'Ingrese contaseña...',
				name: 'Ingrese nombre...',
				surname: 'Ingrese apellido...',
				search: 'Buscar...',
				direction: 'Dirección...',
				description: 'Descripción...',
				brand: 'Marca...',
				model: 'Modelo...',
				quantity: 'Cantidad...',
				value: 'Valor...',
				state: 'Estado...',
				location: 'Ubicación...',
				warranty: 'Garantia...',
				remarks: 'Observaciones...',
				codeBN: 'Código BN...',
				date: 'DD/MM/AA',
				serial: 'Serial...',
			},
			select: {
				aria: 'Selecciona una Opción',
				rol: 'Seleccione el Rol',
				site: 'Seleccione la Sede',
				filter: 'Seleccione el Filtro',
				state: 'Seleccione el Estado',
			},
		},
		btn: {
			submit: 'Enviar',
		},
		rol: {
			register: 'Registro de Rol',
			permission: 'Permisos para el rol',
			module: 'Modulo para el rol',
			update: 'Actualizar de Rol',
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
	},
	permissions: {
		super: 'SUPER',
		profile: 'PROFILE',
		create: 'CREATE',
		update: 'UPDATE',
		read: 'READ',
		delete: 'DELETE',
		ocp: 'OCP',
		ga: 'GA',
		gh_aj: 'GH_AJ',
		pop_psi: 'POP_PSI',
		tci: 'TCI',
		uri_p: 'URI_P',
	},
};
