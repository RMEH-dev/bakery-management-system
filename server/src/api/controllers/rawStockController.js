const express = require("express"); //instance of express library created
const cors = require("cors");
const db = require("../models/databaseConnection");



const app = express();
app.use(cors());
app.use(express.json());


// Define a route to fetch raw stock data
exports.rawStock = async (req, res) => {
    try {
      const [rows, fields] = db.query("SELECT rawStockName, rawStockID, rawManuDate, rawExpDate, rawStockQuantity FROM rawstock");
      if (rows === null || rows === undefined || !Array.isArray(rows)) {
        console.error("Unexpected result from database query:", rows);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log(rows);
      res.json(rows);
    } catch (error) {
      console.error('Error fetching data from database:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };