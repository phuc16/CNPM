var mysql = require('mysql2');

var dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "anhentai",
    database: "db"
});

dbConn.connect();

module.exports = dbConn;