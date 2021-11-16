const express = require("express");
const app = express();

const mysql = require("mysql");

const cors = require("cors");

app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "db",
});

app.post("/updateorder", (req, res) => {
  const orderId = req.body.orderId;
  db.query(
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

app.post("/updatepayment", (req, res) => {
  const paymentId = req.body.paymentId;
  db.query(
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

app.get("/orders", (req, res) => {
  db.query(
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

app.get("/payment", (req, res) => {
  db.query(
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

app.post("/orders/detail", (req, res) => {
  const orderId = req.body.orderId;
  db.query(
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

app.post("/payment/detail", (req, res) => {
  const paymentId = req.body.paymentId;
  db.query(
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

app.listen(3001, () => {
  console.log("Listening from server...");
});
