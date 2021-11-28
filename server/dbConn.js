var mysql = require('mysql2');

var dbConn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "26122001",
    database: "db",
    port: "3306",
    dateStrings: true
});

dbConn.connect();
module.exports = dbConn;