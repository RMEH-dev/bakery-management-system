const db = require("../../config/databaseConnection");

const insertProStock = (values, callback) => {
    const sqlInsertProStock = 'INSERT INTO producedstock (proStockID, proStockName, proStockQuantity, proManuDate, proExpDate) VALUES (?, ?, ?, ?, ?)';
    db.query(sqlInsertProStock, values, callback);
  };
  
const getProStockDetails = (values, callback) => {
    const sqlGetProItemDetails = `SELECT p.proStockName,  p.proStockQuantity, DATE_FORMAT(p.proManuDate, '%Y-%m-%d') AS proManuDate, DATE_FORMAT(p.proExpDate, '%Y-%m-%d') AS proExpDate, i.proBatchNo, i.category, i.subCategory, i.pricePerItem FROM producedstock p JOIN proitemdetails i ON p.proStockID = i.proStockID`;
    db.query(sqlGetProItemDetails, values, callback);
};

module.exports = { getProStockDetails,  insertProStock};