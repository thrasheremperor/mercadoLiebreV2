const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.productIndex);
router.get('/detail/:id', productController.detailList);

module.exports = router;