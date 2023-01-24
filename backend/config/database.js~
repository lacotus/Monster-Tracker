const mysql = require('mysql')

const connection = mysql.createPool({
	connectionLimit: 10,
	acquireTimeout: 10000,
	host: 'localhost',
	user: 'cotus',
	password: 'km051818',
	database: 'MonsterTrackerDB',
});


console.log('made it this far');

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
	console.log('into the function');
	if (err) throw err;

	console.log('The solution is: ', rows[0].solution);
});

console.log('past the function');

exports.connection = connection;

process.on('uncaughtException', function (err) {
	console.log(err);
});

