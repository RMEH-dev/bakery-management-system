const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const app = express();

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

app.post("/create", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const userName = req.body.userName;
  const contact = req.body.contact;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  db.query(
    "INSERT INTO DATABASE (firstName, lastName, email, userName, contact, password, confirmPassword) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [firstName, lastName, email, userName, contact, password, confirmPassword],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("User added");
      }
    }
  );
});

app.set("view engine");

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Database Connected...");
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000, () => {
  console.log("listening on port 5000");
});
