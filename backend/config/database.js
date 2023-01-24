const mysql = require('mysql')

console.log('--Pre connection creation--');

var con = mysql.createConnection({
	connectionLimit: 10,
	acquireTimeout: 10000,
	host: 'localhost',
	user: 'cotus',
	password: 'km051818',
	database: 'MonsterTrackerDB',
});

console.log('--Post connection creation, pre connection--');

con.connect(function(err) {
	if (err) throw err;
	console.log('--into the function--');
})

console.log('made it this far');

con.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
	console.log('into the function');
	
	if (err) throw err;
	console.log('Connected!');
});

console.log('past the function');

exports.connection = con;

process.on('uncaughtException', function (err) {
	console.log(err);
});

