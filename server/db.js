var mysql = require('mysql')

var db = mysql.createConnection({
  // host: 'localhost',
  host: 'host.docker.internal',
  user: 'root',
  password: 'password',
  database: 'navbar'
})

db.connect();


module.exports = db;

// host: 'host.docker.internal',
