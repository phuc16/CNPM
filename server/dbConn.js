var mysql = require('mysql2');

var dbConn = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "anhentai",
    database: "db",
    port: "3306",
    dateStrings: true
});

dbConn.connect();
module.exports = dbConn;