const db = require("../../config/databaseConnection");

const insertProItemDetails = (values, callback) => {
  const sqlInsertProItemDetails = 'INSERT INTO proitemdetails (proBatchNo, category, subCategory, pricePerItem) VALUES (?, ?, ?, ?)';
  db.query(sqlInsertProItemDetails, values, callback);
};

module.exports = { insertProItemDetails };
