const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "restaurant_statistics",
  });

app.get('/', (req, res)=>{
    res.send('manager view page');
})

app.get('/statistics', (req, res) => {
    db.query("SELECT * FROM statistics", (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
        console.log('Send response');
      }
    });
  });

const port = 3001;

app.listen(port, ()=>{
    console.log(`On port ${port}`);
})