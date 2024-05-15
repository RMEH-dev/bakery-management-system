const db = require("../../config/databaseConnection");

const insertRawStock = (values, callback) => {
    const sqlInsertRawStock = 'INSERT INTO rawstock (rawStockID, rawStockName, rawStockQuantity, rawManuDate, rawExpDate) VALUES (?, ?, ?, ?, ?)';
    db.query(sqlInsertRawStock, values, callback);
  };
  
module.exports = { insertRawStock };

const rawStock = (values, callback) => {
  const sqlGetRawStockDetails = `SELECT rawStockName, rawStockID, DATE_FORMAT(rawManuDate, '%Y-%m-%d') AS rawManuDate , DATE_FORMAT(rawExpDate, '%Y-%m-%d') AS rawExpDate, rawStockQuantity FROM rawStock`;
  db.query(sqlGetRawStockDetails, values, callback);
};

module.exports = { rawStock };