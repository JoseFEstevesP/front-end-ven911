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
				name: 'Nombre',
				surname: 'Apellido',
				permissions: 'Permisos',
				rol: 'Rol',
				site: 'Sede',
			},
			placeholder: {
				ci: 'Ingrese su cedula...',
				email: 'Ingrese su correo...',
				password: 'Ingrese su contaseña...',
				name: 'Ingrese su nombre...',
				surname: 'Ingrese su apellido...',
				search: 'Buscar...',
			},
			select: {
				aria: 'Selecciona una opción',
				rol: 'Seleccione el Rol',
				site: 'Seleccione la Sede',
				filter: 'Seleccione el filtro',
			},
		},
		btn: {
			submit: 'Enviar',
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
		},
	},
	permissions: {
		super: 'SUPER',
		profile: 'PROFILE',
		create: 'CREATE',
		update: 'UPDATE',
		ocp: 'OCP',
		ga: 'GA',
		gh_aj: 'GH_AJ',
		pop_psi: 'POP_PSI',
		tci: 'TCI',
		uri_p: 'URI_P',
	},
};
