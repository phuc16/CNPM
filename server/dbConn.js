var mysql = require('mysql2');

var dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "26122001",
    database: "db",
    dateStrings: true
});

dbConn.connect();
module.exports = dbConn;