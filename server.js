var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }))

//dataBase
const users = [
	{
		name: 'Juan Alberto',
		lastName: 'Gómez',
		email: 'jagomez@gmail.com',
		password: '1234',
		sexo: 'Masculino',
		dni: '44.567.334',
		curso: '5C'
	},
	{
		name: 'Carla Gabriela',
		lastName: 'Flores',
		email: 'cgflores@gmail.com',
		password: '2222',
		sexo: 'Femenino',
		dni: '42.237.735',
		curso: '5C'
	}
];

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/login.html'))
})

app.get('/register', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/register.html'))
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
	var x = req.body.materia;

	switch (x) {
		case "gda":
			res.json(materiaGda);
			break;

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
	users.push(req.body.user)
	console.log(users)
	res.json({ status: 200 }) // deberia devolver 400 si da algun error
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

var materiaLab = {
	titulo: "Lab. de Hardware",
	files: [
		{
			id: 1,
			nombreArchivo: 'tp1_memoria.pdf',
			fecha: '03/06/2018',
			estado: 'Aprobado'

		},
		{
			id: 2,
			nombreArchivo: 'tp2_disco.pdf',
			fecha: '07/08/2018',
			estado: 'Aprobado'
		},
		{
			id: 3,
			nombreArchivo: 'tp3_perifericos.pdf',
			fecha: '13/10/2018',
			estado: 'Pendiente'
		}
	]
}

var materiaGda = {
	titulo: "Gestión de Datos",
	files: [
		{
			id: 1,
			nombreArchivo: 'tp1_memoria.pdf',
			fecha: '12/09/2018',
			estado: 'Pendiente'

		},
		{
			id: 2,
			nombreArchivo: 'tp2_disco.pdf',
			fecha: '19/09/2018',
			estado: 'Pendiente'
		},
		{
			id: 3,
			nombreArchivo: 'tp3_seguridadInformatica.pdf',
			fecha: '12/10/2018',
			estado: 'Aprobado'
		}
	]
}

var materiaSor = {
	titulo: "Sistemas y Organizaciónes",
	files: [
		{
			id: 1,
			nombreArchivo: 'tp1_sistemas.pdf',
			fecha: '11/04/2018',
			estado: 'Aprobado'

		},
		{
			id: 2,
			nombreArchivo: 'tp2_Organizaciones.pdf',
			fecha: '12/06/2018',
			estado: 'Pendiente'
		}
	]
}

var materiaBd = {
	titulo: "Base de Datos",
	files: [
		{
			id: 1,
			nombreArchivo: 'tp1_tablas.pdf',
			fecha: '12/09/2018',
			estado: 'Aprobado'

		},
		{
			id: 2,
			nombreArchivo: 'tp2_consultas.pdf',
			fecha: '19/09/2018',
			estado: 'Aprobado'
		},
		{
			id: 3,
			nombreArchivo: 'tp3_consultasII.pdf',
			fecha: '25/10/2018',
			estado: 'Aprobado'
		},
		{
			id: 4,
			nombreArchivo: 'tp4_consultasIII.pdf',
			fecha: '04/11/2018',
			estado: 'Pendiente'
		}
	]
}

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