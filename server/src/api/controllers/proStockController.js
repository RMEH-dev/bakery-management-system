const { getProStockDetails, insertProStock } = require("../models/proStockModel");
const generateProStockID = require("../helpers/generateProStockID");
const generateProBatchNo = require("../helpers/generateProBatchNo");
const { insertProItemDetails} = require("../models/proItemDetailsModel");

exports.getProStockInfo = (req, res) => {
  getProStockDetails([], (error, results) => {
    if (error) {
      console.error("Error fetching ProStock details from the database:", error);
      return res.status(500).json({ error: "Database query error" });
    }
    res.json(results);
  });
};


exports.addProStock = (req, res) => {
  const {
    proStockName,
    manufactureDate,
    expirationDate,
    quantity,
    pricePerItem,
    category,
    subCategory,
  } = req.body;

  generateProStockID((err, newProStockID) => {
    if (err) {
      console.error("Error generating new proStockID:", err);
      return res.status(500).json({ error: "Database error" });
    }

    const valuesProStock = [
      newProStockID,
      proStockName,
      quantity,
      manufactureDate,
      expirationDate,
    ];

    insertProStock(valuesProStock, (err) => {
      if (err) {
        console.error("Error inserting data into MySQL (producedstock):", err);
        return res.status(500).json({ error: "Database error" });
      }

      generateProBatchNo(newProStockID, (err, newProBatchNo) => {
        if (err) {
          console.error("Error generating new proBatchNo:", err);
          return res.status(500).json({ error: "Database error" });
        }

        const valuesProItemDetails = [
          newProStockID,
          newProBatchNo,
          category,
          subCategory,
          pricePerItem,
        ];

        insertProItemDetails(valuesProItemDetails, (err) => {
          if (err) {
            console.error("Error inserting data into MySQL (proitemdetails):", err);
            return res.status(500).json({ error: "Database error" });
          }

          res.status(200).json({
            message: "Produced stock added successfully",
            proStockID: newProStockID,
            proBatchNo: newProBatchNo,
          });
        });
      });
    });
  });
};