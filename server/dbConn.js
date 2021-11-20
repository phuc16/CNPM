var mysql = require('mysql2');

var dbConn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "anhentai",
    database: "db",
    dateStrings: true
});

dbConn.connect();
module.exports = dbConn;