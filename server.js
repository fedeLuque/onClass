var express = require('express')
var app = express()
var path = require('path')

app.use(express.static('public'));

app.get('/', function (req, res) {
	res.sendFile (path.join(__dirname, '/views/login.html'))
})

app.get('/register', function (req, res) {
	res.sendFile (path.join(__dirname, '/views/register.html'))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})