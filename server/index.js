const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const mime = require("mime");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "abcd",
  database: "employeesystem",
});

// Inventory category
app.post("/createCategory", (req, res) => {
  console.log(req.body);
  const category = req.body.category;
  const date = req.body.date;
  const time = req.body.time;

  db.query(
    "INSERT INTO Inventory_category (inventory_category,date,time) VALUES (?,?,?)",
    [category, date, time],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

// posting location
app.post("/postingLocation", (req, res) => {
  console.log(req.body.locname);
  const loc_name = req.body.locname;

  db.query(
    "INSERT INTO posting_location (loc_name) VALUES (?)",
    [loc_name],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

// getting item names
app.get("/getItem", (req, res) => {
  db.query("Select * from itemlist", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// getting location names
app.get("/getLocation", (req, res) => {
  db.query("Select * from mylocation", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// getting inventory categories to display on categories page
app.get("/getCategories", (req, res) => {
  db.query("Select * from inventory_category", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/addmom", (req, res) => {
  const quantity = req.body.quantity;
  const description = req.body.description;
  const itemname = req.body.itemname;
  const locname = req.body.locname;
  db.query(
    "INSERT INTO item (quantity,description,location,item_name) VALUES (?,?,?,?)",
    [quantity, description, locname, itemname],

    (err, result) => {
      if (err) {
        console.log("haahah");
        console.log(err);
      } else {
        res.send("inserting in example table ");
      }
    }
  );
});

// posting images
app.post("/postImages", (req, res) => {
  const img1 = req.body.imagee1;

  db.query(
    "INSERT INTO images (barcode_image) VALUES (?)",
    [img1],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Images inserted");
      }
    }
  );
});

// getting images
app.get("/getImages", (req, res) => {
  db.query("Select imagee1 from images", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
