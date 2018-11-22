var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))



app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/register', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/register.html'))
})

app.get('/forgot', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/forgot.html'))
})

app.get('/home', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/curso/:materia', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/curso.html'))
})

app.get('/cursoDocente/:materia', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/cursoDocente.html'))
})

app.get('/homeDocente', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/homeDocente.html'))
})

app.get('/messages', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/message.html'))
})

app.get('/getFiles', function (req, res) {
	res.json(sendFile);
})

app.post('/getTable', function (req, res) {
	var arrayTps = [];
	for (var i = 0; i < usersAlumno.length; i++) {
		if (usersAlumno[i].email === req.body.user.email) {
			var x = req.body.nameMateria;
			switch (x) {
				case "gda":
					arrayTps = usersAlumno[i].materiaGda;
					break;
				case "laboratorio":
					arrayTps = usersAlumno[i].materiaLab;
					break;
				case "sor":
					arrayTps = usersAlumno[i].materiaSor;
					break;
				case "bd":
					arrayTps = usersAlumno[i].materiaBd;
					break;
			}
		}
	} res.json(arrayTps)
})

app.post('/register', function (req, res) {
	var existe = false;
	var user = JSON.parse(req.body.user);
	for (let i = 0; i < usersAlumno.length; i++) {
		if (user.email === usersAlumno[i].email) {
			existe = true;
			break;
		}
	}
	if (existe === true) {
		res.json({ status: 404 })
	} else {
		usersAlumno.push(user)
		console.log(usersAlumno)
		res.json({ status: 200 })
	}

})

app.post('/login', function (req, res) {
	var user = {};
	for (var i = 0; i < usersAlumno.length; i++) {
		if (usersAlumno[i].email == req.body.userName) {
			user = usersAlumno[i];
			break;
		} else {
			if (usersProfesor[i].email == req.body.userName) {
				user = usersProfesor[i];
				break
			}
		}
	} res.json(user)

})

app.post('/addFile', function (req, res) {
	var arrayTps = [];
	for (let i = 0; i < usersAlumno.length; i++) {
		
	}

	for (var i = 0; i < usersAlumno.length; i++) {
		if (usersAlumno[i].email === req.body.fileTp.email) {
			var x = req.body.nameMateria;
			switch (x) {
				case "gda":
					usersAlumno[i].materiaGda.push(req.body.fileTp);
					arrayTps = usersAlumno[i].materiaGda;
					break;
				case "laboratorio":
					usersAlumno[i].materiaLab.push(req.body.fileTp);
					arrayTps = usersAlumno[i].materiaLab;
					break;
				case "sor":
					usersAlumno[i].materiaSor.push(req.body.fileTp);
					arrayTps = usersAlumno[i].materiaSor;
					break;
				case "bd":
					usersAlumno[i].materiaBd.push(req.body.fileTp);
					arrayTps = usersAlumno[i].materiaBd;
					break;
			}
		}
	}
	res.json(arrayTps)
})

app.post('/tpsFind', function (req, res) {
	var tp = {};
	var arrayTps = [];
	switch (req.body.nameMateria) {
		case "gda":
			for (var i = 0; i < usersAlumno.length; i++) {
				for (var j = 0; j < usersAlumno[i].materiaGda.length; j++) {
					tp = usersAlumno[i].materiaGda[j];
					tp.user = usersAlumno[i].email;
					arrayTps.push(tp);
				}
			}
			res.json(arrayTps);
			break;

		case "laboratorio":
			for (var i = 0; i < usersAlumno.length; i++) {
				for (var j = 0; j < usersAlumno[i].materiaLab.length; j++) {
					tp = usersAlumno[i].materiaLab[j];
					tp.user = usersAlumno[i].email;
					arrayTps.push(tp);
				}
			}
			res.json(arrayTps);
			break;

		case "sor":
			for (var i = 0; i < usersAlumno.length; i++) {
				for (var j = 0; j < usersAlumno[i].materiaSor.length; j++) {
					tp = usersAlumno[i].materiaSor[j];
					tp.user = usersAlumno[i].email;
					arrayTps.push(tp);
				}
			}
			res.json(arrayTps);
			break;

		case "bd":
			for (var i = 0; i < usersAlumno.length; i++) {
				for (var j = 0; j < usersAlumno[i].materiaBd.length; j++) {
					tp = usersAlumno[i].materiaBd[j];
					tp.user = usersAlumno[i].email;
					arrayTps.push(tp);
				}
			}
			res.json(arrayTps);
			break;
	}

})

