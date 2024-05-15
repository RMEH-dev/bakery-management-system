const db = require("../../config/databaseConnection");
const generateRawStockID = require('../helpers/generateRawStockID');
const { insertRawStock } = require('../models/rawStockModel');
const { insertRawItemDetails } = require('../models/rawItemDetailsModel');

// Define a route to fetch raw stock data
exports.rawStock = (req, res) => {
  const query = 'SELECT rawStockName, rawStockID, rawManuDate, rawExpDate, rawStockQuantity FROM rawStock';
  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(results);
  });
};

// Route to handle adding raw inventory


exports.addRawStock = (req, res) => {
  const { rawStockName, manufactureDate, expirationDate, category, quantity, supplier } = req.body;

  generateRawStockID((err, newRawStockID) => {
    if (err) {
      console.error('Error generating new rawStockID:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    const valuesRawStock = [newRawStockID, rawStockName, quantity, manufactureDate, expirationDate];

    insertRawStock(valuesRawStock, (err, result) => {
      if (err) {
        console.error('Error inserting data into MySQL (rawstock):', err);
        return res.status(500).json({ error: 'Database error' });
      }

      const valuesRawItemDetails = [newRawStockID, category, supplier];

      insertRawItemDetails(valuesRawItemDetails, (err, result) => {
        if (err) {
          console.error('Error inserting data into MySQL (rawitemdetails):', err);
          return res.status(500).json({ error: 'Database error' });
        }

        res.status(200).json({ message: 'Raw stock added successfully', rawStockID: newRawStockID });
      });
    });
  });
};


