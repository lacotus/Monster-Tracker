import mysql from "mysql2"

// Database connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'cotus',
	password: 'km051818',
	database: 'MonsterTrackerDB'
});

export default db;