app.post('/verMjes', function (req, res) {
	var mje = {};
	var arrayMaterias = [];
	var email = req.body.profe.email;
	var materia = req.body.materia;

	for (var i = 0; i < usersProfesor.length; i++) {
		if (usersProfesor[i].email === email) {
			for (var j = 0; j < usersProfesor[i].materias.length; j++) {
				switch (materia) {
					case "Gestión de Datos":
						if (usersProfesor[i].materias[j].name === "gda") {
							for (let k = 0; k < usersProfesor[i].materias[j].mjes.length; k++) {
								mje.fecha = usersProfesor[i].materias[j].mjes[k].fecha;
								mje.contenido = usersProfesor[i].materias[j].mjes[k].contenido;
								arrayMaterias.push(mje);

							}
						}
						break;

					case "Base de Datos":
						if (usersProfesor[i].materias[j].name === "bd") {
							for (let k = 0; k < usersProfesor[i].materias[j].mjes.length; k++) {
								mje.fecha = usersProfesor[i].materias[j].mjes[k].fecha;
								mje.contenido = usersProfesor[i].materias[j].mjes[k].contenido;
								arrayMaterias.push(mje);

							}
						}
						break;

					case "Lab. Hardware":
						if (usersProfesor[i].materias[j].name === "laboratorio") {
							for (let k = 0; k < usersProfesor[i].materias[j].mjes.length; k++) {
								mje.fecha = usersProfesor[i].materias[j].mjes[k].fecha;
								mje.contenido = usersProfesor[i].materias[j].mjes[k].contenido;
								arrayMaterias.push(mje);

							}
						}
						break;

					case "Sist. y Org.":
						if (usersProfesor[i].materias[j].name === "sor") {
							for (let k = 0; k < usersProfesor[i].materias[j].mjes.length; k++) {
								mje.fecha = usersProfesor[i].materias[j].mjes[k].fecha;
								mje.contenido = usersProfesor[i].materias[j].mjes[k].contenido;
								arrayMaterias.push(mje);

							}
						}
						break;
				}
			}
		}
	}
	res.json(arrayMaterias)
})

app.post('/sendFile', function (req, res) {
	var contenido = req.body.comunicado.mensaje;
	var remitente = req.body.comunicado.remitente;
	var destinatario = req.body.comunicado.destinatario;
	var fecha = req.body.comunicado.fecha;
	var mje = {};

	for (var i = 0; i < usersProfesor.length; i++) {
		if (usersProfesor[i].email === remitente) {
			for (var j = 0; j < usersProfesor[i].materias.length; j++) {
				switch (destinatario) {
					case "Gestión de Datos":
						if (usersProfesor[i].materias[j].name === "gda") {
							mje.fecha = fecha;
							mje.contenido = contenido;
							usersProfesor[i].materias[j].mjes.push(mje)
							res.json(usersProfesor[i].materias[j].mjes)
						}
						break;

					case "Base de Datos":
						if (usersProfesor[i].materias[j].name === "bd") {
							mje.fecha = fecha;
							mje.contenido = contenido;
							usersProfesor[i].materias[j].mjes.push(mje)
							res.json(usersProfesor[i].materias[j].mjes)
						}
						break;

					case "Lab. Hardware":
						if (usersProfesor[i].materias[j].name === "laboratorio") {
							mje.fecha = fecha;
							mje.contenido = contenido;
							usersProfesor[i].materias[j].mjes.push(mje)
							res.json(usersProfesor[i].materias[j].mjes)
						}
						break;

					case "Sist. y Org.":
						if (usersProfesor[i].materias[j].name === "sor") {
							mje.fecha = fecha;
							mje.contenido = contenido;
							usersProfesor[i].materias[j].mjes.push(mje)
							res.json(usersProfesor[i].materias[j].mjes)
						}
						break;
				}
			}
		}
	}
})

app.post('/verMjesAlumno', function (req, res) {
	var materia = req.body.materia;
	var arrayMjes = [];
	for (var i = 0; i < usersProfesor.length; i++) {
		for (var j = 0; j < usersProfesor[i].materias.length; j++) {
			if (usersProfesor[i].materias[j].name === materia) {
				arrayMjes = usersProfesor[i].materias[j].mjes;
				res.json(arrayMjes);
				break;
			}
		}

	}
})

