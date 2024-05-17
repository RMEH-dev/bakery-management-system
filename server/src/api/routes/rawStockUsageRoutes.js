const rawStockUsageController = require('../controllers/rawStockUsageController');
const router = require('./rawStockRoutes');

router.get('/getRawStockUsage/:id',rawStockUsageController.getRawStockUsage)

module.exports = router;