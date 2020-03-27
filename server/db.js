var mysql = require('mysql')

var db = mysql.createConnection({
  // host: 'localhost',
  host: 'host.docker.internal',
  user: 'root',
  password: 'hratx47hratx47',
  database: 'navbar'
})

db.connect();


module.exports = db;

