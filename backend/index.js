// imports, express cors and router
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes/routes.js')
const morgan = require('morgan')

// init express
const app = express();

// Setup app to use certain modules
app.use(morgan('combined')); // Morgan, used for logging
app.use(bodyParser.json()); // body-parser, used for reading json data
app.use(cors()); // cors, allows client access
app.use(routes.router); // This is my own custom router

app.get('/status', (req, res) => {
	res.send({
		message: 'hello world!'
	})
});

app.listen(3306, function () { console.log('Server running at http://localhost:3306') });

process.on('uncaughtException', function (err) {
	console.log(err);
});

