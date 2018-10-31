var express = require('express')
var app = express()
var path = require('path')
var bodyParser = require('body-parser')

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true}))

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

app.get('/curso', function (req, res) {
	res.sendFile(path.join(__dirname, '/views/curso.html'))
})

app.post('/register', function (req, res) {
	//console.log(req.body.user);
	users.push(req.body.user)
	console.log(users)
	res.json({ status: 200 }) // deberia devolver 400 si da algun error
})



const sendFile = [
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

app.listen(3000, function () {
	console.log('Example app listening on port 3000!')
})