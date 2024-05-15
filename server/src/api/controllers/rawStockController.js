const db = require("../models/databaseConnection");


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