//dataBase
const usersProfesor = [
	{
		name: 'Federico Exequiel',
		lastName: 'Luque',
		email: 'federico.luquee@gmail.com',
		password: '7777',
		sexo: 'Masculino',
		dni: '35530738',
		isAlumno: false,
		materias: [
			{
				name: "gda",
				tps: [],
				mjes: [
					{
						fecha: "15/10/2018",
						contenido: "Hola chicos, como andan?"
					},
					{
						fecha: "02/11/2018",
						contenido: "Mañana no hay clases"
					}
				]
			},
			{
				name: "bd",
				tps: [],
				mjes: [
					{
						fecha: "15/09/2018",
						contenido: "Hola chicos, mañana prueba"
					},
					{
						fecha: "12/11/2018",
						contenido: "Mañana lleven la calculadora"
					}
				]
			}
		]
	},
	{
		name: 'Emilia Gabriela',
		lastName: 'Centeno',
		email: 'egcenteno@gmail.com',
		password: '8888',
		sexo: 'Femenino',
		dni: '33654783',
		isAlumno: false,
		materias: [
			{
				name: "sor",
				tps: [],
				mjes: [
					{
						fecha: "05/07/2018",
						contenido: "Chicos, acuerdense del TP para mañana!"
					},
					{
						fecha: "02/10/2018",
						contenido: "Mañana no me adhiero al paro"
					}
				]
			},
			{
				name: "laboratorio",
				tps: [],
				mjes: [
					{
						fecha: "03/09/2018",
						contenido: "Mañana tenemos un taller sobre adicciones"
					},
					{
						fecha: "12/11/2018",
						contenido: "El viernes llego 1 hs mas tarde"
					}
				]
			}
		]
	}
]
const usersAlumno = [
	{
		name: 'Juan Alberto',
		lastName: 'Gómez',
		email: 'jagomez@gmail.com',
		password: '1234',
		sexo: 'Masculino',
		dni: '44567334',
		isAlumno: true,
		curso: '5C',
		materiaGda: [
			{
				id: 1,
				nombreArchivo: 'seguridadInformatica.pdf',
				fecha: '12/10/2018',
				estado: 'Aprobado'
			},
			{
				id: 2,
				nombreArchivo: 'Virus.pdf',
				fecha: '07/11/2018',
				estado: 'Pendiente'
			}
		],
		materiaLab: [
			{
				id: 1,
				nombreArchivo: 'Perifericos.pdf',
				fecha: '02/07/2018',
				estado: 'Aprobado'
			}
		],
		materiaSor: [
			{
				id: 1,
				nombreArchivo: 'sistemas.pdf',
				fecha: '01/06/2018',
				estado: 'Aprobado'
			},
			{
				id: 2,
				nombreArchivo: 'Organizaciones.pdf',
				fecha: '07/11/2018',
				estado: 'Pendiente'
			}
		],
		materiaBd: [
			{
				id: 1,
				nombreArchivo: 'tablas.pdf',
				fecha: '04/07/2018',
				estado: 'Aprobado'
			},
			{
				id: 2,
				nombreArchivo: 'bd.pdf',
				fecha: '17/10/2018',
				estado: 'Pendiente'
			},
			{
				id: 3,
				nombreArchivo: 'Sql.pdf',
				fecha: '07/11/2018',
				estado: 'Pendiente'
			}
		]
	},
	{
		name: 'Carla Gabriela',
		lastName: 'Flores',
		email: 'cgflores@gmail.com',
		password: '2222',
		sexo: 'Femenino',
		dni: '42237735',
		isAlumno: true,
		curso: '5C',
		materiaGda: [
			{
				id: 1,
				nombreArchivo: 'ProteccionDeDatos.pdf',
				fecha: '12/10/2018',
				estado: 'Aprobado'
			},
			{
				id: 2,
				nombreArchivo: 'EncriptacionDatos.pdf',
				fecha: '07/11/2018',
				estado: 'Pendiente'
			}

		],
		materiaLab: [
			{
				id: 1,
				nombreArchivo: 'Monitores.pdf',
				fecha: '02/07/2018',
				estado: 'Aprobado'
			},
			{
				id: 2,
				nombreArchivo: 'impresoras.pdf',
				fecha: '09/09/2018',
				estado: 'Aprobado'
			}
		],
		materiaSor: [
			{
				id: 1,
				nombreArchivo: 'empresas.pdf',
				fecha: '01/06/2018',
				estado: 'Aprobado'
			}
		],
		materiaBd: [
			{
				id: 1,
				nombreArchivo: 'Introduccion.pdf',
				fecha: '04/07/2018',
				estado: 'Aprobado'
			},
			{
				id: 2,
				nombreArchivo: 'TPIntegrador.pdf',
				fecha: '17/10/2018',
				estado: 'Pendiente'
			},
			{
				id: 3,
				nombreArchivo: 'SqlServer.pdf',
				fecha: '07/11/2018',
				estado: 'Pendiente'
			}
		]
	}
];

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})