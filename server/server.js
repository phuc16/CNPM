var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var dbConn = require('./dbConn')

var allowCrossDomain = (req, res, next) => {
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

app.get('/customer/get/products', (req, res) => {
        dbConn.query('SELECT * FROM RProduct', (error, results, fields) => res.send({ results: results }));
    });

app.post('/customer/post/order', (req, res) => {
        const items = req.body.items;
        dbConn.query(`INSERT INTO rorder 
                    SET TableNo = (SELECT TableNo FROM rtable WHERE TableNo = ${items.TableNo}),
                        OrderStatus = 1,
                        TotalCost = ${items.totalCost};`);
        for (product of items.cartItems) {
            dbConn.query(`INSERT INTO cart  
                        SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = ${product.ProductID}),
                            OrderID = LAST_INSERT_ID(),
                            Price = ${product.Price},
                            Quantity = ${product.quantity};`);
        }
        dbConn.query(`SELECT LAST_INSERT_ID() as OrderID;`, (error, results, fields) => res.send({ results: results[0].OrderID }));
    });

app.post('/customer/post/payment', (req, res) => {
        const items = req.body.items;
        // console.log(items);
        dbConn.query(`INSERT INTO rpayment 
                    SET OrderID = (SELECT OrderID FROM rorder WHERE OrderID = ${items.OrderID}),
                        TotalCost = ${items.totalCost},
                        PaymentStatus = 1,
                        PaymentType = ${items.PaymentMethod},
                        PaymentDate = '${items.PaymentDate}';`,
        (error, results, fields) => res.send({ results: results }));
    });

app.listen(3001, () => {
        console.log('Node app is running on port 3001');
    });
module.exports = app;