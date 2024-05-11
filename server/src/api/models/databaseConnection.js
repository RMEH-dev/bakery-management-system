const mysql = require("mysql"); //instance of mysql library created
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error("error connecting to MySQL database", err);
    throw err;
  } else {
    console.log("connected to MySQL database");
  }
});

module.exports = db;
