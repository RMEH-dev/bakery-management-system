const db = require("../../config/databaseConnection");
const generateProStockID = require('../helpers/generateProStockID');
const generateProBatchNo = require('../helpers/generateProBatchNo')
const { getProStockDetails } = require('../models/proStockModel');
const { insertProStock} = require('../models/proStockModel');
const { insertProItemDetails } = require('../models/proItemDetailsModel');

// Define a route to fetch raw stock data
exports.getProStockInfo = (req, res) => {
  getProStockDetails((error, results) => {
    if (error) {
        console.error('Fetching ProStockDetails from the database:', error)
      return res.status(500).json({ error: 'Database query error' });
    }
    res.json(results);
  });
};
exports.addProStock = async (req, res) => {
    const { proStockName, manufactureDate, expirationDate, quantity, pricePerItem, category, subCategory } = req.body;
    
    try {
        // Generate new ProStockID
        const newProStockID = await new Promise((resolve, reject) => {
            generateProStockID((err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });

        // Generate new ProBatchNo
        const newProBatchNo = await new Promise((resolve, reject) => {
            generateProBatchNo((err, result) => {
                if (err) reject(err);
                else resolve(result);
            });
        });

        // Insert into ProStock table
        const proStockValues = [newProStockID, proStockName, quantity, manufactureDate, expirationDate];
        await insertProStock(proStockValues);

        // Insert into ProItemDetails table
        const proItemDetailsValues = [newProStockID, newProBatchNo, category, subCategory, pricePerItem];
        await insertProItemDetails(proItemDetailsValues);

        res.status(200).json({ message: 'Produced stock added successfully', proStockID: newProStockID, proBatchNo: newProBatchNo });
    } catch (err) {
        console.error('Error adding produced stock:', err);
        res.status(500).json({ error: 'Database error' });
    }
};