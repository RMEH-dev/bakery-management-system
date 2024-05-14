// routes/stocksRoutes.js
const express = require('express');
const router = express.Router();
const rawStockController = require('../controllers/rawStockController');

router.get('/rawStock', rawStockController.rawStock);

module.exports = router;