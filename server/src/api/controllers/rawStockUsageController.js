const {
  getRawStockUsage,
  editRawStockUsage,
  getRawStockNameUsage,
  getRawStockIDUsage,
  getProStockNameUsage,
  getProStockIDUsage,
  addRawStockUsage,
} = require("../models/rawStockUsageModel");
const db = require("../../config/databaseConnection");

exports.editRawStockUsage = (req, res) => {
  const id = req.params.id;
  editRawStockUsage(id, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Raw Stock Usage Not Found" });
    }
    res.json(results[0]);
  });
};

exports.getRawStockNameUsage = (req, res) => {
  getRawStockNameUsage((error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
};

exports.getProStockNameUsage = (req, res) => {
  getProStockNameUsage((error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
};

exports.getProStockIDUsage = (req, res) => {
  const proStockName = req.query.proStockName;
  getProStockIDUsage(proStockName, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
};

exports.getRawStockIDUsage = (req, res) => {
  const rawStockName = req.query.rawStockName;
  getRawStockIDUsage(rawStockName, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
};

exports.addRawStockUsage = (req, res) => {
  const {
    thresholdQuantity,
    rawStockID,
    proStockID,
  } = req.body;

  const valuesRawStockUsage = [
    rawStockID,
    proStockID,
    thresholdQuantity,
  ];

  addRawStockUsage(valuesRawStockUsage, (err) => {
    if (err) {
      console.error("Error inserting data into MySQL (rawstockusage):", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({
      message: "Produced stock added successfully",
    });
  });
};

exports.updateRawStockUsage = (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  const {
    proStockName,
    rawStockName,
    rawStockID,
    proStockID,
    thresholdQuantity,
  } = updatedData;

  const sqlUpdateRawStockUsage = `UPDATE rawstockusage ru 
    ru.rawStockID = ?,
    ru.proStockID = ?,
    ru.thresholdQuantity =?  
  WHERE ru.usageID = ?`;

  db.query(
    sqlUpdateRawStockUsage,
    [proStockName, rawStockName, rawStockID, proStockID, thresholdQuantity, id],
    (error, results) => {
      if (error) {
        return res.status(500).json({
          error: "An error occurred while updating the raw stock usage data.",
        });
      }
      res.json({ message: "Raw Stock Usage data updated successfully." });
    }
  );
};
