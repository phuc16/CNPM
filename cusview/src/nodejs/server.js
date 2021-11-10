var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql2');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello' })
});
var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'anhentai',
    database: 'pos_db'
});
dbConn.connect();

app.get('/get/products', function(req, res){
    dbConn.query('SELECT * FROM RProduct', function (error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
});

app.post('/post/order', function (req, res) {
    let items = req.body.items;
    console.log(items);
    dbConn.query(`INSERT INTO ROrder(TableNo, OrderStatus) values(${items.tableId}, 1);`);  
    dbConn.query(`call countOrder();`, function (error, results, fields){
        for (product of items.cartItems){
            dbConn.query(`INSERT INTO cart (OrderID, id, quantity, pricePU) values (${results[0][0].count}, ${product.id}, ${product.quantity}, ${product.pricePU});`);
        }
    });
});

app.listen(3001, function () {
    console.log('Node app is running on port 3001');
});
module.exports = app;