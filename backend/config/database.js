const mysql = require('mysql')

console.log('--Pre connection creation--');

var con = mysql.createConnection({
	host: 'localhost',
	user: 'cotus',
	password: 'km051818',
	database: 'MonsterTrackerDB'
});

console.log('--Post connection creation, pre connection--');

con.connect(function(err) {
	console.log('--into the function--');
	if (err) throw err;
	console.log('Connected!');
});

