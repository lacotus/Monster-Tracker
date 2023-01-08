const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',
	user: 'cotus',
	password: 'km051818',
	database: 'MonsterTrackerDB'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
	if (err) throw err;

	console.log('The solution is: ', rows[0].solution);
});

exports.connection = connection;

