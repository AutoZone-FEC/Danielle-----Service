var mysql = require('mysql')

var db = mysql.createConnection({
  // host: 'localhost',
  host: '35.202.114.198',
  user: 'root',
  password: 'password',
  database: 'navbar'
})

db.connect();


module.exports = db;

