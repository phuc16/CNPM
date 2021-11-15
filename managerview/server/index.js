const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json({extended: true}));

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "db",
    dateStrings: true
  });

app.get('/', (req, res)=>{
    res.send('manager view page');
})

app.get('/api/statistics', (req, res) => {
    const query = `SELECT p.OrderID,  o.TableNo, p.PaymentType, p.TotalCost, p.PaymentDate
                   FROM rpayment as p, rorder as o
                   WHERE p.OrderID = o.OrderID`
    db.query(query, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log('Send all statistics');
      }
    });
  });

app.get('/api/details', (req,res ) => {
  const id_order = req.query.OrderID;
  const query = `SELECT p.Name, c.Quantity, FORMAT((p.Price * c.Quantity),2) AS Cost
                FROM rproduct as p, cart as c
                WHERE p.ProductID = c.ProductID AND OrderID = ?; `
  db.query(query, [id_order], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log('Send detail information');
    }
  });
})

const port = 3001;

app.listen(port, ()=>{
    console.log(`On port ${port}`);
})