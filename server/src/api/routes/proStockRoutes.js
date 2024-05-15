//Routing to the controller methods
const express = require('express');
const router = express.Router();
const proStockController = require('../controllers/proStockController');
const proStockInput = require('../validations/proStockInput');

router.get('/proStock', proStockController.getProStockInfo);
router.post('/addProStock', proStockInput.proStockInputValidate, proStockController.addProStock);

module.exports = router;