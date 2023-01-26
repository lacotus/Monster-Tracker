// imports, express cors and router
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes.js')
const morgan = require('morgan')
const mysql = require('mysql2')
const db = require('./config/database')

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

app.get('/getMySqlStatus', (req, res) => {
	
	connection.ping((err) => {
		if (err) return res.status(500).send("MySQL server is down");

		res.send('MySQL server is active');
	})	
})

app.get('/api/users', (req, res) => {
	console.log('api/users called!')
	res.json(users)

	connection.query("SELECT * FROM TUsers", function (err, result, fields) {
		if (err) throw err;

		console.log("Queried results: ", result);
	})

	connection.end()
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

app.listen(3000, function () { console.log('Server running at http://localhost:3000') });


// new work space
app.get('/users', async (req, res) => {

  const results = await db.promise().query(`SELECT * FROM USERS`);
  console.log(results[0]);
  res.send(results[0]);

});

app.post('/users', (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    try {
      db.promise().query(`INSERT INTO USERS VALUES('${username}', '${password}')`);
      res.status(201).send({ msg: 'Created User' });
    } catch (err) {
      console.log(err);
    }
  }
});










process.on('uncaughtException', function (err) {
	console.log(err);
});

