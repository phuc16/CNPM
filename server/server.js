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

// Customer Query
app.get('/customer/get/products', (req, res) => {
    dbConn.query('SELECT * FROM RProduct', (error, results, fields) => res.send({ results: results }));
});

app.post('/customer/post/payment', async (req, res) => {
  const items = req.body.items;
  try{
    await dbConn.promise().query(`INSERT INTO rorder 
                    SET TableNo = (SELECT TableNo FROM rtable WHERE TableNo = ${items.TableNo}),
                        OrderStatus = 1,
                        TotalCost = ${items.totalCost};`);
  }
  catch(error){
      return res.send('Invalid Table');
  }
  for (product of items.cartItems){
    dbConn.query(`INSERT INTO cart  
                  SET ProductID = (SELECT ProductID FROM rproduct WHERE ProductID = ${product.ProductID}),
                  OrderID = LAST_INSERT_ID(),
                  Price = ${product.Price},
                  Quantity = ${product.quantity};`);
  }
  console.log(items.PaymentMethod);
  // Physical
  if(items.PaymentMethod === 0){
    dbConn.query(`INSERT INTO rpayment 
                SET OrderID = (SELECT OrderID FROM rorder WHERE OrderID = LAST_INSERT_ID()),
                TotalCost = ${items.totalCost},
                PaymentStatus = 1,
                PaymentType = ${items.PaymentMethod},
                PaymentDate = '${items.PaymentDate}';`);
  }
  // Online
  else{
    dbConn.query(`INSERT INTO rpayment 
                SET OrderID = (SELECT OrderID FROM rorder WHERE OrderID = LAST_INSERT_ID()),
                TotalCost = ${items.totalCost},
                PaymentStatus = 0,
                PaymentType = ${items.PaymentMethod},
                PaymentDate = '${items.PaymentDate}';`);
  }
});

// Receptionist Query
app.get("/receptionist/get", (req,res) => {
  const sqlSelect = "SELECT * FROM rtable ORDER BY TableNo";
  dbConn.query(sqlSelect, (err, result) => {
      if(err) console.log(err);
      else res.send(result);
  })
});
  
app.put("/receptionist/update", (req,res) => {
    const tableNo = req.body.TableNo;
    const tableStatus = req.body.TableStatus;
    const sqlUpdate = "UPDATE rtable SET TableStatus = ? WHERE TableNo = ?";
    dbConn.query(sqlUpdate, [tableStatus, tableNo], (err, result) => {
        if(err) console.log(err);
    })
});

//Clerk Query
app.post("/clerk/updateorder", (req, res) => {
  const orderId = req.body.orderId;
  dbConn.query(
    "UPDATE rorder SET OrderStatus = 0 WHERE OrderID = ?",
    [orderId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values updated");
      }
    }
  );
});
  
app.post("/clerk/updatepayment", (req, res) => {
    const paymentId = req.body.paymentId;
    dbConn.query(
        "UPDATE rpayment SET PaymentStatus = 0 WHERE OrderID = ?",
        [paymentId],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values updated");
            }
        }
    );
});
  
app.get("/clerk/order", (req, res) => {
    dbConn.query(
      "SELECT db.rorder.OrderID, TableNo, PaymentDate AS OrderDate, db.rorder.TotalCost FROM (db.rorder JOIN db.rpayment ON db.rorder.OrderID = db.rpayment.OrderID) WHERE OrderStatus = 1",
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      }
    );
});
  
app.get("/clerk/payment", (req, res) => {
  dbConn.query(
    "SELECT db.rpayment.PaymentID, TableNo, PaymentDate, db.rpayment.TotalCost FROM (db.rorder JOIN db.rpayment ON db.rorder.OrderID = db.rpayment.OrderID) WHERE PaymentStatus = 1",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
  
app.post("/clerk/order/detail", (req, res) => {
  const orderId = req.body.orderId;
  dbConn.query(
    "SELECT db.rorder.OrderID, TableNo, PaymentDate AS OrderDate, db.rproduct.Name, ImgLink, db.rproduct.Price AS PricePerUnit, Quantity FROM (((db.rorder JOIN db.rpayment ON db.rorder.OrderID = db.rpayment.OrderID) JOIN db.cart ON db.rorder.OrderID = db.cart.OrderID) JOIN db.rproduct ON db.cart.ProductID = db.rproduct.ProductID) WHERE db.rorder.OrderID = ?",
    [orderId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
  
app.post("/clerk/payment/detail", (req, res) => {
  const paymentId = req.body.paymentId;
  dbConn.query(
    "SELECT db.rpayment.PaymentID, TableNo, PaymentDate, db.rproduct.Name, db.rproduct.Price AS PricePerUnit, Quantity FROM (((db.rorder JOIN db.rpayment ON db.rorder.OrderID = db.rpayment.OrderID) JOIN db.cart ON db.rorder.OrderID = db.cart.OrderID) JOIN db.rproduct ON db.cart.ProductID = db.rproduct.ProductID) WHERE db.rpayment.PaymentID = ?",
    [paymentId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

// Manager Query
app.get('/manager/statistics', (req, res) => {
  const query = `SELECT p.OrderID,  o.TableNo, p.PaymentType, p.TotalCost, p.PaymentDate
                 FROM rpayment as p, rorder as o
                 WHERE p.OrderID = o.OrderID`
  dbConn.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log('Send all statistics');
    }
  });
});

app.get('/manager/statistics/details', (req,res) => {
  const id_order = req.query.OrderID;
  const query = `SELECT p.Name, c.Quantity, FORMAT((c.Price * c.Quantity),2) AS Cost
              FROM rproduct as p, cart as c
              WHERE p.ProductID = c.ProductID AND OrderID = ?; `
  dbConn.query(query, [id_order], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log('Send detail information');
    }
  });
})

app.listen(3001, () => {
  console.log('Node app is running on port 3001');
});
module.exports = app;