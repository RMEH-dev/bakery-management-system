const db = require("../../config/databaseConnection");

const insertRawStock = (values, callback) => {
    const sqlInsertRawStock = 'INSERT INTO rawstock (rawStockID, rawStockName, rawStockQuantity, rawManuDate, rawExpDate) VALUES (?, ?, ?, ?, ?)';
    db.query(sqlInsertRawStock, values, callback);
  };
  
module.exports = { insertRawStock };