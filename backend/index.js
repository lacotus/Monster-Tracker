// imports, express cors and router
const express = require('express')
const cors = require('cors')
const routes = require('./routes/routes.js')

// init express
const app = express();

// use express json
app.use(express.json());

// use cors
app.use(cors());

// use router
app.use(routes.router);

app.listen(3306, function () { console.log('Server running at http://localhost:3306') });

process.on('uncaughtException', function (err) {
	console.log(err);
});

