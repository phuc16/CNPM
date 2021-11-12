var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var dbConn = require('./dbConn')

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

app.get('/get/products', function(req, res){
    dbConn.query('SELECT * FROM RProduct', function (error, results, fields) {
        if (error) throw error;
        return res.send({results: results});
    });
});

app.post('/post/order', function (req, res) {
    const items = req.body.items;
    dbConn.query(`INSERT INTO ROrder(TableNo, OrderStatus) values(${items.tableId}, 1);`);  
    dbConn.query(`call countOrder();`, function (error, results, fields){
        for (product of items.cartItems){
            dbConn.query(`INSERT INTO cart (OrderID, id, quantity, priceThisTimePU) values (${results[0][0].count}, ${product.id}, ${product.quantity}, ${product.pricePU});`);
        }
        if (error) throw error;
        return res.send({results: results[0][0].count});
    });
});

app.post('/post/payment', function (req, res) {
    const items = req.body.items;
    dbConn.query(`INSERT INTO RPayment(OrderID, TotalCost, PaymentStatus, PaymentType, DateTimeInit) values (${items.id}, ${items.totalCost}, 1, ${items.PaymentMethod}, '${items.dateTimeInit}');`, function (error, results, fields){
        return res.send({results: results});
    });
});

app.listen(3001, function () {
    console.log('Node app is running on port 3001');
});
module.exports = app;