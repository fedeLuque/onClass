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

app.get('/forgot', function(req, res) {
	res.sendFile(path.join(__dirname, '/views/forgot.html'))
})

app.get('/home', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/home.html'))
})

app.get('/curso/:materia', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/curso.html'))
})

app.get('/getFiles', function (req, res) {
	res.json(sendFile);
})

app.post('/getInfo', function (req, res) {
	var dniDueño = '44567334';
	console.log(req.body.dni)
	console.log(dniDueño)
	var x = req.body.materia;

	switch (x) {
		case "gda":
			var arregloGda = [];
			for (var i = 0; i < materiaGda.files.length; i++) {
				if (materiaGda.files[i].dniAlumno.toString() === dniDueño) {
					arregloGda.push(materiaGda.files[i]);
					console.log(arregloGda);
				}
			}
			res.json(arregloGda);



		case "laboratorio":
			res.json(materiaLab);
			break;

		case "sor":
			res.json(materiaSor);
			break;

		case "bd":
			res.json(materiaBd);
			break;

		default:
			// alert ("error");
			break;
	}
})

app.post('/register', function (req, res) {
	//console.log(req.body.user);
	usersAlumno.push(req.body.user)
	console.log(usersAlumno)
	res.json({ status: 200 }) // deberia devolver 400 si da algun error
})

app.post('/login', function (req, res) {
	console.log(req.body);
	var alumno = {};
	for (var i = 0; i < usersAlumno.length; i++) {
		if (usersAlumno[i].email == req.body.userName) {
			alumno = usersAlumno[i];
			res.json(alumno)
			break;
		} else {
			console.log("no hay coincidencia")
			res.json(alumno)
		}
	}
	
})

app.post('/addFile', function (req, res) {
	var x = req.body.materia;
	switch (x) {
		case "gda":
			materiaGda.files.push(req.body.fileTp);
			console.log(materiaGda);
			res.json(materiaGda);
			break;

		case "laboratorio":
			materiaLab.files.push(req.body.fileTp);
			console.log(materiaLab);
			res.json(materiaLab);
			break;

		case "sor":
			materiaSor.files.push(req.body.fileTp);
			console.log(materiaSor);
			res.json(materiaSor);
			break;

		case "bd":
			materiaBd.files.push(req.body.fileTp);
			console.log(materiaBd);
			res.json(materiaBd);
			break;

		default:
			// alert ("error");
			break;
	}


})

//dataBase
const usersAlumno = [
	{
		name: 'Juan Alberto',
		lastName: 'Gómez',
		email: 'jagomez@gmail.com',
		password: '1234',
		sexo: 'Masculino',
		dni: '44567334',
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

// var materiaLab = {
// 	titulo: "Lab. de Hardware",
// 	files: [
// 		{
// 			id: 1,
// 			nombreArchivo: 'tp1_memoria.pdf',
// 			fecha: '03/06/2018',
// 			estado: 'Aprobado',
// 			dniAlumno: '44567334'

// 		},
// 		{
// 			id: 2,
// 			nombreArchivo: 'tp2_disco.pdf',
// 			fecha: '07/08/2018',
// 			estado: 'Aprobado',
// 			dniAlumno: '44567334'
// 		},
// 		{
// 			id: 3,
// 			nombreArchivo: 'tp3_perifericos.pdf',
// 			fecha: '13/10/2018',
// 			estado: 'Pendiente',
// 			dniAlumno: '42237735'

// 		}
// 	]
// }

// var materiaGda = {
// 	titulo: "Gestión de Datos",
// 	files: [
// 		{
// 			id: 1,
// 			nombreArchivo: 'tp1_virus.pdf',
// 			fecha: '12/09/2018',
// 			estado: 'Pendiente',
// 			dniAlumno: '42237735'

// 		},
// 		{
// 			id: 2,
// 			nombreArchivo: 'tp2_Antivirus.pdf',
// 			fecha: '19/09/2018',
// 			estado: 'Pendiente',
// 			dniAlumno: '42237735'
// 		},
// 	]
// }

// var materiaSor = {
// 	titulo: "Sistemas y Organizaciónes",
// 	files: [
// 		{
// 			id: 1,
// 			nombreArchivo: 'tp1_sistemas.pdf',
// 			fecha: '11/04/2018',
// 			estado: 'Aprobado',
// 			dniAlumno: '44567334'

// 		},
// 		{
// 			id: 2,
// 			nombreArchivo: 'tp2_Organizaciones.pdf',
// 			fecha: '12/06/2018',
// 			estado: 'Pendiente',
// 			dniAlumno: '44567334'
// 		}
// 	]
// }

// var materiaBd = {
// 	titulo: "Base de Datos",
// 	files: [
// 		{
// 			id: 1,
// 			nombreArchivo: 'tp1_tablas.pdf',
// 			fecha: '12/09/2018',
// 			estado: 'Aprobado',
// 			dniAlumno: '44567334'

// 		},
// 		{
// 			id: 2,
// 			nombreArchivo: 'tp2_consultas.pdf',
// 			fecha: '19/09/2018',
// 			estado: 'Aprobado',
// 			dniAlumno: '42237735'
// 		},
// 		{
// 			id: 3,
// 			nombreArchivo: 'tp3_consultasII.pdf',
// 			fecha: '25/10/2018',
// 			estado: 'Aprobado',
// 			dniAlumno: '42237735'
// 		},
// 		{
// 			id: 4,
// 			nombreArchivo: 'tp4_consultasIII.pdf',
// 			fecha: '04/11/2018',
// 			estado: 'Pendiente',
// 			dniAlumno: '42237735'
// 		}
// 	]
// }

// const sendFile = [
// 	{
// 		id: 1,
// 		nombreArchivo: 'tp1_memoria.pdf',
// 		fecha: '12/09/2018',
// 		estado: 'Pendiente'
// 	},
// 	{
// 		id: 2,
// 		nombreArchivo: 'tp2_disco.pdf',
// 		fecha: '19/09/2018',
// 		estado: 'Pendiente'
// 	},
// 	{
// 		id: 3,
// 		nombreArchivo: 'tp3_seguridadInformatica.pdf',
// 		fecha: '12/10/2018',
// 		estado: 'Aprobado'
// 	}
// ]



app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})