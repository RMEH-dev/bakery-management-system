const db = require("../../config/databaseConnection");

const insertRawStock = (values, callback) => {
    const sqlInsertRawStock = 'INSERT INTO rawstock (rawStockID, rawStockName, rawStockQuantity, rawManuDate, rawExpDate) VALUES (?, ?, ?, ?, ?)';
    db.query(sqlInsertRawStock, values, callback);
  };
  


const rawStock = (values, callback) => {
  const sqlGetRawStockDetails = `SELECT r.rawStockName, r.rawStockID, DATE_FORMAT(r.rawManuDate, '%Y-%m-%d') AS rawManuDate , DATE_FORMAT(r.rawExpDate, '%Y-%m-%d') AS rawExpDate, r.rawStockQuantity, i.supplier, i.category, i.packageAmount FROM rawStock r JOIN rawitemdetails i ON r.rawStockID = i.rawStockID`;
  db.query(sqlGetRawStockDetails, values, callback);
};

const getEditRawStock = (id, callback) => {
  const sqlGetRawStockDetails = `SELECT r.rawStockName, r.rawStockID, DATE_FORMAT(r.rawManuDate, '%Y-%m-%d') AS rawManuDate , DATE_FORMAT(r.rawExpDate, '%Y-%m-%d') AS rawExpDate, r.rawStockQuantity, i.supplier, i.category, i.packageAmount FROM rawStock r JOIN rawitemdetails i ON r.rawStockID = i.rawStockID WHERE r.rawStockID = ?`;
  db.query(sqlGetRawStockDetails, [id], callback);
};

module.exports = { rawStock, insertRawStock, getEditRawStock};