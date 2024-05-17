const { getRawStockUsage } = require("../models/rawStockUsageModel");


exports.getRawStockUsage = (req, res) => {
    const id = req.params.id;
    
    getRawStockUsage(id, (error, results) => {
      if (error) {
        return res.status(500).json({ error: 'Database query error' });
      }
      if (results.length === 0){
        return res.status(404).json({error: "Raw Stock Not Found"});
      }
      res.json(results[0]);
    });
  }