const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { route } = require('./indexRouter');

router.get('/', productController.productIndex);
router.get('/detail/:id/:category', productController.detail);

module.exports = router;