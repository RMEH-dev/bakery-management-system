const db = require("../../config/databaseConnection");

const getRawStockUsage = (id, callback) => {
    const sqlGetRawStockUsageDetails = ` SELECT r.rawStockName, ru.rawStockID, p.proStockName, ru.proStockID
    FROM rawstockusage ru
    JOIN producedstock p ON ru.proStockID = p.proStockID
    JOIN rawstock r ON ru.rawStockID = r.rawStockID
    WHERE ru.rawStockUsageID = ?`;
    db.query(sqlGetRawStockUsageDetails, [id], callback);
  };

// const insertRawStockUsageTable = (values, callback) => {
//     const sqlInsertRawStockUsageTable = 'INSERT INTO rawstockusage (rawStockID, category, packageAmount, supplier) VALUES (?, ?, ?, ?)';
//     db.query(sqlInsertRawStockUsageTable, values, callback);
//   };
  
  

  module.exports = { getRawStockUsage };