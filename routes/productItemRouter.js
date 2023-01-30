const express = require('express');
const productItemController = require('../controllers/ProductItemController')
let router = express.Router();

// Products router
router.post('/add/:productId', productItemController.addProductItem)

router.get('/all/:productId', productItemController.getAllProductItems)

router.put('/:id', productItemController.updateProductItem)

router.delete('/:id', productItemController.deleteProductItem)

module.exports = router;