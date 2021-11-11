const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); 
const app = express();
var mysql = require('mysql2');

var db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "26122001",
  database: "db"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req,res) => {
  const sqlSelect = "SELECT * FROM rtable ORDER BY TableNo";
  db.query(sqlSelect, (err, result) => {
    if(err) console.log(err);
    else res.send(result);
  })
});

app.put("/api/update", (req,res) => {
  const tableNo = req.body.TableNo;
  const tableStatus = req.body.TableStatus;
  const sqlUpdate = "UPDATE rtable SET TableStatus = ? WHERE TableNo = ?";
  db.query(sqlUpdate, [tableStatus, tableNo], (err, result) => {
    if(err) console.log(err);
  })
});

app.listen(3003, () =>{
  console.log("running on port 3003");
})