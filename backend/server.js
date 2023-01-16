// imports, express cors and router
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes.js')
const morgan = require('morgan')

// init express
const app = express();

users = [
	{
		"name": "Tom",
		"username": "tommy",
		"password": "tommy"
	},
	{
		"name": "Jack",
		"username": "jass",
		"password": "jass"
	},
	{
		"name": "Michael",
		"username": "mikey",
		"password": "mikey"
	}
]

// Setup app to use certain modules
app.use(morgan('combined')); // Morgan, used for logging
app.use(bodyParser.json()); // body-parser, used for reading json data
app.use(cors()); // cors, allows client access
app.use(routes.router); // This is my own custom router

app.get('/', (req, res) => {
	res.send('hi');
})

app.get('/api/users', (req, res) => {
	console.log('api/users called!')
	res.json(users)
});

app.post('/api/user', (req, res) => {
	const user = req.body.user;
	console.log('Adding user: ', user);
	users.push(user);
	res.json("user added");
});

app.post('/register', (req, res) => {
	res.send({
		message: `Hello ${req.body.email}! Your user was registered! Have fun!`
	})
});

app.listen(3306, function () { console.log('Server running at http://localhost:3306') });

process.on('uncaughtException', function (err) {
	console.log(err);
});

