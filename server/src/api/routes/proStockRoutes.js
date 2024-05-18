//Routing to the controller methods
const express = require('express');
const router = express.Router();
const proStockController = require('../controllers/proStockController');
const proStockInput = require('../validations/proStockInput');

router.get('/proStock', proStockController.getProStockInfo);
router.post('/addProStock', proStockInput.proStockInputValidate, proStockController.addProStock);
router.get('/getProStockNames', proStockController.getProStockNames);
router.get('/getProStockIDs', proStockController.getProStockIDs);
router.put('updateProStock/:id', proStockController.updateProStock);
router.get('/getProStock/:id', proStockController.getProStock);

module.exports = router;