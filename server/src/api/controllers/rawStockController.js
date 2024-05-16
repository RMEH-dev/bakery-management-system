
const generateRawStockID = require('../helpers/generateRawStockID');
const { insertRawStock, getEditRawStock } = require('../models/rawStockModel');
const {rawStock} = require('../models/rawStockModel');
const { insertRawItemDetails } = require('../models/rawItemDetailsModel');

// Define a route to fetch raw stock data
exports.rawStock = (req, res) => {
  rawStock((error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(results);
  });
};

// Route to handle adding raw inventory


exports.addRawStock = (req, res) => {
  const { rawStockName, manufactureDate, expirationDate, category, packageAmount, quantity, supplier } = req.body;

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

      const valuesRawItemDetails = [newRawStockID, category, packageAmount, supplier];

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

//fetching the raw stock using rawStockID
exports.getRawStock = (req, res) => {
  const id = req.params.rawStockID;
  getEditRawStock(id, (error, results) => {
    if (error) {
      return res.status(500).json({ error: 'Database query error' });
    }
    if (results.length === 0){
      return res.status(404).json({error: "Raw Stock Not Found"});
    }
    res.json(results[0]);
  });
  // res.json(rawStock);
}

//Updating the raw stock using rawStockID
exports.updateRawStock = (req, res) => {
  const id = req.params.rawStockID;
  const updatedData = req.body;
  // res.json(updatedRawStock);
}
