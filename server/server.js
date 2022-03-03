const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "abcd",
  database: "employeesystem",
});

app.post("/postImages", (req, res) => {
  const img1 = req.body.imagee1;

  db.query("INSERT INTO images(imagee1) VALUES (?)", [img1], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Images inserted");
    }
  });
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
