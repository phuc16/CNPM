var mysql = require('mysql2');

var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anhentai',
    database: 'pos_db'
});

dbConn.connect();

module.exports = dbConn;